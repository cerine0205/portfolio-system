export function resolveAction(res, 
  { projects,setProjects ,setOutput ,
    setCommand,setIsCreating,setDraft}) {
      
  if (res.type !== "ACTION") return res;

  if (res.action === "LIST_PROJECTS") {
    const projectLines = projects.map((p) => ({
      text: `- [${p.id}] ${p.name} (${p.year})`,
      className: "console-text",
    }));

    return {
      ...res,
      lines: [...res.lines, ...projectLines],
    };
  }

  else if (res.action === "DELETE_PROJECT") {
    const id = res.payload.id;

    const exists = projects.find(p => p.id === id);

    if (!exists) {
      setOutput(prev => [
        ...prev,
        ...res.lines,
        { text: `Project ${id} not found.`, className: "error" }
      ]);
      setCommand("");
      return {type:"NOOP"};
    }

    setProjects(prev => prev.filter(p => p.id !== id));

    setOutput(prev => [
      ...prev,
      ...res.lines,
      { text: `Project ${id} deleted successfully.`, className: "success" }
    ]);

    setCommand("");
      return {type:"NOOP"};
  }

  else if (res.action === "CREATE_PROJECT") {
        setIsCreating(true);
        setDraft({});
        setOutput(prev => [...prev, ...res.lines]);
        setCommand("");
        return {type:"NOOP"};
      }

  

  return res;
}