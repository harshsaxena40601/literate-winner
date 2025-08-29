import React from 'react'
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png"; // Import logo directly from public folder

export default function Nav() {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-40 nav-texture">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={logo} 
              alt="99 Market Logo" 
              className="h-9 w-9 object-contain" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#6A0DAD] to-[#7B2CBF] opacity-50 blur-sm -z-10"></div>
          </div>
          <span className="logo-text text-lg">99 Market</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-3">
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
