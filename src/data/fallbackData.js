export const fallbackProjects = [
  {
    id: 1,
    name: "Pet Care System",
    description:
      "A WinForms-based desktop application that allows users to manage pets through a graphical interface instead of console commands.",
    year: 2025,
    featured: false,
    status: "completed",
    team_size: 3,
    tech_stack: ["C#", "WinForms", "Visual Studio", ".NET"],
    image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/pet-care-system/cover.jpg?raw=true",
    problem:
      "Managing pet information through a console-based system is less user-friendly and requires command-line interaction.",
    solution:
      "The project converts the console-based pet management program into a graphical desktop application using WinForms, allowing users to manage pets through buttons, forms, and panels.",
    repo: "https://github.com/cerine0205/PetCare_System",
    frontend_repo: null,
    backend_repo: null,
    live_url: null,
    report_url: null,
    demo_url: null,
    presentation_url:
      "https://www.canva.com/design/DAHEDLwQxyk/KkcUDL_OmMfvFtNeLIoavQ/edit?utm_content=DAHEDLwQxyk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    role: "Data Management",
    duration: "1 week",
    type: "Desktop Application",
    challenges:
      "One of the main challenges was transforming the original console-based project into a graphical WinForms application while keeping the logic organized and easy to use. Another challenge was connecting the UI components with the underlying functionality and handling validation and errors properly, especially since the data was stored in memory only without persistence.",
    results:
      "A functional WinForms GUI application that allows users to add, edit, delete, search, and interact with pets.",
    features: [
      "Add new pets",
      "Edit pet information",
      "Delete pet records",
      "Search pets by name",
      "Feed pets",
      "Play with pets",
      "View all pets",
    ],
    architecture:
      "Event-driven WinForms application using a central PetManager class to manage pet data stored in memory.",
    architecture_image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/pet-care-system/architecture.jpg?raw=true",
    refactor_notes:
      "Add persistent data storage so pet data is saved instead of being stored in memory only.",
    tags: [{ name: "C#" }, { name: "Desktop App" }, { name: "Windows Form" }],
    screenshots: [
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/pet-care-system/Screenshot-1.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/pet-care-system/Screenshot-2.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/pet-care-system/Screenshot-3.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/pet-care-system/Screenshot-4.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/pet-care-system/Screenshot-5.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/pet-care-system/Screenshot-6.png?raw=true",
      },
    ],
  },
  {
    id: 2,
    name: "Perfume Dashboard",
    description:
      "A React-based frontend admin dashboard for managing perfume products with CRUD operations, filtering, reviews, ratings, and Dark Mode support. Built as a first web application project.",
    year: 2026,
    featured: false,
    status: "completed",
    team_size: 1,
    tech_stack: ["React", "Vite", "JavaScript", "HTML", "CSS", "mockapi.io"],
    image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/perfume-dashboard/cover.jpg?raw=true",
    problem:
      "Managing perfume products manually makes it difficult for store owners to organize products, track popular perfumes, and view product information efficiently.",
    solution:
      "A React-based admin dashboard that allows an admin to manage perfume products through CRUD operations while fetching and updating data from a Mock API hosted on mockapi.io.",
    repo: "https://github.com/cerine0205/perfume-dashboard",
    frontend_repo: null,
    backend_repo: null,
    live_url: "https://cerine0205.github.io/perfume-dashboard/",
    report_url: null,
    demo_url: null,
    presentation_url:
      "https://www.canva.com/design/DAHAGLCXSTI/27QBWA0EVZN2AK5P9B691Q/edit?utm_content=DAHAGLCXSTI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    role: "Frontend Developer",
    duration: "5 days",
    type: "Web Application",
    challenges:
      "Integrating the API with React components and handling data updates. Another challenge was adding Dark Mode after initially using fixed colors across multiple CSS files, which required refactoring styles to use CSS variables.",
    results:
      "Built a functional admin dashboard with CRUD operations, filtering, ratings display, dynamic top perfumes, and Dark Mode using a Mock API for backend simulation.",
    features: [
      "CRUD operations for perfumes",
      "Latest added perfumes sorted by date",
      "Reviews and ratings display",
      "Dynamic top perfumes section",
      "Search and filtering",
      "Dark Mode support",
      "Demo admin login interface",
    ],
    architecture:
      "The system is a React-based admin dashboard for managing perfumes, including viewing, adding, editing, and deleting products. Most of the logic runs inside the React application, while a Mock API (mockapi.io) is used only to fetch user reviews.",
    architecture_image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/perfume-dashboard/architecture.jpg?raw=true",
    refactor_notes:
      "A future improvement for this project is to replace the current mock setup with a real backend integration. This would allow the dashboard to use a proper REST API with persistent database storage, making the data flow more realistic and scalable for real-world use.",
    tags: [{ name: "React" }, { name: "Frontend" }, { name: "Dashboard" }],
    screenshots: [
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/perfume-dashboard/Screenshot-1.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/perfume-dashboard/Screenshot-2.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/perfume-dashboard/Screenshot-3.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/perfume-dashboard/Screenshot-4.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/perfume-dashboard/Screenshot-5.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/perfume-dashboard/Screenshot-6.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/perfume-dashboard/Screenshot-7.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/perfume-dashboard/Screenshot-8.png?raw=true",
      },
    ],
  },
  {
    id: 3,
    name: "Roof Jumps Game",
    description:
      "A simple parkour platformer game where the player jumps across city rooftops, avoids falling, and reaches the final destination to win.",
    year: 2026,
    featured: false,
    status: "completed",
    team_size: 1,
    tech_stack: [
      "Unity",
      "C#",
      "Unity UI System",
      "Unity Animator Controller",
      "Unity Prefabs",
      "Mixamo Animations",
    ],
    image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/roof-jumps-game/cover.jpg?raw=true",
    problem:
      "Creating a responsive parkour-style movement system with clear win and lose conditions in a simple platformer environment.",
    solution:
      "The game was built using Unity and C#. Player movement and jumping mechanics allow rooftop traversal. Collision detection determines falling or reaching the destination, and scene management handles restarting the level or displaying the win state.",
    repo: "https://github.com/cerine0205/Roof_Jumps_Game",
    frontend_repo: null,
    backend_repo: null,
    live_url: "https://cerine0205.itch.io/roof-jumps",
    report_url: null,
    demo_url: null,
    presentation_url:
      "https://www.canva.com/design/DAG8_8e_TxU/aatHWjNL9IyvnPgHsfqYDw/edit?utm_content=DAG8_8e_TxU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    role: "Unity Game Developer",
    duration: "1 day",
    type: "WebGL Game (Unity)",
    challenges:
      "Implementing smooth jumping mechanics, handling fall detection correctly.",
    results:
      "A playable rooftop parkour platformer demonstrating player movement mechanics, collision detection, and basic game logic in Unity.",
    features: [
      "Parkour rooftop platforming",
      "Player jumping and movement mechanics",
      "Automatic level restart after falling",
      "Win condition when reaching the final destination",
      "Simple level design with clear objective",
    ],
    architecture:
      "Unity panel-based architecture with C# scripts controlling player movement, collision detection, and trigger-based win/lose logic.",
    architecture_image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/roof-jumps-game/architecture.jpg?raw=true",
    refactor_notes:
      "Future improvements may include expanding the playable area to cover a larger part of the city and introducing optional challenges such as collectible coins to enhance player engagement and exploration.",
    tags: [
      { name: "Unity" },
      { name: "C#" },
      { name: "Game Development" },
      { name: "WebGL" },
    ],
    screenshots: [
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/roof-jumps-game/Screenshot-1.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/roof-jumps-game/Screenshot-2.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/roof-jumps-game/Screenshot-3.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/roof-jumps-game/Screenshot-4.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/roof-jumps-game/Screenshot-5.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/roof-jumps-game/Screenshot-6.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/roof-jumps-game/Screenshot-7.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/roof-jumps-game/Screenshot-8.png?raw=true",
      },
    ],
  },
  {
    id: 4,
    name: "Adaptive Game UI",
    description:
      "An AI-powered system that dynamically adapts game user interfaces based on player interaction behavior using a rule-based AI agent.",
    year: 2025,
    featured: false,
    status: "completed",
    team_size: 5,
    tech_stack: [
      "Unity",
      "C#",
      "Unity UI System",
      "Unity Animator Controller",
      "Unity Prefabs",
      "Rule-Based AI Agent",
      "n8n",
      "JSON",
    ],
    image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/BetaMinds/cover.jpg?raw=true",
    problem:
      "Traditional game interfaces are static and designed for all players with the same layout, which can create usability issues for players with different interaction behaviors or attention challenges.",
    solution:
      "A rule-based AI agent analyzes player interaction data with UI elements and generates recommendations to dynamically adjust the interface, such as resizing or repositioning buttons.",
    repo: "https://github.com/cerine0205/BetaMinds_Game",
    frontend_repo: null,
    backend_repo: null,
    live_url: "https://cerine0205.itch.io/betaminds",
    report_url: null,
    demo_url: "https://youtu.be/HSmSHbobrww?si=6f0Ci0fRVYmx2nL7",
    presentation_url:
      "https://kauksa-my.sharepoint.com/:b:/g/personal/2406746_stu_kau_edu_sa/IQB0jKFZzWcUQqmgoxXjyCXLAb9XlvRsc7l-Z6ADZZ8QIeU?e=YybFxx",
    role: "AI Agent Development and Integration with the Game",
    duration: "2 weeks",
    type: "WebGL Game (Unity)",
    challenges:
      "Designing adaptive UI behavior without machine learning, integrating the AI agent with the Unity game interface, and managing communication between system components.",
    results:
      "A working prototype demonstrating adaptive game UI using a rule-based AI agent architecture.",
    features: [
      "Adaptive UI layout",
      "Rule-based AI agent",
      "Player interaction analysis",
      "JSON-based UI update recommendations",
      "Modular system architecture",
    ],
    architecture:
      "Unity game interface collects player interaction data, which is sent through an n8n workflow to a rule-based AI agent. The agent analyzes the data and returns JSON recommendations used to update the UI layout.",
    architecture_image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/BetaMinds/architecture.jpg?raw=true",
    refactor_notes:
      "Future work will focus on enabling the full AI workflow and improving the intelligence of the agent.\n\nPlanned improvements include reconnecting the n8n workflow so the agent can communicate with the web version of the game, and evolving the current rule-based agent into a machine learning–based system that learns player behavior and adapts the UI more effectively.",
    tags: [
      { name: "Unity" },
      { name: "C#" },
      { name: "Game Development" },
      { name: "WebGL" },
      { name: "AI" },
      { name: "AI Agent" },
    ],
    screenshots: [
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/BetaMinds/Screenshot-1.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/BetaMinds/Screenshot-2.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/BetaMinds/Screenshot-3(1).png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/BetaMinds/Screenshot-4.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/BetaMinds/Screenshot-5.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/BetaMinds/Screenshot-6.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/BetaMinds/Screenshot-7.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/BetaMinds/Screenshot-8.jpg?raw=true",
      },
    ],
  },
  {
    id: 5,
    name: "Study Planner & Performance Tracker",
    description:
      "A desktop study planner application built with C# and Windows Forms that helps students manage study tasks, track deadlines, and monitor productivity.\n\nThis project is an extension of a previous console-based Study Planner system available at https://github.com/cerine0205/Study_Planner",
    year: 2026,
    featured: false,
    status: "completed",
    team_size: 5,
    tech_stack: [
      "C#",
      "Windows Forms",
      "JSON",
      "Newtonsoft.Json",
      "Visual Studio",
      ".NET",
    ],
    image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/study-planner/cover.jpg?raw=true",
    problem:
      "Students often struggle to organize study sessions, assignments, and deadlines using scattered tools or simple notes, making it difficult to track academic progress effectively.",
    solution:
      "The application provides a centralized desktop study planner that allows students to manage tasks, track completion progress, and use productivity features such as streak tracking, focus timers, and weekly progress insights.",
    repo: "https://github.com/cerine0205/StudyPlanner_WinForm",
    frontend_repo: null,
    backend_repo: null,
    live_url: null,
    report_url: null,
    demo_url: null,
    presentation_url:
      "https://www.canva.com/design/DAHEDJPTcQ0/czB41bmff1eTq24rE5WmWg/edit?utm_content=DAHEDJPTcQ0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    role: "UI Development and implementation of task management features",
    duration: "1 week",
    type: "Desktop Application",
    challenges:
      "Implementing JSON-based data persistence, ensuring task data loads correctly on application startup, designing a structured Windows Forms interface, and coordinating teamwork using Git merges.",
    results:
      "A functional desktop study planner that allows students to organize study tasks, track progress, and manage academic deadlines.",
    features: [
      "Add study tasks",
      "Update tasks",
      "Delete tasks using Task ID",
      "Support study session and deadline task types",
      "Track task completion status",
      "Weekly and monthly completion percentage tracking",
      "Streak tracker",
      "Weekly progress chart",
      "Focus mode timer",
      "Achievement milestones",
      "Mood tracker",
      "Weekly study goal setting",
      "Upcoming deadlines view",
    ],
    architecture:
      "The system is built as a desktop application where the Windows Forms interface handles user interaction, the C# application layer manages task and productivity logic, and local JSON files provide persistent storage using Newtonsoft.Json.",
    architecture_image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/study-planner/architecture.jpg?raw=true",
    refactor_notes:
      "A future refactor for this project is to convert it from a Windows Forms desktop application into a web-based application to improve accessibility and make it easier to use across different devices without requiring local installation.",
    tags: [{ name: "Windows Forms" }, { name: "Desktop App" }],
    screenshots: [
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/study-planner/Screenshot-1.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/study-planner/Screenshot-2.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/study-planner/Screenshot-3.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/study-planner/Screenshot-4.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/study-planner/Screenshot-5.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/study-planner/Screenshot-6.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/study-planner/Screenshot-7.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/study-planner/Screenshot-8.png?raw=true",
      },
    ],
  },
  {
    id: 6,
    name: "Engineering Educational Game",
    description:
      "An interactive educational web game designed to introduce students to different engineering fields through exploration, interactive scenes, and educational panels. The game is being developed to be showcased at a university engineering exhibition.",
    year: 2026,
    featured: false,
    status: "on progress",
    team_size: 4,
    tech_stack: ["Unity", "C#", "Unity UI System", "Unity Prefabs", "Blender"],
    image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/engineering-educational-game/cover.jpg?raw=true",
    problem:
      "Many students lack a clear understanding of what different engineering disciplines involve. Traditional explanations often fail to communicate the nature of each field effectively.",
    solution:
      "The project introduces an interactive web-based game where players explore different engineering fields through dedicated areas, interactive scenes, and educational panels that demonstrate engineering ideas in an engaging way.",
    repo: "https://github.com/cerine0205/EngGame",
    frontend_repo: null,
    backend_repo: null,
    live_url: null,
    report_url: null,
    demo_url: null,
    presentation_url: null,
    role: "Game Developer",
    duration: "2 months",
    type: "WebGL Game (Unity)",
    challenges:
      "Representing different engineering disciplines accurately while the development team specializes in computer science. The team consulted students from each engineering field to ensure correct representation of concepts.",
    results:
      "The game is being developed to be presented at a university engineering exhibition to help introduce students to engineering majors.",
    features: [
      "Interactive exploration of engineering disciplines",
      "Six engineering fields represented as areas in the game",
      "Three interactive scenes per field",
      "Three educational panels per field",
      "Distinct visual theme for each engineering field",
    ],
    architecture:
      "Unity-based web game where players explore engineering fields through interactive environments. Each field contains gates that lead to scenes or educational panels that demonstrate engineering ideas through interaction.",
    architecture_image: null,
    refactor_notes: null,
    tags: [
      { name: "Unity" },
      { name: "C#" },
      { name: "Game Development" },
      { name: "WebGL" },
    ],
    screenshots: [],
  },
  {
    id: 7,
    name: "Mawhiba Feedback Form",
    description:
      "A full-stack web application built to collect structured feedback from members of the Mawhiba Club design committee through a multi-step form and store responses through a backend API with CSV export functionality.",
    year: 2026,
    featured: false,
    status: "completed",
    team_size: 1,
    tech_stack: ["React", "Laravel", "Rest-Api", "JSON"],
    image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/mawhiba-feedback-form/cover.jpg?raw=true",
    problem:
      "The Mawhiba design committee needed a structured way to collect feedback and suggestions from members about events, workflow improvements, and team organization. Informal communication methods made it difficult to organize and analyze responses.",
    solution:
      "A custom full-stack web feedback system was built using a React frontend and Laravel backend to collect structured responses from members, store them through an API, and export submissions as a CSV file for easier review.",
    repo: null,
    frontend_repo: "https://github.com/cerine0205/Mawhiba-Hub",
    backend_repo: "https://github.com/cerine0205/Mawhiba-abi",
    live_url: "https://cerine0205.github.io/Mawhiba-Hub/",
    report_url: null,
    demo_url: null,
    presentation_url: null,
    role: "Full-Stack Developer",
    duration: "3 days",
    type: "Web Application",
    challenges:
      "Formatting structured form responses into a readable CSV format while filtering empty answers and preserving Arabic text encoding. Another challenge was ensuring the form interface remained usable and readable on mobile devices.",
    results:
      "The system provides a structured method for collecting committee feedback and allows responses to be reviewed through CSV export for easier analysis.",
    features: [
      "Multi-step feedback form",
      "Responsive mobile-friendly interface",
      "Backend API for storing submissions",
      "CSV export endpoint",
      "Secret key protection for CSV export",
      "Structured feedback questionnaire",
    ],
    architecture:
      "Users access a React frontend hosted on GitHub Pages, where they fill out the feedback form. When the form is submitted, the data is sent as a REST API request to the Laravel backend hosted on Render. The backend processes the request, stores the responses in the database, and provides a protected endpoint to export submissions as a CSV file.",
    architecture_image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/mawhiba-feedback-form/architecture.jpg?raw=true",
    refactor_notes:
      "Possible improvements include rendering form questions dynamically instead of hardcoded JSX, improving how responses are structured instead of storing them in a single answers field, and migrating the backend from the Render free plan to a more stable hosting solution.",
    tags: [
      { name: "Full-Stack" },
      { name: "React" },
      { name: "Laravel" },
      { name: "REST API" },
    ],
    screenshots: [
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/mawhiba-feedback-form/Screenshot-1.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/mawhiba-feedback-form/Screenshot-2.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/mawhiba-feedback-form/Screenshot-3.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/mawhiba-feedback-form/Screenshot-4.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/mawhiba-feedback-form/Screenshot-5.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/mawhiba-feedback-form/Screenshot-6.png?raw=true",
      },
    ],
  },
  {
    id: 8,
    name: "Fast Rails",
    description:
      "Fast Rails is an endless runner WebGL game developed with Unity and C#. The player switches between three railway lanes to avoid incoming trains and collect coins in an infinite gameplay loop.",
    year: 2025,
    featured: true,
    status: "completed",
    team_size: 1,
    tech_stack: [
      "Unity",
      "C#",
      "Unity UI System",
      "Unity Animator Controller",
      "Unity Prefabs",
      "Mixamo Animations",
    ],
    image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/fast-rails/cover.jpg?raw=true",
    problem:
      "The project was created to explore the fundamentals of game development in Unity including endless runner gameplay, player movement, obstacle spawning, collision systems, UI menus, and WebGL deployment.",
    solution:
      "The game uses a lane-based movement system where the player switches between three railway lanes to avoid trains while collecting coins. The environment moves toward the player to simulate forward motion, and the game continues indefinitely until the player collides with a train.",
    repo: "https://github.com/cerine0205/Fast_Rails_Game",
    frontend_repo: null,
    backend_repo: null,
    live_url: "https://cerine0205.itch.io/fast-rails",
    report_url: null,
    demo_url: null,
    presentation_url: null,
    role: "Solo Developer",
    duration: "1 week",
    type: "WebGL Game (Unity)",
    challenges:
      "Managing audio settings across scenes and dealing with lighting issues in the daytime scene where one side of the train appeared darker.",
    results:
      "The project helped build foundational Unity game development skills including C# gameplay scripting, collision systems, UI menus, audio integration, and WebGL deployment.",
    features: [
      "Endless runner gameplay",
      "Three lane movement system",
      "Lane switching using A and D keys",
      "Jump mechanic using Space",
      "Random train obstacles",
      "Coin collection system",
      "Score counter",
      "Start menu",
      "Game over screen",
      "Pause menu",
      "Sound and music toggle",
      "Day and night mode",
      "Character animation",
      "Resume option",
    ],
    architecture:
      "Player input controls lane movement while trains and the environment move toward the player. Random train obstacles spawn and collision detection determines whether the player collects coins or collides with a train which ends the game.",
    architecture_image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/fast-rails/architecture.jpg?raw=true",
    refactor_notes:
      "A future refactor may include adding a chasing enemy using an animation-based approach. This was difficult to implement in the current version because the player remains mostly stationary while the environment moves toward the player, which makes traditional chase behavior less believable. Using animation-driven behavior instead of real movement may make this feature more suitable in a later iteration.",
    tags: [
      { name: "Unity" },
      { name: "C#" },
      { name: "Game Development" },
      { name: "WebGL" },
    ],
    screenshots: [
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/fast-rails/Screenshot-1.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/fast-rails/Screenshot-4.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/fast-rails/Screenshot-3.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/fast-rails/Screenshot-5.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/fast-rails/Screenshot-2.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/fast-rails/Screenshot-6.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/fast-rails/Screenshot-7.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/fast-rails/Screenshot-8.png?raw=true",
      },
    ],
  },
  {
    id: 9,
    name: "Interactive Terminal Portfolio",
    description:
      "An interactive full-stack developer portfolio that combines a modern web interface with a command-driven terminal experience. The platform allows visitors to explore projects, view detailed case studies, browse certificates and skills, and contact the developer, while providing an admin dashboard and terminal-based control system for managing content dynamically.",
    year: 2026,
    featured: true,
    status: "completed",
    team_size: 1,
    tech_stack: [
      "React",
      "Vite",
      "JavaScript",
      "JSX",
      "HTML",
      "CSS",
      "React Icons",
      "Fetch API",
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
    ],
    image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/portfolio/cover(2).jpg?raw=true",
    problem:
      "Traditional developer portfolios are usually static websites that simply display projects without demonstrating real system architecture or interactive behavior. I wanted to build a portfolio that behaves like a real software product — where content is dynamically managed, visitors interact with the system through a terminal-like interface, and the application remains usable even if the backend services fail or become unavailable.",
    solution:
      "I designed and built a full-stack portfolio platform using React and Laravel. The system combines a traditional web interface with an interactive terminal environment powered by a command interpreter. Visitors can explore projects, certificates, and skills, while administrators can manage system content through protected admin panels and terminal commands. The frontend implements a fallback strategy and network timeout handling to ensure the application remains functional even if the backend API fails to respond.",
    repo: null,
    frontend_repo: "https://github.com/cerine0205/portfolio-system",
    backend_repo: "https://github.com/cerine0205/portfolio-api",
    live_url: "https://cerine0205.github.io/portfolio-system/",
    report_url: null,
    demo_url: "https://youtu.be/doHtGt5_zIg",
    presentation_url: null,
    role: "Full Stack Developer",
    duration: "3 weeks",
    type: "Web Application",
    challenges:
      "One of the main challenges was designing the terminal command interpreter that parses user input and maps commands to system actions such as navigation, authentication, and panel control. Another challenge was managing dynamic project data with different levels of complexity while keeping the admin system simple to use. Early development relied on terminal commands for project creation, which became inefficient as the system grew, leading to the creation of a full admin dashboard. Another critical challenge was ensuring the frontend remained stable even if the backend API was slow or unavailable, which required implementing fallback data, timeout handling, and graceful degradation strategies.",
    results:
      "The final system behaves like a real product rather than a static portfolio. It provides dynamic content management through an admin dashboard, an interactive terminal interface for navigation and commands, and a resilient frontend that remains usable even when backend services fail. The project demonstrates full-stack integration between React and Laravel while applying practical software design concepts such as fallback strategies and command-based interfaces.",
    features: [
      "Interactive terminal interface for visitors",
      "Admin terminal with protected commands",
      "Command interpreter that parses and executes terminal commands",
      "Visitor commands including help, whoami, theme, and GitHub",
      "Admin commands for opening management panels",
      "Admin dashboard for managing projects, certificates, skills, and messages",
      "Full CRUD system for projects",
      "Project filtering using tags",
      "Project search functionality",
      "Project screenshots gallery",
      "Detailed project case study sections",
      "System architecture section with diagram support",
      "Contact form integrated with backend API",
      "Ability to contact the developer about a specific project",
      "Dark and light theme switching through UI and terminal command",
      "Animated developer avatar with floating animation",
      "Offline fallback data when backend API is unavailable",
      "Network timeout strategy that switches to fallback data after two seconds",
      "Graceful degradation to maintain usability during backend failures",
    ],
    architecture:
      "The system follows a client-server architecture. The React frontend acts as the client application responsible for rendering the UI, handling terminal commands, and communicating with backend APIs. The Laravel backend exposes REST API endpoints for projects, certificates, skills, and messages. Data is stored in a MySQL database using relational models including projects, tags, screenshots, and messages. The admin dashboard performs authenticated CRUD operations using token-based authentication, while the public portfolio performs read-only operations.",
    architecture_image:
      "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/portfolio/portfolio-architecture.jpg?raw=true",
    refactor_notes:
      "Future improvements include supporting image uploads instead of relying on image URLs, Adding analytics to better understand how visitors interact with projects. The system can also be deployed to a production server instead of running locally. Additional enhancements include creating a dedicated certificates page to display all certificates instead of limiting them to three in the About section, adding support for editing skills, and enabling custom ordering of projects and certificates to control their display priority.",
    tags: [
      { name: "Full-Stack" },
      { name: "React" },
      { name: "Laravel" },
      { name: "System Design" },
      { name: "REST API" },
      { name: "Dashboard" },
    ],
    screenshots: [
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/portfolio/Screenshot-1.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/portfolio/Screenshot-2.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/portfolio/Screenshot-3.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/portfolio/Screenshot-4.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/portfolio/Screenshot-5.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/portfolio/Screenshot-6.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/portfolio/Screenshot-7.png?raw=true",
      },
      {
        image:
          "https://github.com/cerine0205/portfolio-system/blob/main/public/projects/portfolio/Screenshot-8.png?raw=true",
      },
    ],
  },
];

export const fallbackCertificates = [
  {
    id: 1,
    title: "Prerequisite Courses of Artificial Intelligence - Python Basics",
    issuer: "KAUST_Coursera",
    year: 2025,
    link: "https://www.coursera.org/account/accomplishments/badge/yU7-tEv_ReCO_rRL__XgKQ",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-badge-assets.s3.amazonaws.com/preview/160f4229f6ce468ba6b379242cb4d07e.png?auto=format%2Ccompress&dpr=2",
  },
  {
    id: 2,
    title: "Prerequisite Courses of Artificial Intelligence - Mathematics",
    issuer: "KAUST_Coursera",
    year: 2025,
    link: "https://www.coursera.org/account/accomplishments/badge/yQlzPmTWQY-Jcz5k1kGPKw",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-badge-assets.s3.amazonaws.com/preview/587b4051e20e4faa94711773e15c089e.png?auto=format%2Ccompress&dpr=2",
  },
  {
    id: 3,
    title: "Introduction to Data Science in Python",
    issuer: "coursera",
    year: 2025,
    link: "https://www.coursera.org/account/accomplishments/verify/1SXI6Y46XYHR",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~1SXI6Y46XYHR/CERTIFICATE_LANDING_PAGE~1SXI6Y46XYHR.jpeg",
  },
];

export const fallbackSkills = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    display_order: 0,
  },
  {
    id: 2,
    name: "Laravel",
    category: "Backend",
    display_order: 0,
  },
  {
    id: 3,
    name: "MySQL",
    category: "Database",
    display_order: 0,
  },
  {
    id: 4,
    name: "Git",
    category: "Tools",
    display_order: 0,
  },
  {
    id: 5,
    name: "Unity",
    category: "Game",
    display_order: 0,
  },
  {
    id: 6,
    name: "C#",
    category: "Game",
    display_order: 0,
  },
  {
    id: 7,
    name: "Python",
    category: "AI",
    display_order: 0,
  },
  {
    id: 8,
    name: "Data Processing",
    category: "AI",
    display_order: 0,
  },
  {
    id: 9,
    name: "GitHub",
    category: "Tools",
    display_order: 0,
  },
  {
    id: 10,
    name: "Machine Learning",
    category: "AI",
    display_order: 0,
  },
  {
    id: 11,
    name: "REST API",
    category: "Backend",
    display_order: 0,
  },
];