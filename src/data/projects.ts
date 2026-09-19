import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "gesturize",
    title: "Gesturize",
    period: "2025 to 2026",
    summary:
      "A real-time sign-language understanding system built around dynamic gesture recognition, spatiotemporal modelling and rapid adaptation to new gestures.",
    description: [
      "Developed and trained deep learning pipelines for dynamic gesture recognition using 3D hand pose information, temporal context and bimanual interactions.",
      "Worked on a hybrid model direction that combined specialised components for better robustness across gesture variation and real-time use.",
      "Implemented a few-shot mechanism that allowed previously unseen gestures to be tested during live demonstrations without rebuilding the entire model.",
      "The project also included sentence translation logic and a real-time computer vision pipeline for accessible human interaction."
    ],
    categories: ["AI / ML", "Deep Learning"],
    technologies: ["PyTorch", "MediaPipe", "Computer Vision", "Few-shot learning", "Temporal modelling"],
    featured: true,
    priority: 1,
    outcome: "Presented as a live MVP at IIT Madras innovation showcases and selected in the SIH 2025 Grand Finale waitlist category."
  },
  {
    slug: "nanocompile",
    title: "NanoCompile",
    period: "2026 to present",
    summary:
      "A neural network compiler and optimisation project focused on graph-level transformations and practical inference performance.",
    description: [
      "Lead development of a compact compiler pipeline for trained neural networks with a graph intermediate representation.",
      "Implemented early optimisation passes including constant folding and operator fusion.",
      "Current work explores runtime integration, execution planning, GPU utilisation and memory-aware inference."
    ],
    categories: ["AI / ML", "Software Systems"],
    technologies: ["Python", "Graph IR", "ONNX Runtime", "Compiler optimisation"],
    featured: true,
    priority: 2,
    outcome: "Ongoing CFI project with a focus on moving from conceptual optimisations to measurable runtime improvements."
  },
  {
    slug: "multilingual-voice-agent",
    title: "Real-Time Multilingual Voice Agent",
    period: "2026",
    summary:
      "A phone-style conversational voice agent for Indian languages, designed around streaming speech, interruption handling and natural turn-taking.",
    description: [
      "Built a real-time conversational pipeline combining streaming speech recognition, response generation and speech synthesis.",
      "Designed barge-in handling so active playback and generation stop when the caller begins speaking.",
      "Focused on real-world conversational behaviour such as pauses, corrections, code-switching and noisy audio."
    ],
    categories: ["AI / ML", "Full Stack"],
    technologies: ["Streaming ASR", "TTS", "Conversational AI", "Real-time systems"],
    featured: true,
    priority: 3,
    outcome: "Developed as a practical exploration of multilingual AI for Indian-language phone interactions."
  },
  {
    slug: "intervisio",
    title: "InterVisio",
    period: "Jul 2025",
    summary:
      "An AI-powered mock interview platform that generates role-specific questions and personalised feedback from resume or transcript context.",
    description: [
      "Developed the frontend and refined the user flow for realistic mock interview sessions.",
      "Integrated a LangChain backend with conversational context and retrieval-augmented generation for dynamic question generation.",
      "Worked across API integration, session handling and AI-driven product design."
    ],
    categories: ["AI / ML", "Full Stack"],
    technologies: ["LangChain", "RAG", "Frontend", "API integration"],
    featured: true,
    priority: 4
  },
  {
    slug: "counzo",
    title: "Counzo",
    period: "Jun 2025 to Jul 2025",
    summary:
      "A full-stack AI companion built as a React Native mobile application with retrieval, memory and personalised support workflows.",
    description: [
      "Built the mobile experience with React Native, Expo and Supabase, including authentication and user data flows.",
      "Developed a FastAPI backend using LangChain for conversational memory, retrieval over a defined knowledge base and agentic task handling.",
      "Designed the product as an end-to-end application rather than a standalone model demo."
    ],
    categories: ["AI / ML", "Full Stack"],
    technologies: ["React Native", "FastAPI", "Supabase", "LangChain", "RAG"],
    featured: true,
    priority: 5,
    links: [
      {
        label: "Expo build",
        url: "https://expo.dev/accounts/coderalpha/projects/counzo/builds/6247c3ad-601c-4cbb-a683-43a7f67b35c6"
      }
    ]
  },
  {
    slug: "fedex-dca-system",
    title: "AI-Led DCA Management System",
    period: "2026",
    summary:
      "A full-stack prototype and AI architecture for automating debt collection agency workflows while keeping security and compliance central.",
    description: [
      "Mapped customer and agency workflows into an end-to-end automation pipeline and built a working product prototype.",
      "Designed ML components around time-series prediction, transcript screening, profile routing and intent classification.",
      "The architecture was framed to work with existing enterprise integrations rather than assuming a greenfield environment."
    ],
    categories: ["AI / ML", "Data Analytics", "Full Stack"],
    technologies: ["Agentic systems", "Time-series modelling", "NLP", "Full-stack prototyping"],
    priority: 6,
    outcome: "Won 1st place at the FedEx SMART Hackathon 2026.",
    links: [
      {
        label: "LinkedIn post",
        url: "https://www.linkedin.com/posts/jaiwanth-karthi_fedex-hackathon-innovation-activity-7426305615288745984-ocSP"
      }
    ]
  },
  {
    slug: "image-captioning",
    title: "Image Captioning Engine",
    period: "2025",
    summary:
      "An image-to-text learning project combining visual feature extraction with recurrent sequence modelling.",
    description: [
      "Built an image-captioning pipeline using CNN features and recurrent modelling.",
      "Used the project to study representation learning, sequence generation and the interaction between vision and language components."
    ],
    categories: ["AI / ML", "Deep Learning"],
    technologies: ["PyTorch", "CNN", "RNN", "Computer Vision"],
    priority: 7
  },
  {
    slug: "spectray",
    title: "SpectRay",
    period: "Jun 2024 to Aug 2024",
    summary:
      "A from-scratch 3D ray-tracing engine with camera geometry, mesh intersections, lighting, reflections, refractions and acceleration structures.",
    description: [
      "Built the renderer from first principles around reverse ray traversal through a virtual camera.",
      "Implemented triangle and sphere intersections, Lambertian illumination, reflection and refraction logic, world-scene effects and motion trajectories.",
      "Used a bounding volume hierarchy to reduce intersection search cost and explored pixel-level parallelism for faster rendering.",
      "Added STL and material file interoperability for communication with external modelling workflows."
    ],
    categories: ["Software Systems"],
    technologies: ["Python", "Ray tracing", "BVH", "Geometry", "Parallelisation"],
    priority: 8,
    links: [
      { label: "GitHub", url: "https://github.com/CoderAlpha9/SpectRay" }
    ]
  },
  {
    slug: "inter-iit-treasury",
    title: "Agentic Treasury and Cashflow Pipeline",
    period: "2025 to 2026",
    summary:
      "A data-driven financial systems project developed for the IIT Madras AI contingent using Pathway.",
    description: [
      "Worked on a problem around scalable cashflow and treasury management for financial institutions.",
      "Contributed to the stocks pipeline, data analytics components and an agentic orchestration layer with application-specific safety controls."
    ],
    categories: ["Data Analytics", "AI / ML", "Quantitative"],
    technologies: ["Pathway", "Data pipelines", "Agentic orchestration", "Analytics"],
    priority: 9
  },
  {
    slug: "spacerover-landing",
    title: "Multistage Space Rover Landing Mechanism",
    period: "Feb 2026 to May 2026",
    summary:
      "A mechanical systems concept for a multistage landing architecture intended for heavily loaded space rovers.",
    description: [
      "Developed the landing architecture as a course design project with emphasis on staged load handling and mechanism design.",
      "The work is also being carried forward as ongoing mechanical design patent work."
    ],
    categories: ["Engineering"],
    technologies: ["Mechanical design", "Concept development"],
    priority: 10
  },
  {
    slug: "neuromuscular-orthosis",
    title: "Neuromuscular Orthosis",
    period: "Sep 2025 to Dec 2025",
    summary:
      "A product design project exploring walking compliance and support for correcting stance and gait cycles in elderly users.",
    description: [
      "Developed the concept as a course project combining user needs, gait support and mechanical product design.",
      "The design is also part of ongoing mechanical patent work."
    ],
    categories: ["Engineering"],
    technologies: ["Product design", "Mechanism design", "Human-centred engineering"],
    priority: 11
  },
  {
    slug: "ev-chassis",
    title: "EV Chassis Design, Surfacing and Analysis",
    period: "Jun 2025 to Jul 2025",
    summary:
      "A SolidWorks and ANSYS project covering structural CAD, surfacing and engineering analysis for an electric vehicle chassis.",
    description: [
      "Created detailed CAD and surface geometry with attention to structural packaging and external form.",
      "Used ANSYS to study stress, deformation, thermal behaviour and airflow under defined boundary conditions."
    ],
    categories: ["Engineering"],
    technologies: ["SolidWorks", "ANSYS", "CAD", "Simulation"],
    priority: 12
  },
  {
    slug: "bldc-control",
    title: "BLDC Speed and Torque Control",
    period: "2025",
    summary:
      "A MATLAB-based control project focused on speed and torque behaviour in a brushless DC motor system.",
    description: [
      "Explored motor-control behaviour through MATLAB modelling with focus on the relationship between commanded speed, torque and system response."
    ],
    categories: ["Engineering"],
    technologies: ["MATLAB", "Motor control"],
    priority: 13
  },
  {
    slug: "thermal-lighting-pcb",
    title: "Thermal-Sensing Dynamic Lighting PCB",
    period: "May 2025 to Jun 2025",
    summary:
      "A KiCad PCB design project covering the full schematic-to-layout workflow for a thermal-sensing lighting system.",
    description: [
      "Integrated sensing and control circuitry, selected footprints, placed components and vias, and completed electrical rule checks.",
      "Prepared fabrication-ready Gerber output with manufacturability in mind."
    ],
    categories: ["Engineering"],
    technologies: ["KiCad", "PCB design", "Electronics"],
    priority: 14
  },
  {
    slug: "console-chess",
    title: "Console Chess",
    period: "Nov 2024 to Dec 2024",
    summary:
      "A C-based chess interface with rule handling and dynamic turn-taking, built as an end-semester programming project.",
    description: [
      "Implemented gameplay rules and state transitions in C with a compact console interface."
    ],
    categories: ["Software Systems"],
    technologies: ["C", "Game logic"],
    priority: 15,
    links: [
      { label: "GitHub", url: "https://github.com/CoderAlpha9/ConsoleChess_C" }
    ]
  },
  {
    slug: "force-field-simulation",
    title: "Force Field Simulation Engine",
    period: "Aug 2023 to Sep 2023",
    summary:
      "A Python simulation engine for gravitational and electrical fields with numerically updated position and velocity state.",
    description: [
      "Built 2D and 3D simulations for masses and charges with configurable entity properties and initial conditions."
    ],
    categories: ["Software Systems"],
    technologies: ["Python", "PyGame", "Numerical simulation"],
    priority: 16,
    links: [
      { label: "GitHub", url: "https://github.com/CoderAlpha9/GravitySim" }
    ]
  },
  {
    slug: "virtual-cube",
    title: "Virtual Rubik's Cube Simulator",
    period: "Jun 2023 to Aug 2023",
    summary:
      "A generalised Python simulator for cubes ranging from 2x2 to nxn with a real-time 3D control interface.",
    description: [
      "Built geometric state handling, command controls and rendering logic using VPython and PyOpenGLTk."
    ],
    categories: ["Software Systems"],
    technologies: ["Python", "VPython", "3D geometry"],
    priority: 17,
    links: [
      { label: "GitHub", url: "https://github.com/CoderAlpha9/VirtualCubeSim" }
    ]
  },
  {
    slug: "voice-assistant",
    title: "STT-TTS Voice Assistant",
    period: "Jun 2022 to Feb 2023",
    summary:
      "An early voice assistant project with offline and online speech recognition and text-to-speech support.",
    description: [
      "Built a rule-based assistant around Vosk, PocketSphinx and Google audio services with a simple user interface."
    ],
    categories: ["AI / ML", "Software Systems"],
    technologies: ["Python", "Vosk", "PocketSphinx", "Speech recognition"],
    priority: 18,
    links: [
      { label: "GitHub", url: "https://github.com/CoderAlpha9/BasicVoiceAssistant" }
    ]
  }
];
