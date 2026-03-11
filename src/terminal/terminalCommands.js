export function runCommand(rawCommand, { email }) {
  const cmd = rawCommand.trim();
  if (!cmd) return { type: "NOOP" }; // NOOP: empty command → ignore
  const parts = cmd.split(" "); // Split command into [commandName, ...arguments]
  const main = parts[0].toLowerCase();

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
        { text: "msgPanel    - open messages panel", className: "info" },
        { text: "projPanel   - open projects panel", className: "info" },
        { text: "certPanel   - open certificates panel", className: "info" },
        { text: "closePanel  - return to terminal", className: "info" },
        { text: "clear       - clear terminal", className: "info" },
        { text: 'logout      - logout', className: "info" },
        { text: "exit        - exit terminal", className: "info" },

      ],
    }),

    login: () => ({
      type: "LINES",
      lines: [
        promptLine,
        { text: "Authentication is not connected yet.", className: "info" },
      ],
    }),

    msgpanel: () => ({
      type: "NAVIGATE",
      lines: [
        promptLine,
        { text: "Opening Messages Panel...", className: "info" },
      ],
      view: "messages"
    }),

    projpanel: () => ({
      type: "NAVIGATE",
      lines: [
        promptLine,
        { text: "Opening Projects Panel...", className: "info" },
      ],
      view: "projects"
    }),

    certpanel: () => ({
      type: "NAVIGATE",
      lines: [
        promptLine,
        { text: "Opening Certificates Panel...", className: "info" },
      ],
      view: "certificates"
    }),

    closepanel: () => ({
      type: "NAVIGATE",
      lines: [
        promptLine,
        { text: "Returning to terminal...", className: "info" },
      ],
      view: "terminal"
    }),

    clear: () => ({ type: "CLEAR" }),


    logout: () => ({
      type: "LINES",
      lines: [
        promptLine,
        { text: "logout command is not connected yet.", className: "info" },
      ],
    }),

    exit: () => ({
      type: "NAVIGATE",
      lines: [
        promptLine,
        { text: "Closing admin terminal...", className: "info" },
      ],
      view: "visitor",
    }),

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
















