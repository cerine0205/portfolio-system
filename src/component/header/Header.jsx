import { useState } from "react";
import "./Header.css";

function Header({ ActivePage, setActivePage }) {
  const nav_item = [
    { id: 1, label: "Home" },
    { id: 2, label: "Projects" },
    { id: 3, label: "About" },
    { id: 4, label: "Contact" }
  ];

  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.setAttribute("data-theme", dark ? "light" : "dark");
  };

  return (
    <header className="header">
      <div className="header-container">

        <div className="left-side">
          <div className="theme-container">
            <button onClick={toggleTheme} className="theme-btn">
              {dark ? (<img src="src\assets\sun.png" alt="Dark Mode" className="theme-icon" />) 
              : (<img src="src\assets\moon.png" alt="Light Mode" className="theme-icon" />)}
            </button>
          </div>

          <div className="logo">
            <h1>cerine<span>.</span></h1>
          </div>

        </div>


        <div className="right-side">
          <nav className="header-nav">
            <ul className="nav-list">
              {nav_item.map((item) => (
                <li
                  key={item.id}
                  className={
                    ActivePage === item.label
                      ? "nav-item-active"
                      : "nav-item"
                  }
                  onClick={() => setActivePage(item.label)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>

          <button className="admin-btn">Admin →</button>
        </div>

      </div>
    </header>
  );
}

export default Header;