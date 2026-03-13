export function runCommand(rawCommand, { email, isAuthenticated }) {
  const cmd = rawCommand.trim();
  if (!cmd) return { type: "NOOP" };

  const parts = cmd.split(" ");
  const main = parts[0].toLowerCase();
  const args = parts.slice(1);

  const protectedCommands = [
    "msgpanel",
    "projpanel",
    "certpanel",
    "skillpanel",
    "logout",
  ];

  const promptLine = {
    text: `${email}:~$ ${cmd}`,
    className: "command",
  };

  if (protectedCommands.includes(main) && !isAuthenticated) {
    return {
      type: "LINES",
      lines: [
        promptLine,
        { text: "Please login first.", className: "error" },
      ],
    };
  }

  const commands = {
    help: () => {
      const generalLines = [
        promptLine,
        { text: "Available commands:", className: "info" },
        { text: "", className: "info" },
        { text: "General", className: "title" },
        { text: "help - show available commands", className: "info" },
        { text: "whoami - about the developer", className: "info" },
        { text: "theme - toggle dark/light mode", className: "info" },
        { text: "github - open GitHub profile", className: "info" },
        { text: "clear - clear terminal", className: "info" },
        { text: "exit - exit terminal", className: "info" },
        { text: "", className: "info" },
      ];

      const adminLines = isAuthenticated
        ? [
          { text: "Admin", className: "title" },
          { text: "msgPanel - open messages panel", className: "info" },
          { text: "projPanel - open projects panel", className: "info" },
          { text: "certPanel - open certificates panel", className: "info" },
          { text: "skillPanel - open skills panel", className: "info" },
          { text: "closePanel - return to terminal", className: "info" },
          { text: "logout - logout", className: "info" },
        ]
        : [
          { text: "Admin", className: "title" },
          { text: "login <email> <password> - login as admin", className: "info" },
        ];

      return {
        type: "LINES",
        lines: [...generalLines, ...adminLines],
      };
    },

    whoami: () => ({
      type: "LINES",
      lines: [
        promptLine,
        {
          text: "Cerine — Computer Science student and full-stack developer.",
          className: "info",
        },
        {
          text: "Focused on building clean systems and turning ideas into real software.",
          className: "info",
        },
        {
          text: "React • Laravel • APIs • Databases • Game Dev • AI",
          className: "title",
        },
      ],
    }),

    theme: () => ({
      type: "THEME",
      lines: [
        promptLine,
        { text: "Switching theme...", className: "info" },
      ],
    }),

    github: () => ({
      type: "OPEN_URL",
      lines: [
        promptLine,
        { text: "Opening GitHub profile...", className: "info" },
      ],
      url: "https://github.com/cerine0205",
    }),

    login: () => {
      if (!args[0] || !args[1]) {
        return {
          type: "LINES",
          lines: [
            promptLine,
            { text: "Usage: login <email> <password>", className: "error" },
          ],
        };
      }

      return {
        type: "AUTH_LOGIN",
        lines: [
          promptLine,
          { text: "Authenticating...", className: "info" },
        ],
        payload: {
          email: args[0],
          password: args[1],
        },
      };
    },

    msgpanel: () => ({
      type: "NAVIGATE",
      lines: [
        promptLine,
        { text: "Opening Messages Panel...", className: "info" },
      ],
      view: "messages",
    }),

    projpanel: () => ({
      type: "NAVIGATE",
      lines: [
        promptLine,
        { text: "Opening Projects Panel...", className: "info" },
      ],
      view: "projects",
    }),

    certpanel: () => ({
      type: "NAVIGATE",
      lines: [
        promptLine,
        { text: "Opening Certificates Panel...", className: "info" },
      ],
      view: "certificates",
    }),

    skillpanel: () => ({
      type: "NAVIGATE",
      lines: [
        promptLine,
        { text: "Opening Skills Panel...", className: "info" },
      ],
      view: "skills",
    }),

    closepanel: () => ({
      type: "NAVIGATE",
      lines: [
        promptLine,
        { text: "Returning to terminal...", className: "info" },
      ],
      view: "terminal",
    }),

    clear: () => ({ type: "CLEAR" }),

    logout: () => ({
      type: "LOGOUT",
      lines: [
        promptLine,
        { text: "Logging out...", className: "info" },
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
        { text: 'Command not recognized. Type "help" to see available commands.', className: "error" },
      ],
    };
}