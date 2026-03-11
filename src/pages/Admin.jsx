import { login ,logout} from "../api/authApi";
import "./Admin.css";
import { useState, useRef, useEffect } from "react";
import { runCommand } from "../terminal/terminalCommands";
import AdminMessages from "./AdminMessages/AdminMessages";
import AdminProjects from "./AdminProjects/AdminProjects";
import AdminCertificates from "./AdminCertificates/AdminCertificates";

function Admin({ email }) {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const [adminView, setAdminView] = useState("terminal");

  const terminalEndRef = useRef(null);

  const handleCommand = async (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const res = runCommand(command, { email });

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

      } catch {

        setOutput((prev) => [
          ...prev,
          { text: "Invalid credentials.", className: "error" }
        ]);

      }

      return;
    }



    
if (res.type === "LOGOUT") {

  setOutput((prev) => [...prev, ...res.lines]);
  setCommand("");

  try {

    const token = localStorage.getItem("token");

    if (token) {
      await logout(token);
    }

    localStorage.removeItem("token");

    setOutput((prev) => [
      ...prev,
      { text: "Logged out successfully.", className: "success" }
    ]);

  } catch {

    setOutput((prev) => [
      ...prev,
      { text: "Logout failed.", className: "error" }
    ]);

  }

  return;
}

    if (res.type === "NAVIGATE") {
      setAdminView(res.view);
      setOutput((prev) => [...prev, ...res.lines]);
      setCommand("");
      return;
    }

    //  تجاهل لو المستخدم ضغط Enter بدون كتابة
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

  };


  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]); // تحريك الترمنال عند تغيير output

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

          <p className="terminal-output">{output.map((line, index) =>
            <span key={index} className={line.className}>{line.text}<br /></span>)}</p>
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