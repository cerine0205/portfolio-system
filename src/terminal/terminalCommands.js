export function runCommand(rawCommand, { email }) {
  const cmd = rawCommand.trim();
  if (!cmd) return { type: "NOOP" }; // NOOP: empty command → ignore
  const parts = cmd.split(" "); // Split command into [commandName, ...arguments]
  const main = parts[0].toLowerCase(); // Command name (case-insensitive)
  const args = parts.slice(1); // Command arguments (everything after the command name)
  // delProj 4 -> main: "delproj" , args: 5

  const promptLine = {
    text: `${email}:~$ ${cmd}`,
    className: "command",
  };

  const commands = {
    help: () => ({
      type: "LINES",
      lines: [
        promptLine,
        { text: "Available commands:", className: "info" },
        { text: "lsProj      - list projects", className: "info" },
        { text: "createProj  - create new project", className: "info" },
        { text: "editname     - edit project name", className: "info" },
        { text: "delProj     - delete project", className: "info" },
        { text: "lsMsgs      - list messages", className: "info" },
        { text: "exit        - logout", className: "info" },
      ],
    }),

    login: () => ({
      type: "LINES",
      lines: [
        promptLine,
        { text: "Authentication successful! Welcome, Admin.", className: "success" },
      ],
    }),

    clear: () => ({ type: "CLEAR" }),


    // list projects

    lsproj: () => ({
      type: "ACTION",
      lines: [
        promptLine,
        { text: "Fetching projects...", className: "info" },
      ],
      action: "LIST_PROJECTS",
    }),
    //



    // delete project
    delproj: () => {
      if (!args[0]) { // Ensure the command includes a project ID argument
        return {
          type: "LINES",
          lines: [
            promptLine,
            { text: "Usage: delProj <projectId>", className: "error" },
          ],
        };
      }

      const id = Number(args[0]);

      if (isNaN(id)) {
        return {
          type: "LINES",
          lines: [
            promptLine,
            { text: "projectId must be a number.", className: "error" },
          ],
        };
      }

      return {
        type: "ACTION",
        lines: [
          promptLine,
          { text: `Deleting project ${id}..., className: "info" ` },
        ],
        action: "DELETE_PROJECT",
        payload: { id },
      };
    },

    //

    // create project (interactive)
    createproj: () => {
      if (!args[0] || !args[1] || !args[2]) {
        return {
          type: "LINES",
          lines: [
            promptLine,
            { text: "Usage: createProj <name> <year> <description>", className: "error" },
          ],
        };
      }

      return {
        type: "ACTION",
        lines: [
          promptLine,
          { text: "Creating project...", className: "info" },
        ],
        action: "CREATE_PROJECT",
        payload: {
          name: args[0],
          year: args[1],
          description: args.slice(2).join(" "),
        },
      };
    },
    //

  // edit project name
editname: () => {
  if (!args[0] || !args[1]) {
    return {
      type: "LINES",
      lines: [
        promptLine,
        { text: "Usage: editName <id> <name>", className: "error" },
      ],
    };
  }

  const id = Number(args[0]);
  if (Number.isNaN(id)) {
    return {
      type: "LINES",
      lines: [
        promptLine,
        { text: "id must be a number.", className: "error" },
      ],
    };
  }

  const name = args.slice(1).join(" "); // عشان لو الاسم فيه مسافة
  return {
    type: "ACTION",
    lines: [
      promptLine,
      { text: `Updating project ${id} name...`, className: "info" },
    ],
    action: "UPDATE_PROJECT",
    payload: { id,  name  },
  };
},
    //

    //list messages
    //

    //delete message
    //


  };

  return commands[main]
    ? commands[main]()
    : {
      type: "LINES",
      lines: [
        promptLine,
        { text: "Command not recognized", className: "error" },
      ],
    };
}