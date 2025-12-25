// src/components/Layout/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Navigation</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="block p-2 hover:bg-gray-700 rounded">
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="block p-2 hover:bg-gray-700 rounded"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; // <-- PASTIKAN INI
