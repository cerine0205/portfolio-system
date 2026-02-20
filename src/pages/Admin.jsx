import "./Admin.css";
import { useState,useRef,useEffect } from "react";

function Admin({email, help}) {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);

  const terminalEndRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      if (command.trim().toLowerCase() === "login") {
        setOutput([
          ...output,
          { text: `${email}:~$ ${command}`, className: "command" },
          { text: "Authentication successful! Welcome, Admin.", className: "success" }
        ]);
      }else if (command.trim().toLowerCase() === "clear") {
        setOutput([]);
      } else if (command.trim().toLowerCase() === "help") {
        setOutput([
          ...output,
          { text: `${email}:~$ ${command}`, className: "command" },
          { text: help, className: "console-text" }
        ]);
      }
      else{
        setOutput([
          ...output,
          { text: `${email}:~$ ${command}`, className: "command" },
          { text: "Command not recognized", className: "error" }
        ]);
      }
      setCommand("");
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
    </div>
  );
}

export default Admin;