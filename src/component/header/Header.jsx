import { useState } from "react";
import { toggleTheme } from "../../theme";
import "./Header.css";

function Header({ ActivePage, setActivePage, handelAdmin, setContactProject }) {
  const nav_item = [
    { id: 1, label: "Home" },
    { id: 2, label: "Projects" },
    { id: 3, label: "About" },
    { id: 4, label: "Contact" }
  ];

  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    toggleTheme();
    setDark((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">

        <div className="left-side">
          <div className="theme-container">
            <button onClick={handleToggle} className="theme-btn">
              {dark ? (<img src="https://cerine0205.github.io/portfolio-system/assets/sun.png" alt="Light Mode" className="theme-icon" />)
                : (<img src="https://cerine0205.github.io/portfolio-system/assets/moon.png" alt="Dark Mode" className="theme-icon" />)}
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
                  onClick={() => {
                    if (item.label === "Contact") { setContactProject(null) }
                    setActivePage(item.label)
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>

          <button className="admin-btn"
            onClick={handelAdmin}>Terminal →</button>
        </div>

      </div>
    </header>
  );
}

export default Header;