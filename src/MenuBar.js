import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './MenuBar.css'; 

function MenuBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      <nav>
        {/* Add classes for styling */}
        {location.pathname !== '/movies' && (
          <Link to="/movies" className="menu-button">
            Movies
          </Link>
        )}
        {location.pathname !== '/company-info' && (
          <Link to="/company-info" className="menu-button">
            Company Info
          </Link>
        )}
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
}

export default MenuBar;
