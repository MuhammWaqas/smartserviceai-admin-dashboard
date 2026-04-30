import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { createService, updateService } from "../../../api/providerService";

export default function ServicesModal({ editService, onCancel, onCreated }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editService) {
      setName(editService.name || "");
      setCategory(editService.category || "");
      setPrice(editService.price || "");
      setDescription(editService.description || "");
      setStatus(editService.status || "");
      setImage(null);
    }
  }, [editService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("description", description);
      if (status) formData.append("status", status);
      if (image) formData.append("images", image);

      if (editService) {
        await updateService(editService._id, formData);
      } else {
        await createService(formData);
      }

      setLoading(false);
      onCreated && onCreated();
      // Reset fields
      setName("");
      setCategory("");
      setPrice("");
      setDescription("");
      setStatus("");
      setImage(null);
    } catch (err) {
      setLoading(false);
      console.error(err);
      setError(err.response?.data?.message || "Failed to save service");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <p className="text-danger">{error}</p>}
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Service Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Service Image</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      </Form.Group>

      <div className="d-flex justify-content-end gap-2">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </Button>
      </div>
    </Form>
  );
}
