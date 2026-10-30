export const personalInfo = {
  name: "Jovany Leon",
  location: "Philadelphia, PA",
  email: "jel365@drexel.edu",
  github: "https://github.com/JovanyLeon",
  linkedin: "https://www.linkedin.com/in/jovany-leon-6261b330a/",
  profilePicture: "/profile2.jpg",
  heroDescription: `Hello! My name is Jovany Leon.

I have just 4+ year of experience in computer science development and I aspire to enter the software engineering or IT field. I am currently a student at Drexel University who studies computer science focusing on Web design and development where I aim to graduate in 2028.

Independently, I work on side projects for close connections of mine that range from creating websites for their businesses to designing social media platforms that lead to links that I also design. I work on my more technical skills with the free aid of Leetcode and Codecademy to practice for tricky interview questions that might arise.

At Drexel University, I am taking courses to help expand my growth on more programming languages and technical skills but also productivity and team development such as Programming I & II which focus in Python, and Agile Design 1 and 2 which prepare me for proper work ethic and etiquette, respectively. Even though currently studying Python, my independent work demands I also be proficient in basic front-end development languages like HTML, CSS, and some JavaScript.`,
};

export const workExperience = [
  {
    company: "Cornelis Networks",
    location: "Chesterbrook, PA",
    position: "Software Engineer Co-op",
    period: "April 2026 - Present",
    achievements: [
      "Built 3 MCP-based developer agents for internal repositories and test validation, reducing codebase navigation and onboarding time by 30%.",
      "Created 15+ reusable, object-oriented Python regression automations, reducing manual testing effort by 35%.",
      "Developed Jenkins, Kubernetes, and Grafana observability workflows to monitor 25+ tests, builds, and health metrics, strengthening CI/CD visibility and regression detection.",
      "Validated InfiniBand and Ethernet releases across 10+ system configurations, analyzing throughput, latency, stability, and performance regressions under high-performance workloads.",
      "Partnered with software, electrical, and mechanical engineers to diagnose cross-layer hardware/software failures, helping identify 10+ integration defects across 12+ configurations.",
    ],
    image: "/Cornelis.jpg",
    imageAlt: "Cornelis Networks team",
  },
  {
    company: "ESF Camps & Experiences",
    location: "Bryn Mawr, PA",
    position: "Software QA Engineer & IT Systems Intern",
    period: "April 2025 - Present",
    achievements: [
      "Contributed as lead QA apart of a team of Senior software engineers and the Director of Technology on a new software launch",
      "Actively participated in numerous production releases as the primary tester, validating core features and ensuring smooth deployment across multiple platforms",
      "Hosted and participated in weekly code reviews and daily stand-ups as part of an Agile development cycle to optimize CI/CD processes, identifying issues and improving release speeds",
      "Developed custom Excel reports for Marketing, Finance, and Executive teams by integrating internal APIs to streamline cross-departmental data analysis.",
      "Led the IT team, managing customer-facing system issues and applying real-time fixes to resolve outages and performance failures",
      "Bravo ZULU Award: 'For a job and preformance well done in the eyes of your fello team members'",
    ],
    image: "/ESFCAMPS.jpg", 
  },
  {
    company: "Divine Youth Baptist Church",
    location: "Philadelphia, PA",
    position: "Assistant Programming Youth Instructor",
    period: "Jun 2020 - August 2022",
    achievements: [
      "Managed and aided 20+ children coding skills to create basic websites/projects using HTML, CSS and JavaScript",
      "Facilitated live demonstrations of web design skills to develop their design students’ process skills using methods such as Color Theory and Graphic design",
    ],
  },
  {
    company: "Immaculate Mary Center for Rehabilitation & Healthcare",
    location: "Philadelphia, PA",
    position: "IT Dietary Service Aide",
    period: "Jun 2024 - September 2024",
    achievements: [
      "Collaborated with nursing and dietary staff to meet residents' individual dietary requirements, including allergen restrictions and medical diets.",
      "Built strong connection with residents through attentive service and daily interaction.",
    ],
  },
];

export const education = [
  {
    institution: "Drexel University",
    location: "Philadelphia, PA",
    degree: "BS Computer Science, Concentration: Software Engineering, AI & Machine Learning",
    period: "2023 - 2028",
    achievements: [
      "Winter 2024 Dean's List",
      "Member of Drexel Rocket League ESPORTS",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "C",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "SQL",
  ],
  frontendDevelopment: [
    "AstroJS",
    "ReactJS",
    "WordPress",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["Python", "Node.Js"],
  databaseAndStorage: ["PostgreSQL"],
  cloudAndDevOps: ["AzureDevOPS", "AWS"],
  toolsAndServices: [
    "Microsoft Office",
    "Hubspot",
    "SalesForce",
  ],
};

export const projects = [
  {
    title: "Food Truck Finder",
    github: "https://github.com/JovanyLeon/Food-Truck-Finder.git",
    description: [
      "Engineered and developed a responsive web application integrating the Google Maps API to help 50+ students locate nearby food trucks with an interactive, data-driven map interface.",
      "Implemented a JavaScript-based auto-fill search module leveraging asynchronous API calls and event listeners to dynamically render map markers from JSON data, improving query efficiency by 40%.",
      "Increased production-ready code output by 20% each sprint and identified 4–5 issues per sprint by contributing as a full-stack developer in an Agile team, actively participating in sprint planning, daily stand-ups, and code reviews.",
      "Collaborated in an Agile team using GitLab for version control and code reviews to ensure reliable feature integration and team contributions.",
    ],
  },
  {
    title: "Psudeo Banking Validator",
    github: "https://github.com/JovanyLeon/psuedo_banking_validator",
    description: [
      "Developed a comprehensive pseudo-banking system in Java that models real-world financial behaviors such as deposits, withdrawals, transfers, and interest accrual.",
    "Applied Object-Oriented Programming (OOP) principles including abstraction, encapsulation, inheritance, and polymorphism to design modular and reusable account classes.",
    "Implemented Checking, Savings, and Certificate of Deposit (CD) accounts, each with specialized transaction rules, maturity logic, and validation constraints.",
    "Used composition through a central Bank class to manage accounts, and command processors to handle user operations cleanly and efficiently.",
    "Followed Test-Driven Development (TDD) practices to ensure functionality correctness and maintainability, writing 200+ JUnit test cases covering all edge cases.",
    "Utilized mutation testing to verify test suite effectiveness and eliminate weak assertions, ensuring high reliability of core banking logic.",
    "Configured GitLab CI/CD pipelines to automatically compile, test, and analyze code for every commit, enabling continuous integration and regression-free builds.",
    "Designed transaction validation layers to prevent invalid inputs, enforce balance constraints, and simulate time-based banking actions like monthly interest.",
    ],
  },
  {
  title: "AI Credit Card Recommendation System",
  github: "https://github.com/JovanyLeon/AI-CreditCard-Recommender",
  description: [
    "Built a full-stack credit card recommendation platform using React, TypeScript, FastAPI, and Python that converts user financial preferences into ranked, explainable credit card recommendations.",
    
    "Developed a credit card data pipeline that normalizes third-party card datasets into a consistent internal schema, allowing the recommendation engine to evaluate 100+ cards without being tightly coupled to a single external provider.",
    
    "Created explainable recommendation results with Match Scores, scoring breakdowns, matched preferences, and tradeoffs so users can understand why each card was ranked instead of receiving opaque AI-generated suggestions.",
    
    "Built RESTful FastAPI endpoints with Pydantic validation to expose card data, recommendation results, preference interpretation, and detailed scoring information to the React frontend.",
    
    "Architected the application so the complete recommendation system functions without OpenAI, providing graceful fallback to the guided recommender when AI is disabled, unavailable, or returns an invalid response.",
    
    "Implemented automated unit and integration testing for card filtering, scoring, ranking, edge cases, API contracts, and deterministic recommendation behavior to ensure consistent results across identical inputs.",
    
    "Designed a responsive fintech-style React interface featuring multi-step preference collection, AI interpretation previews, ranked recommendation cards, card comparisons, and transparent score breakdowns.",
    
    "Configured continuous integration to run backend tests, linting, frontend type checking, tests, and production builds without requiring OpenAI credentials, ensuring the core platform remains independently deployable."
  ],
},
];
