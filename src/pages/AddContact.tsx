import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";

export default function AddContact({ onContactAdded }: { onContactAdded?: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, email, phone };
    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    localStorage.setItem("contacts", JSON.stringify([...contacts, newContact]));

    setName("");
    setEmail("");
    setPhone("");

    onContactAdded?.();
  };

  return (
    <motion.div
      className="p-5 bg-white rounded-xl shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-600">
        <FaUserPlus /> Add New Contact
      </h2>

      <form onSubmit={handleAdd} className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg transition"
        >
          Add Contact
        </button>
      </form>
    </motion.div>
  );
}
