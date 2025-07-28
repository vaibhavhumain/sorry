import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    background: "#ffb6c1",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#e75480",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    fontWeight: "bold",
    transition: "0.3s"
  };

  const linkHoverStyle = {
    backgroundColor: "#d1476e",
    transform: "scale(1.05)"
  };

  return (
    <nav style={navStyle}>
      {["/", "/memories", "/letter", "/final"].map((path, index) => {
        const label = ["Home", "Memories", "Letter", "Final"][index];
        return (
          <Link
            key={path}
            to={path}
            style={linkStyle}
            onMouseEnter={e => Object.assign(e.target.style, linkHoverStyle)}
            onMouseLeave={e => Object.assign(e.target.style, linkStyle)}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
