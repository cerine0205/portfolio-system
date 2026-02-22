import "./Admin.css";
import { useState, useRef, useEffect } from "react";
import { runCommand } from "../terminal/terminalCommands";
import { getProjects, createProject, deleteProject ,updateProject} from "../api/projectsApi";

function Admin({ email, setProjects }) {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);

  const terminalEndRef = useRef(null);

  const handleCommand = async (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const res = runCommand(command, { email });

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

    //  نربط الباك مباشرة
    if (res.type === "ACTION") {
      // نعرض سطور الأمر (Fetching.. / Deleting..)
      setOutput((prev) => [...prev, ...res.lines]);
      setCommand("");

      try {
        if (res.action === "LIST_PROJECTS") {
          const data = await getProjects();
          setProjects(data);
          setOutput(prev => [
            ...prev,
            ...data.map(p => ({
              text: `-[${p.id}] ${p.name}`,
              className: "console-text"
            }))
          ]); return;
        }

        if (res.action === "DELETE_PROJECT") {
          await deleteProject(res.payload.id);

          const data = await getProjects(); //refresh
          setProjects(data);
          setOutput((prev) => [
            ...prev,
            { text: "Project deleted successfully", className: "success" }
          ]);

          return;
        }

        if (res.action === "CREATE_PROJECT") {
          await createProject(res.payload);
          const data = await getProjects(); //refresh
          setProjects(data);
          setOutput((prev) => [
            ...prev,
            { text: "Project created successfully", className: "success" }
          ]);

          return;
        }


        if (res.action === "UPDATE_PROJECT") {
          await updateProject(res.payload.id, {
            name: res.payload.name,
            year: res.payload.year,
            description: res.payload.description,
          });

          setOutput(prev => [
            ...prev,
            { text: "Project updated successfully", className: "success" }
          ]);

          // (اختياري) لو تبين تحدّثين state في الواجهة:
          // const data = await getProjects();
          // setProjects(data);

          return;
        }


      } catch (err) {
        console.error(err);
        setOutput((prev) => [
          ...prev,
          { text: "API error. Check console.", className: "error" },
        ]);
      }

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