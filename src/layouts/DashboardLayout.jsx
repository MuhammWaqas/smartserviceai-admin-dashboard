import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


export default function DashboardLayout() {
    return (
        <>
            <main className="main" id="top">
                <Header />
                <div className="content">
                    <div>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    )
}
