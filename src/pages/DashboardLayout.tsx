import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import {
  HomeIcon,
  ListBulletIcon,
  ArrowLeftOnRectangleIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    auth.signOut();
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <nav className="bg-blue-500 text-white flex justify-between items-center px-6 py-3 shadow">
        <h1 className="text-lg font-semibold">📇 Contact Manager</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 px-4 py-1.5 rounded hover:bg-red-600 transition"
        >
          <ArrowLeftOnRectangleIcon className="h-5 w-5" />
          Logout
        </button>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`bg-white shadow border-r transition-all duration-300 flex flex-col ${
            isCollapsed ? "w-16" : "w-56"
          }`}
        >
          <div className="flex justify-end p-2 border-b">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded hover:bg-gray-200"
            >
              {isCollapsed ? (
                <ChevronDoubleRightIcon className="h-5 w-5 text-blue-500" />
              ) : (
                <ChevronDoubleLeftIcon className="h-5 w-5 text-blue-500" />
              )}
            </button>
          </div>

          <ul className="flex-1 p-3 space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 transition text-gray-700"
              >
                <HomeIcon className="h-6 w-6 text-blue-500" />
                {!isCollapsed && <span>Home</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/contact-list"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 transition text-gray-700"
              >
                <ListBulletIcon className="h-6 w-6 text-blue-500" />
                {!isCollapsed && <span>Contact List</span>}
              </Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
