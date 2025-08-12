import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import ContactList from "./pages/ContactList";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<AddContact />} />
        <Route path="/contact-list" element={<ContactList />} />
      </Route>
    </Routes>
  );
}
