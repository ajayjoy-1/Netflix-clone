import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__left">
        <h1 className="nav__logo">NETFLIX</h1>
        <div className="nav__links">
          <span>Home</span>
          <span>Movies</span>
          <span>Series</span>
          <span>My List</span>
        </div>
      </div>
      <div className="nav__right">
        <img 
          className="nav__avatar" 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
          alt="Netflix Avatar" 
        />
      </div>
    </div>
  );
}