import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { LOGO } from "../utils/constants";

export default function Nav() {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-40 nav-texture">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO} alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-gray-900">99 Market</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            POS
          </Link>
          <Link 
            to="/payments" 
            className={`nav-link ${location.pathname === "/payments" ? "active" : ""}`}
          >
            Payments
          </Link>
          <Link 
            to="/analytics" 
            className={`nav-link ${location.pathname === "/analytics" ? "active" : ""}`}
          >
            Analytics
          </Link>
          <Link 
            to="/profile" 
            className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
