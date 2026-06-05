import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import axiosInstance from "../../api/axiosInstance";

export default function ChatModal({ isOpen, onClose, bookingId, clientName, serviceName }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [socket, setSocket] = useState(null);
  const messagesEndRef = useRef(null);

  // Decode JWT to get provider's user ID
  const getProviderId = () => {
    const token = localStorage.getItem("access_token");
    if (!token) return null;
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload).sub;
    } catch (e) {
      console.error("Error decoding token:", e);
      return null;
    }
  };

  const providerId = getProviderId();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (!isOpen || !bookingId) return;

    const token = localStorage.getItem("access_token");
    if (!token) return;

    // 1. Fetch chat history
    const fetchHistory = async () => {
      try {
        const response = await axiosInstance.get(`/chat/conversation/booking/${bookingId}`);
        setMessages(response.data.messages || []);
      } catch (err) {
        console.error("Failed to load chat history", err);
      }
    };

    fetchHistory();

    // 2. Connect to Socket Server
    const wsUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
    const socketConn = io(wsUrl, {
      auth: { token },
      transports: ["websocket"],
    });

    socketConn.on("connect", () => {
      console.log("Provider Chat Socket connected:", socketConn.id);
      socketConn.emit("join_room", { bookingId });
    });

    socketConn.on("message_received", (message) => {
      setMessages((prev) => {
        if (prev.some((m) => m._id === message._id)) return prev;
        return [...prev, message];
      });
    });

    socketConn.on("connect_error", (err) => {
      console.error("Socket connection error:", err.message);
    });

    setSocket(socketConn);

    return () => {
      socketConn.disconnect();
      console.log("Provider Chat Socket disconnected");
    };
  }, [isOpen, bookingId]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !socket) return;

    socket.emit("send_msg", {
      bookingId,
      text: inputText,
    });
    setInputText("");
  };

  if (!isOpen) return null;

  return (
    <div
      className="position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column"
      style={{
        width: "400px",
        zIndex: 1050,
        borderLeft: "1px solid #dee2e6",
        animation: "slideIn 0.3s ease-out",
      }}
    >
      {/* HEADER */}
      <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-dark text-white">
        <div>
          <h6 className="mb-0 fw-bold">{clientName || "Client"}</h6>
          <small className="text-light-50">{serviceName}</small>
        </div>
        <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
      </div>

      {/* MESSAGES LIST */}
      <div className="flex-grow-1 p-3 overflow-auto" style={{ backgroundColor: "#f8f9fa" }}>
        {messages.length === 0 ? (
          <div className="text-center text-muted my-5">
            <i className="far fa-comments fa-2x mb-2"></i>
            <p className="small">No messages yet. Send a message to start chatting!</p>
          </div>
        ) : (
          messages.map((msg) => {
            const isMe = msg.sender_id === providerId;
            return (
              <div key={msg._id} className={`d-flex mb-3 ${isMe ? "justify-content-end" : "justify-content-start"}`}>
                <div
                  className="p-2 rounded-3 shadow-sm"
                  style={{
                    maxWidth: "75%",
                    backgroundColor: isMe ? "#0d6efd" : "#ffffff",
                    color: isMe ? "#ffffff" : "#212529",
                    border: isMe ? "none" : "1px solid #e0e0e0",
                  }}
                >
                  <p className="mb-0 small">{msg.text}</p>
                  <div className="text-end mt-1" style={{ fontSize: "10px", opacity: 0.8 }}>
                    {new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* FOOTER INPUT */}
      <form onSubmit={handleSend} className="p-3 border-top bg-white">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </div>
      </form>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
