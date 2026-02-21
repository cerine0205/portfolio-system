import "./Admin.css";
import { useState, useRef, useEffect } from "react";
import { runCommand } from "../terminal/terminalCommands";
import { resolveAction } from "../terminal/terminalActions";
import { handleCreateInput } from "../terminal/terminalCreateFlow";

function Admin({ email, projects, setProjects }) {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [draft, setDraft] = useState({});

  const terminalEndRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    if (isCreating) {
      const result = handleCreateInput({
        value: command,
        email,
        draft,
        projects,
      });

      setOutput(prev => [...prev, ...result.lines]);
      setDraft(result.nextDraft);
      setCommand("");

      if (result.done && result.newProject) {
        setProjects(prev => [...prev, result.newProject]);
        setIsCreating(false);
      }

      return;
    }


    const res = runCommand(command, { email });
    const resolved = resolveAction( res,
      {
        projects,
        setProjects,
        setOutput,
        setCommand,
        setIsCreating,
        setDraft
      });

    if (resolved.type === "CLEAR") {
      setOutput([]);
      setCommand("");
      return;
    }

    if (resolved.type === "LINES" ||resolved.type === "ACTION") {
      setOutput(prev => [...prev, ...resolved.lines]);
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
    </div>
  );
}

export default Admin;