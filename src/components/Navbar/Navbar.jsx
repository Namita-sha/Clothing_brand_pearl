import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiLogOut } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("pearlUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("pearlUser");
    setUser(null);
    navigate("/auth");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div
        className="navbar-logo"
        onClick={(e) => {
          e.preventDefault();
          if (window.location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            navigate("/");
          }
        }}
        style={{ cursor: "pointer" }}
      >
        PEARL
      </div>

      {/* Nav Links */}
      <div className="navbar-links">
        <Link to="/women">Women</Link>
        <Link to="/men">Men</Link>

        <Link
          to="/"
          className="atelier-link"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname === "/") {
              const section = document.querySelector(".features-grid");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            } else {
              navigate("/", { state: { scrollToAtelier: true } });
            }
          }}
        >
          The Atelier
        </Link>
      </div>

      {/* Icons */}
      <div className="navbar-icons">
        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            className="hidden-search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} className="icon-button" title="Search">
            <FiSearch size={18} />
          </button>
        </div>

        {/* User or Logout */}
        {user ? (
          <>
            <span className="navbar-username">Hi, {user.username}</span>
            <button onClick={handleLogout} className="icon-button" title="Logout">
              <FiLogOut size={20} />
            </button>
          </>
        ) : (
          <Link to="/auth" className="icon-button" title="Login / Signup">
            <FiUser size={20} />
          </Link>
        )}

        {/* Wishlist */}
        <Link to={user ? "/wishlist" : "/auth"} className="icon-button" title="Wishlist">
          <FiHeart />
        </Link>

        {/* Cart */}
        <Link to={user ? "/cart" : "/auth"} className="icon-button" title="Cart">
          <FiShoppingBag />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;





