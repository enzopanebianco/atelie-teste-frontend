import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BannerHeader from "./components/BannerHeader";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function AppRoutes() {
  
    return (
        <Router>
            <BannerHeader />
            <Routes>
                <Route exact path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    )
}