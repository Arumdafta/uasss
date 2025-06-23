"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => router.push("/")}>
        💄 Make.uFlow
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link className="nav-link" href="/">Home</Link>
        <Link className="nav-link" href="/dashboard">Dashboard</Link>
        {!user && <Link className="nav-link" href="/login">Login</Link>}
        {!user && <Link className="nav-link signup-link" href="/signup">Sign Up</Link>}
        {user && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </nav>
  );
}
