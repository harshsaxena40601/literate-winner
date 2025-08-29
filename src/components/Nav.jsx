import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { LOGO } from "../utils/constants";

export default function Nav() {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-40 nav-texture">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO} alt="Logo" className="h-9 w-9" />
          <span className="font-bold text-white text-lg">99 Market</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            <span className="flex items-center gap-2">
              <span>POS</span>
            </span>
          </Link>
          <Link 
            to="/payments" 
            className={`nav-link ${location.pathname === "/payments" ? "active" : ""}`}
          >
            <span className="flex items-center gap-2">
              <span>Payments</span>
            </span>
          </Link>
          <Link 
            to="/analytics" 
            className={`nav-link ${location.pathname === "/analytics" ? "active" : ""}`}
          >
            <span className="flex items-center gap-2">
              <span>Analytics</span>
            </span>
          </Link>
          <Link 
            to="/profile" 
            className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}
          >
            <span className="flex items-center gap-2">
              <span>Profile</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
