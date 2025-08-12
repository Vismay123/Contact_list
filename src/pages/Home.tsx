import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaPlusCircle, FaSearch } from "react-icons/fa";

export default function Home() {
  const [totalContacts, setTotalContacts] = useState(0);

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    setTotalContacts(contacts.length);
  }, []);

  const cardStyle =
    "bg-white p-6 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition border border-gray-200";

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <motion.div
        className="mb-6 bg-white p-5 rounded-lg shadow-sm border border-gray-200"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-1 text-blue-600 flex items-center gap-2">
          Welcome 🎉
        </h2>
        <p className="text-gray-600">Manage your contacts with ease.</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <div className={cardStyle}>
          <FaUsers className="text-blue-500 text-3xl mb-2" />
          <h3 className="text-gray-700 font-medium">Total Contacts</h3>
          <p className="text-lg font-bold text-gray-900">{totalContacts}</p>
        </div>

        <div className={cardStyle}>
          <FaPlusCircle className="text-blue-500 text-3xl mb-2" />
          <h3 className="text-gray-700 font-medium">Add Contact</h3>
          <p className="text-gray-500 text-sm">Add new people quickly.</p>
        </div>

        <div className={cardStyle}>
          <FaSearch className="text-blue-500 text-3xl mb-2" />
          <h3 className="text-gray-700 font-medium">Search & Filter</h3>
          <p className="text-gray-500 text-sm">Find contacts in seconds.</p>
        </div>
      </motion.div>

      <motion.div
        className="bg-blue-500 p-5 rounded-lg text-white shadow-sm text-center hover:bg-blue-600 transition cursor-pointer"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        onClick={() => (window.location.href = "/contact-list")}
      >
        <h3 className="text-lg font-semibold mb-1">View Your Contacts</h3>
        <p className="text-sm opacity-90">Click to manage your contact list.</p>
      </motion.div>
    </div>
  );
}
