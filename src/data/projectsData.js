export const projectsData = [
  {
    id: 1,
    slug: "lattice-db",

    name: "Lattice DB",

    description:
      "An embedded graph database written in Rust, with a query language inspired by Datalog.",

    year: 2024,

    dates: {
      start: "2024-02-01",
      end: "2024-06-12",
      updatedAt: "2024-06-20",
    },

    featured: true,

    status: "completed",

    role: "solo",
    teamSize: 1,

    tags: ["Rust", "Systems", "Database"],

    techStack: ["Rust", "Cargo", "Serde", "Tokio", "CLI"],

    image: "/assets/projects/lattice-thumbnail.png",

    screenshots: [
      "/assets/projects/lattice-1.png",
      "/assets/projects/lattice-2.png",
    ],

    problem:
      "Existing embedded databases lacked expressive graph querying capabilities with low overhead.",

    solution:
      "Built a lightweight graph database in Rust with a Datalog-inspired query engine optimized for embedded environments.",

    links: {
      github: "https://github.com/username/lattice-db",
      liveDemo: "https://lattice-db-demo.vercel.app",
      demoVideo: "https://youtu.be/xxxxxxxxxxx",
      docs: "https://github.com/username/lattice-db#readme",
    },

    license: "MIT",

    certificates: [],
  },

  {
    id: 2,
    slug: "waveform",

    name: "Waveform",

    description:
      "Real-time audio visualization library for the web. Renders spectrograms and waveforms.",

    year: 2023,

    dates: {
      start: "2023-03-10",
      end: "2023-09-22",
      updatedAt: "2023-09-22",
    },

    featured: false,

    status: "completed",

    role: "team",
    teamSize: 3,

    tags: ["WebGPU", "Audio", "TypeScript"],

    techStack: ["TypeScript", "WebGPU", "Vite", "Web Audio API"],

    image: "/assets/projects/waveform-thumbnail.png",

    screenshots: [
      "/assets/projects/waveform-1.png",
      "/assets/projects/waveform-2.png",
    ],

    problem:
      "Web-based audio visualizers often suffer from low performance and poor GPU utilization.",

    solution:
      "Implemented optimized rendering using WebGPU and FFT processing for real-time spectrogram visualization.",

    links: {
      github: "https://github.com/username/waveform",
      liveDemo: "https://waveform-demo.netlify.app",
      demoVideo: "https://youtu.be/yyyyyyyyyyy",
      docs: "",
    },

    license: "Apache-2.0",

    certificates: [],
  },


  {
    id: 3,
    slug: "campusclubs-ui",
    name: "CampusClubs UI",

    description:
      "A responsive front-end UI for a university clubs management system with clean navigation and project sections.",

    year: 2024,

    dates: {
      start: "2024-07-05",
      end: "2024-07-28",
      updatedAt: "2024-07-28",
    },

    featured: true,

    status: "completed",

    role: "solo",
    teamSize: 1,

    tags: ["React", "Frontend", "UI"],

    techStack: ["React", "Vite", "CSS", "GitHub Pages"],

    image: "/assets/projects/campusclubs-thumbnail.png",

    screenshots: [
      "/assets/projects/campusclubs-1.png",
      "/assets/projects/campusclubs-2.png",
    ],

    problem:
      "A simple portfolio-style UI was needed to showcase clubs, events, and engagement with a modern layout.",

    solution:
      "Built a modular React UI with reusable components, responsive layout, and smooth navigation between sections.",

    links: {
      github: "https://github.com/username/campusclubs-ui",
      liveDemo: "https://username.github.io/campusclubs-ui",
      demoVideo: "https://youtu.be/ccccccccccc",
      docs: "https://github.com/username/campusclubs-ui#readme",
    },

    license: "MIT",

    certificates: [],
  },

  {
    id: 4,
    slug: "unity-ramadan-runner",
    name: "Ramadan Runner",

    description:
      "A fast-paced Unity endless runner with collectibles, obstacles, and a score system.",

    year: 2023,

    dates: {
      start: "2023-12-10",
      end: "2024-01-20",
      updatedAt: "2024-01-20",
    },

    featured: false,

    status: "completed",

    role: "solo",
    teamSize: 1,

    tags: ["Unity", "Game", "C#"],
    techStack: ["Unity", "C#", "TextMeshPro", "Animator"],

    image: "/assets/projects/ramadan-runner-thumbnail.png",

    screenshots: [
      "/assets/projects/ramadan-runner-1.png",
      "/assets/projects/ramadan-runner-2.png",
    ],

    problem:
      "Wanted a small game project to practice core gameplay loops, UI, and performance basics.",

    solution:
      "Implemented player movement, obstacles, pickups, scoring, and UI screens with clean scene organization.",

    links: {
      github: "https://github.com/username/ramadan-runner",
      liveDemo: "",
      demoVideo: "https://youtu.be/rrrrrrrrrrr",
      docs: "https://github.com/username/ramadan-runner#readme",
    },

    license: "MIT",

    certificates: [],
  },

  {
    id: 5,
    slug: "csharp-budget-tracker",
    name: "Budget Tracker",

    description:
      "A C# desktop app to track expenses and income with categories, summaries, and export options.",

    year: 2024,

    dates: {
      start: "2024-03-02",
      end: "2024-04-18",
      updatedAt: "2024-04-18",
    },

    featured: false,

    status: "completed",

    role: "solo",
    teamSize: 1,

    tags: ["C#", "Desktop", "App"],

    techStack: ["C#", ".NET", "WPF", "SQLite"],

    image: "/assets/projects/budget-tracker-thumbnail.png",

    screenshots: [
      "/assets/projects/budget-tracker-1.png",
      "/assets/projects/budget-tracker-2.png",
    ],

    problem:
      "Needed a simple personal finance tool with quick input and clear monthly summaries.",

    solution:
      "Built a WPF app with category-based transactions, monthly charts, and local persistence using SQLite.",

    links: {
      github: "https://github.com/username/budget-tracker",
      liveDemo: "",
      demoVideo: "https://youtu.be/bbbbbbbbbbb",
      docs: "https://github.com/username/budget-tracker#readme",
    },

    license: "MIT",

    certificates: [],
  },

  {
    id: 6,
    slug: "react-admin-terminal",
    name: "Admin Terminal UI",

    description:
      "A terminal-style admin interface for managing projects with commands, history, and quick actions.",

    year: 2024,

    dates: {
      start: "2024-08-01",
      end: "2024-08-20",
      updatedAt: "2024-08-20",
    },

    featured: true,

    status: "in-progress",

    role: "solo",
    teamSize: 1,

    tags: ["React", "Frontend", "Terminal"],

    techStack: ["React", "CSS", "State Management"],

    image: "/assets/projects/admin-terminal-thumbnail.png",

    screenshots: [
      "/assets/projects/admin-terminal-1.png",
      "/assets/projects/admin-terminal-2.png",
    ],

    problem:
      "Wanted a unique admin experience that feels like a developer tool instead of a normal dashboard.",

    solution:
      "Designed a terminal-like UI that supports command parsing, command suggestions, and action shortcuts.",

    links: {
      github: "https://github.com/username/admin-terminal-ui",
      liveDemo: "",
      demoVideo: "https://youtu.be/ttttttttttt",
      docs: "",
    },

    license: "MIT",

    certificates: [],
  },

  {
    id: 7,
    slug: "unity-topdown-shooter",
    name: "Top-Down Shooter",

    description:
      "A Unity top-down shooter with enemy waves, weapon upgrades, and simple AI behavior.",

    year: 2022,

    dates: {
      start: "2022-11-01",
      end: "2023-01-15",
      updatedAt: "2023-01-15",
    },

    featured: false,

    status: "paused",

    role: "team",
    teamSize: 2,

    tags: ["Unity", "Game", "C#"],

    techStack: ["Unity", "C#", "NavMesh", "Particle System"],

    image: "/assets/projects/topdown-thumbnail.png",

    screenshots: [
      "/assets/projects/topdown-1.png",
      "/assets/projects/topdown-2.png",
    ],

    problem:
      "Needed a project to practice gameplay systems like waves, upgrades, and enemy AI.",

    solution:
      "Implemented wave spawner, enemy AI states, weapons system, and basic progression with upgrade UI.",

    links: {
      github: "https://github.com/username/topdown-shooter",
      liveDemo: "",
      demoVideo: "https://youtu.be/sssssssssss",
      docs: "",
    },

    license: "MIT",

    certificates: [],
  },

  {
    id: 8,
    slug: "frontend-component-library",
    name: "Component Library",

    description:
      "A reusable UI component library with buttons, cards, badges, and form elements following a consistent design system.",

    year: 2024,

    dates: {
      start: "2024-05-10",
      end: "2024-06-05",
      updatedAt: "2024-06-05",
    },

    featured: true,

    status: "completed",

    role: "solo",
    teamSize: 1,

    tags: ["Frontend", "UI", "CSS"],

    techStack: ["React", "CSS", "Storybook"],

    image: "/assets/projects/ui-library-thumbnail.png",

    screenshots: [
      "/assets/projects/ui-library-1.png",
      "/assets/projects/ui-library-2.png",
    ],

    problem:
      "Building UI repeatedly from scratch was slow and inconsistent across pages.",

    solution:
      "Created a small component library with consistent spacing, typography, and states for faster development.",

    links: {
      github: "https://github.com/username/component-library",
      liveDemo: "https://component-library.vercel.app",
      demoVideo: "https://youtu.be/lllllllllll",
      docs: "https://github.com/username/component-library#readme",
    },

    license: "MIT",

    certificates: [],
  }
];

export const tagsData = ["ALL", ...new Set(projectsData.flatMap(p => p.tags))];
