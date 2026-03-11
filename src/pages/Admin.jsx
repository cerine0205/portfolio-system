import { login, logout } from "../api/authApi";
import "./Admin.css";
import { useState, useRef, useEffect } from "react";
import { runCommand } from "../terminal/terminalCommands";
import AdminMessages from "./AdminMessages/AdminMessages";
import AdminProjects from "./AdminProjects/AdminProjects";
import AdminCertificates from "./AdminCertificates/AdminCertificates";
import { useNavigate } from "react-router-dom";

function Admin({ email }) {

  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const [adminView, setAdminView] = useState("terminal");
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const navigate = useNavigate();

  const terminalEndRef = useRef(null);

  const handleCommand = async (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const res = runCommand(command, { email, isAuthenticated });


    /* ------------------- Login ------------------- */
    if (res.type === "AUTH_LOGIN") {

      setOutput((prev) => [...prev, ...res.lines]);
      setCommand("");

      try {

        const data = await login(res.payload);

        setOutput((prev) => [
          ...prev,
          { text: "Login successful.", className: "success" }
        ]);

        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);

      } catch {

        setOutput((prev) => [
          ...prev,
          { text: "Invalid credentials.", className: "error" }
        ]);

      }

      return;
    }

    /* ------------------- Logout ------------------- */
    if (res.type === "LOGOUT") {

      setOutput((prev) => [...prev, ...res.lines]);
      setCommand("");

      try {

        const token = localStorage.getItem("token");

        if (token) {
          await logout(token);
        }

        localStorage.removeItem("token");
        setIsAuthenticated(false);

        setOutput((prev) => [
          ...prev,
          { text: "Logged out successfully.", className: "success" }
        ]);
        navigate("/");

      } catch {

        setOutput((prev) => [
          ...prev,
          { text: "Logout failed.", className: "error" }
        ]);

      }

      return;
    }

    /* ------------------- Navigation ------------------- */
    if (res.type === "NAVIGATE") {
      if (res.view === "visitor") {
        navigate("/");
        setCommand("");
        return;
      }

      setAdminView(res.view);
      setOutput((prev) => [...prev, ...res.lines]);
      setCommand("");
      return;
    }

    /* ------------------- Terminal Controls ------------------- */
    //  ignore empty commands
    if (res.type === "NOOP") {
      setCommand("");
      return;
    }

    if (res.type === "CLEAR") {
      setOutput([]);
      setCommand("");
      return;
    }

    if (res.type === "LINES") {
      setOutput((prev) => [...prev, ...res.lines]);
      setCommand("");
      return;
    }
    /* ------------------------------------------------------------ */

  };


  // auto scroll terminal when new line is added
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  return (
    <div className="admin">
      <div className="terminal">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <p className="terminal-title">Admin Dashboard</p>
        </div>

        <div className="terminal-content">
          <p className="terminal-text">Portfolio Admin Terminal v1.0</p>
          <p className="login-instruction">Type "login" to authenticate.</p>

          <div className="terminal-output">{output.map((line, index) =>
            <span key={index} className={line.className}>{line.text}<br /></span>)}</div>
          <input
            className="terminal-input"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
          />

          <div ref={terminalEndRef}></div>

        </div>
      </div>

      {adminView === "messages" && <AdminMessages />}
      {adminView === "projects" && <AdminProjects />}
      {adminView === "certificates" && <AdminCertificates />}

    </div>
  );
}

export default Admin;