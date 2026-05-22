/**
 * Abdelrahman Ramadan - Flutter Developer Portfolio
 * Dedicated Local Database File
 * Separates data from HTML layout structure for maximum modularity and ease of maintenance.
 */
window.portfolioData = {
    experiences: [
        {
            date: "Mar 2026 - Present",
            title: "Flutter Developer",
            company: "Freelance Project — Wratil",
            companyUrl: "https://wartil.com/",
            location: "Remote",
            description: "A digital ecosystem connecting students with certified Quran teachers via real-time video sessions, smart booking, and an AI-powered advisory system.",
            bullets: [
                "Integrated Agora RTC and Pusher for real-time voice/video sessions and live notifications.",
                "Built a commerce ecosystem with digital wallets, subscription packages, and automated booking.",
                "Secured API communication using Retrofit/Dio interceptors and encrypted local storage for token management."
            ],
            tech: ["BLoC", "Clean Arch", "Retrofit/Dio", "Agora RTC", "Pusher", "Localization", "Google Gemini"],
            caseStudyTab: "wratil-details"
        },
        {
            date: "Dec 2025 - Feb 2026",
            title: "Flutter Developer",
            company: "Freelance Project — Hala Bakeries ERP",
            companyUrl: "https://hala-markets.com/",
            location: "Remote",
            description: "Production-grade B2B ERP system automating multi-branch inventory control, employee operations, and sales auditing for a large bakery distribution network.",
            bullets: [
                "Built a modular Clean Architecture app with dual-role workflows (Admin / Employee) using Cubit for isolated state management per role.",
                "Engineered RTL Arabic PDF & Excel export services with custom Cairo font rendering and right-to-left text shaping for corporate invoices and audits.",
                "Developed a barcode-integrated stock audit engine (Sales = Opening + Received - Damaged - Actual) with mobile scanner support for real-time inventory reconciliation."
            ],
            tech: ["BLoC/Cubit", "Firebase Firestore", "GoRouter", "GetIt", "Mobile Scanner", "PDF & Excel Exports"],
            caseStudyTab: "hala-bakeries-details"
        },
        {
            date: "Sep 2025 - Nov 2025",
            title: "Flutter Developer (Part-Time)",
            company: "Freelance Project — Fluoro Master",
            companyUrl: "",
            location: "Remote",
            description: "A comprehensive medical utility and educational ecosystem for radiology and fluoroscopy, featuring detailed procedure guides, dose calculators, interactive simulators, and an AI-powered advisory system.",
            bullets: [
                "Built a comprehensive medical procedures library with safety checklists, educational quizzes, and interactive simulators.",
                "Secured API communication using Retrofit/Dio interceptors to synchronize medical data and user progress, alongside encrypted local caching."
            ],
            tech: ["BLoC", "Clean Architecture", "Retrofit/Dio", "GetIt (DI)", "Flutter Animate", "Local Storage"],
            caseStudyTab: "fluoro-details"
        },
        // {
        //     date: "Sep 2024 - Oct 2024",
        //     title: "Mobile Developer (Flutter Intern)",
        //     company: "Instant Software Solutions",
        //     companyUrl: "https://instanteg.com/",
        //     location: "Cairo, Egypt (Remote)",
        //     description: "",
        //     bullets: [
        //         "Developed responsive, user-friendly interfaces following modern UI/UX principles, improving user engagement by 25%.",
        //         "Integrated REST APIs with Retrofit/Dio, ensuring seamless data flow and offline functionality using SQLite/SharedPreferences.",
        //         "Debugged and resolved 15+ critical issues, reducing app crashes by 30% and enhancing stability.",
        //         "Implemented Clean Architecture, reducing code redundancy by 40% and improving maintainability."
        //     ],
        //     tech: ["Flutter", "Dart", "REST APIs", "Clean Architecture", "Local Storage", "Git"],
        //     caseStudyTab: null
        // }
    ],
    projects: [
        {
            title: "Jobizz — Career Platform",
            githubUrl: "https://github.com/AbdulrahmanRamadan22/jobizz",
            type: "Graduation Project",
            date: "Mar 2025 - Jul 2025",
            description: "Production-grade career platform built with Flutter and Clean Architecture, designed to connect job seekers with opportunities through a secure, scalable, and responsive mobile experience.",
            tech: ["Flutter", "Retrofit/Dio", "GetIt", "Freezed"],
            caseStudyTab: "jobizz-details"
        },
        {
            title: "Home-Ease",
            githubUrl: "https://github.com/AbdulrahmanRamadan22/HomeEase_App",
            type: "Mobile App",
            date: "Nov 2024 - Feb 2025",
            description: "Mobile app providing home services (electrical, plumbing, carpentry) with subscription options and multiple payment methods.",
            tech: ["Flutter", "Bloc", "Firebase", "Localization"],
            caseStudyTab: "homeease-details"
        },
        // {
        //     title: "Hospital Management App",
        //     githubUrl: "https://github.com/AbdulrahmanRamadan22/hospital",
        //     type: "Mobile App",
        //     date: "Sep 2024 - Oct 2024",
        //     description: "Digital system for patient records and hospital operations via API integration with intuitive dashboards.",
        //     tech: ["Flutter", "Dio", "SQLite"],
        //     caseStudyTab: null
        // },
        // {
        //     title: "Chat-App",
        //     githubUrl: "https://github.com/AbdulrahmanRamadan22/chat_app",
        //     type: "Mobile App",
        //     date: "Jul 2024 - Aug 2024",
        //     description: "Secure chat app with Firebase authentication, real-time message delivery, and scalable cloud storage.",
        //     tech: ["Flutter", "Firebase", "Firestore"],
        //     caseStudyTab: null
        // },
        // {
        //     title: "Todo-App",
        //     githubUrl: "https://github.com/AbdulrahmanRamadan22/todo_app",
        //     type: "Mobile App",
        //     date: "May 2024 - Jun 2024",
        //     description: "Minimalist productivity app for daily task organization featuring local database persistence.",
        //     tech: ["Flutter", "SqfLite", "Cubit"],
        //     caseStudyTab: null
        // },
        // {
        //     title: "Movie-app",
        //     githubUrl: "https://github.com/AbdulrahmanRamadan22/movie_app",
        //     type: "Mobile App",
        //     date: "Mar 2023 - Apr 2024",
        //     description: "A sleek Movie Discovery App with real-time API data, smooth animations, and a clean BLoC architecture.",
        //     tech: ["Flutter", "REST API", "Bloc"],
        //     caseStudyTab: null
        // },
        {
            title: "Ecommerce-app",
            githubUrl: "https://github.com/AbdulrahmanRamadan22/ecommerce",
            type: "Mobile App",
            date: "Sep 2023 - Feb 2024",
            description: "Mobile storefront with product listings, cart, delivery tracking, secure authentication, and Google Maps integration.",
            tech: ["Flutter", "GetX", "Firebase", "Google Maps"],
            caseStudyTab: "ecommerce-details"
        }
    ],
    skills: [
        {
            category: "Languages & Frameworks",
            tags: ["Dart", "Flutter"]
        },
        {
            category: "Architecture & State Management",
            tags: ["Clean Architecture", "MVVM", "BLoC/Cubit"]
        },
        {
            category: "Backend & Integration",
            tags: ["RESTful APIs", "Firebase", "Http", "Dio", "Retrofit"]
        },
        {
            category: "Local Storage",
            tags: ["SQLite", "SharedPreferences", "Secure Storage"]
        },
        {
            category: "Software Principles",
            tags: ["OOP", "SOLID Principles", "Clean Code", "Responsive & Adaptive Design"]
        },
        {
            category: "DevOps & CI/CD",
            tags: ["Fastlane", "Firebase App Distribution"]
        },
        {
            category: "Tools",
            tags: ["Git", "GitHub", "Postman", "Figma"]
        }
    ],
    education: [
        {
            period: "Sep 2021 - Jul 2025",
            degree: "Bachelor of Computer Science",
            institution: "Higher Technological Institute, Beni Suef",
            description: "Overall Grade: Excellent (85%)"
        },
        {
            period: "Feb 2024 - Oct 2024",
            degree: "Flutter Diploma",
            institution: "Instant Software Solutions",
            bullets: [
                "Technologies: Flutter, Dart, Firebase, State Management",
                "Concepts: OOP, Data Caching, RESTful APIs"
            ]
        },
        {
            period: "Sep 2024 - Oct 2024",
            degree: "Flutter Training",
            institution: "Instant Software Solutions",
            bullets: [
                "Developed a hospital management app with API integration for patient/data tracking.",
                "Responsive and easy-to-use user interfaces were developed.",
                "Integrated REST APIs with Dio and implemented Clean Architecture."
            ]
        }
    ],
    languages: [
        {
            name: "Arabic",
            badge: "Native Speaker",
            badgeClass: "native-badge",
            icon: "fas fa-comments",
            color: "var(--success-color)"
        },
        {
            name: "English",
            badge: "Good",
            badgeClass: "professional-badge",
            icon: "fas fa-globe-americas",
            color: "var(--accent-blue)"
        }
    ],
    contact: [
        {
            type: "Email",
            value: "abdelrahmanramadan1910@gmail.com",
            icon: "fas fa-envelope",
            primaryLabel: "Send Email",
            primaryIcon: "fas fa-paper-plane",
            primaryAction: "email",
            secondaryLabel: "Copy",
            secondaryIcon: "fas fa-copy",
            secondaryAction: "copy"
        },
        {
            type: "Phone",
            value: "+201099209084",
            icon: "fas fa-phone",
            primaryLabel: "Call",
            primaryIcon: "fas fa-phone",
            primaryAction: "phone",
            secondaryLabel: "Copy",
            secondaryIcon: "fas fa-copy",
            secondaryAction: "copy"
        },
        {
            type: "LinkedIn",
            value: "abdelrahman-ramadan22",
            url: "https://www.linkedin.com/in/abdelrahman-ramadan22/",
            icon: "fab fa-linkedin",
            primaryLabel: "Visit Profile",
            primaryIcon: "fas fa-external-link-alt",
            primaryAction: "link",
            secondaryLabel: "Copy Link",
            secondaryIcon: "fas fa-copy",
            secondaryAction: "copy"
        },
        {
            type: "GitHub",
            value: "AbdulrahmanRamadan22",
            url: "https://github.com/AbdulrahmanRamadan22",
            icon: "fab fa-github",
            primaryLabel: "View Repositories",
            primaryIcon: "fas fa-external-link-alt",
            primaryAction: "link",
            secondaryLabel: "Copy Link",
            secondaryIcon: "fas fa-copy",
            secondaryAction: "copy"
        },
        {
            type: "Location",
            value: "Cairo, Egypt",
            icon: "fas fa-map-marker-alt",
            primaryLabel: "View on Map",
            primaryIcon: "fas fa-map",
            primaryAction: "map",
            secondaryLabel: "Copy",
            secondaryIcon: "fas fa-copy",
            secondaryAction: "copy"
        }
    ],
    availability: {
        status: "Open to Opportunities",
        statusClass: "available",
        description: "Currently available for Flutter developer positions. Interested in challenging projects involving Flutter, Dart, Clean Architecture, and building responsive mobile applications."
    },
    caseStudies: [
        {
            "tabId": "jobizz-details",
            "glowColor": "rgba(53, 104, 153, 0.25)",
            "fileName": "jobizz_case_study.md",

            "hero": {
                "title": "Jobizz — Modern Career Marketplace & Portfolio Ecosystem",
                "lead": "A production-grade, state-of-the-art Flutter mobile application utilizing Clean Architecture and BLoC state management to deliver seamless job discovery, advanced search filtering, multi-step job applications, local PDF resume previewing, secure credential persistence, and a dynamic professional profile builder."
            },

            "sections": [
                {
                    "icon": "fas fa-bullseye",
                    "title": "Executive Summary",
                    "content": "Traditional job search platforms are often slow, lack clean navigation, and fail to provide seamless resume management or profile builders in a unified interface. Jobizz solves this by delivering an end-to-end, high-performance mobile ecosystem that connects candidates with top hiring companies, simplifies the job application pipeline, and offers local resume previewing and profile customization — all packaged in a modern, fluid cross-platform app.",
                    "bullets": [
                        "<strong>Target Audience:</strong> Professionals looking for certified opportunities and hiring companies showcasing detailed organizational insights.",
                        "<strong>Core Solution:</strong> An elegant application that unifies search, category discovery, multi-step application tracking, instant resume previewing, and dynamic professional experience management.",
                        "<strong>Scale:</strong> Built on Clean Architecture with robust decoupled modules, secure credentials storage, and reliable connection handling designed for long-term scalability."
                    ]
                },

                {
                    "icon": "fas fa-layer-group",
                    "title": "Architecture & Engineering Decisions",
                    "content": "Jobizz is structured around the <strong>Clean Architecture</strong> principles paired with the <strong>Repository Pattern</strong>, dividing the project into Presentation, Domain, and Data layers. Every engineering decision ensures strict isolation of dependencies, absolute testability of business logic, and modular feature development.",
                    "bullets": [
                        "<strong>BLoC / Cubit:</strong> Chosen for its explicit, event-driven state transitions. Presentation logic is clean of side-effects, making state transitions highly predictable and testable.",
                        "<strong>GetIt (Service Locator):</strong> Registers feature-specific dependencies (such as APIs, data sources, and repositories) at startup, ensuring clean decoupling and effortless dependency mocking.",
                        "<strong>Retrofit + Dio:</strong> Retrofit generates robust, type-safe API clients, eliminating manual JSON parsing boilerplate. Dio powers the request-response cycle with centralized headers management and structured logging.",
                        "<strong>Pure Domain Layer:</strong> Enforces that all use cases and entities contain zero dependencies on Flutter widgets or data persistence packages, preserving business logic integrity.",
                        "<strong>Freezed Serialization:</strong> Used for generating immutable models and union types (e.g., ApiResult, NetworkExceptions), reducing boilerplate and enforcing compile-time type safety."
                    ]
                },

                {
                    "icon": "fas fa-file-pdf",
                    "title": "Resume Management & PDF Integration",
                    "content": "A crucial pillar of the Jobizz ecosystem is the CV/Resume management suite, allowing candidates to upload documents and preview them instantly offline, bypassing general mobile rendering limitations.",
                    "bullets": [
                        "<strong>Integrated PDF Rendering:</strong> Integrated an in-app PDF viewer directly inside the application, enabling high-performance, smooth document previewing without relying on external packages or web browsers.",
                        "<strong>Offline Document Storage:</strong> Implemented local filesystem storage using path utilities, saving chosen PDF files temporarily to ensure immediate offline-capable previews before network uploads are initiated.",
                        "<strong>Resume Repository:</strong> Decoupled document fetching and uploading. The UI coordinates with a local service layer that communicates through abstract repositories, ensuring storage location flexibility.",
                        "<strong>Multipart File Upload:</strong> Handled large document uploads as background multipart form requests via Dio, providing reactive loading feedback and preventing main UI thread locks."
                    ],
                    "isCode": true,
                    "codeFile": "resume_cubit.dart",
                    "code": "<span class=\"syntax-type\">Future</span>&lt;<span class=\"syntax-type\">void</span>&gt; <span class=\"syntax-function\">addApplication</span>({\n  <span class=\"syntax-keyword\">required</span> <span class=\"syntax-type\">int</span> jobId,\n  <span class=\"syntax-keyword\">required</span> <span class=\"syntax-type\">int</span> cvId,\n}) <span class=\"syntax-keyword\">async</span> {\n  <span class=\"syntax-function\">emit</span>(<span class=\"syntax-keyword\">const</span> <span class=\"syntax-type\">ResumeState</span>.applicationApplyLoading());\n  <span class=\"syntax-keyword\">final</span> response = <span class=\"syntax-keyword\">await</span> _resumeRepo.<span class=\"syntax-function\">addApplication</span>(\n    jobId: jobId,\n    profileId: <span class=\"syntax-keyword\">await</span> <span class=\"syntax-type\">SharedPrefHelper</span>.<span class=\"syntax-function\">getData</span>(key: <span class=\"syntax-type\">SharedPrefKeys</span>.idProfile),\n    token: <span class=\"syntax-string\">\"Bearer ${await SharedPrefHelper.getSecuredString(key: SharedPrefKeys.token)}\"</span>,\n    data: <span class=\"syntax-type\">ApplicationRequest</span>(cv_id: cvId),\n  );\n  response.<span class=\"syntax-function\">when</span>(\n    success: (profileResponse) <span class=\"syntax-keyword\">async</span> {\n      <span class=\"syntax-function\">emit</span>(<span class=\"syntax-type\">ResumeState</span>.applicationApplySuccess());\n    },\n    failure: (error) {\n      <span class=\"syntax-function\">emit</span>(<span class=\"syntax-type\">ResumeState</span>.applicationApplyFailure(error));\n    },\n  );\n}"
                },

                {
                    "icon": "fas fa-search",
                    "title": "Smart Search & Discovery Engine",
                    "content": "Discovering the right role requires advanced search options and dynamic query filtering built for high responsiveness.",
                    "bullets": [
                        "<strong>Dynamic Home Feed:</strong> Home dashboard showing personalized categories, featured jobs, and recommended cards customized using live user profile metadata.",
                        "<strong>Advanced Query Filtering:</strong> Multi-faceted search system that allows users to narrow down jobs by industry, type, location, experience levels, and salary ranges.",
                        "<strong>Optimistic Caching:</strong> Core lists (like job categories and company profiles) are cached in memory using local preferences, keeping transitions immediate."
                    ]
                },

                {
                    "icon": "fas fa-briefcase",
                    "title": "Portfolio CRUD & Career Tracker",
                    "content": "Managing professional profiles and application statuses requires a strong, data-resilient client-side synchronization model.",
                    "bullets": [
                        "<strong>Experience & Education Forms:</strong> Built complex multi-field inputs for managing professional histories, verifying dates and locations dynamically.",
                        "<strong>Application Tracking Status:</strong> Structured an interactive dashboard showing pending, accepted, and rejected applications with step indicators showing progress.",
                        "<strong>Switch Profile Persona:</strong> Enables users to instantly toggle between different professional resumes and profiles, updating the UI layout seamlessly without requiring re-authentication."
                    ]
                },

                {
                    "icon": "fas fa-shield-alt",
                    "title": "Security, Auth & Persistent Storage",
                    "content": "User credentials, access tokens, and sensitive data are treated with production-grade security standards to preserve user trust.",
                    "bullets": [
                        "<strong>Social Auth Integration:</strong> Seamless one-tap sign-in using Google Social OAuth to minimize onboarding barriers.",
                        "<strong>Hardware Encrypted Tokens:</strong> Core session tokens are persisted exclusively using AES encryption on Android (KeyStore) and Keychain on iOS via Flutter Secure Storage.",
                        "<strong>OTP Verification:</strong> Integrated real-time country code checks and visual verification boxes (Pinput/PinCodeFields) for account recovery and sign-up flows.",
                        "<strong>Persistent Cache:</strong> Non-sensitive settings and onboarded states are saved in SharedPreferences, allowing fast cold starts without re-authenticating."
                    ]
                },

                {
                    "icon": "fas fa-paint-brush",
                    "title": "Responsive UI & Visual Polish",
                    "content": "The application's premium presentation depends on responsive grids, smooth animations, and high-fidelity typography.",
                    "bullets": [
                        "<strong>ScreenUtil Scaling:</strong> Standardized all layout elements based on a base design layout of 375x812, scaling text, padding, and images proportionally across all mobile form factors.",
                        "<strong>Contextual Shimmers:</strong> Configured skeleton shimmer states (via Redacted and Shimmer packages) matching component layouts, providing polished loading states.",
                        "<strong>Lottie Micro-Animations:</strong> Integrated lightweight Lottie animations for empty states, transaction success, and error indicators, providing interactive delight.",
                        "<strong>Connectivity Monitor:</strong> Implemented real-time network observers that detect offline states instantly, notifying users via custom alert banners."
                    ]
                },

                {
                    "icon": "fas fa-fire",
                    "title": "Engineering Challenges Solved",
                    "content": "Resolving complex state synchronization and device compatibility issues required implementing advanced design patterns.",
                    "bullets": [
                        "<strong>Challenge 1 — BLoC State in Multi-step Flows:</strong> Multi-step job applications require preserving inputs (e.g. CV choice, forms) during screen navigation. <em>Solved by</em> scoping a single ApplicationCubit to the flow's route, updating an immutable Freezed state using copyWith() so fields persist during navigation.",
                        "<strong>Challenge 2 — Dynamic Role Switching:</strong> Instantly toggling between different candidate personas without restarting the app or corrupting the local cache. <em>Solved by</em> implementing a centralized switch-profile cubit that clears profile-specific repositories and re-fetches relevant details without altering the core session token.",
                        "<strong>Challenge 3 — Responsive Layout Scaling:</strong> Handling varying device aspect ratios without overflowing widgets. <em>Solved by</em> pairing ScreenUtil scaling for exact widget proportions with responsive layout breakpoints for larger screen formats."
                    ]
                }
            ],

            "techStack": [
                { "name": "Flutter", "category": "Framework" },
                { "name": "Dart", "category": "Language" },
                { "name": "BLoC / Cubit", "category": "State Management" },
                { "name": "GetIt", "category": "Dependency Injection" },
                { "name": "Dio", "category": "Networking" },
                { "name": "Retrofit", "category": "API Layer" },
                { "name": "Freezed", "category": "Serialization" },
                { "name": "Secure Storage", "category": "Encrypted Storage" },
                { "name": "Shared Preferences", "category": "Local Cache" },
                { "name": "Shimmer", "category": "Loading States" },
                { "name": "Lottie", "category": "Animations" },
                { "name": "ScreenUtil", "category": "Responsive Design" },
                { "name": "PDF View", "category": "Document Rendering" },
                { "name": "GoRouter", "category": "Navigation" },
                { "name": "PinCodeFields", "category": "OTP Input" }
            ],

            "mockup": {
                "projectKey": "jobizz",
                "screens": [
                    { "label": "Onboarding", "icon": "fas fa-star", "file": "jobizz_screen/onboarding1.png" },
                    { "label": "Secure Login", "icon": "fas fa-sign-in-alt", "file": "jobizz_screen/login.png" },
                    { "label": "Registration", "icon": "fas fa-user-plus", "file": "jobizz_screen/register.png" },
                    { "label": "Reset Password", "icon": "fas fa-key", "file": "jobizz_screen/reset_password.png" },
                    { "label": "OTP Verification", "icon": "fas fa-key", "file": "jobizz_screen/otp.png" },
                    { "label": "Home Dashboard", "icon": "fas fa-home", "file": "jobizz_screen/home.png" },
                    { "label": "Company Details", "icon": "fas fa-building", "file": "jobizz_screen/company_profile.png" },
                    { "label": "Smart Search", "icon": "fas fa-search", "file": "jobizz_screen/search.png" },
                    { "label": "Advanced Filters", "icon": "fas fa-filter", "file": "jobizz_screen/search_filter.png" },
                    { "label": "Job Insights", "icon": "fas fa-info-circle", "file": "jobizz_screen/job_detail.png" },
                    { "label": "Apply Flow", "icon": "fas fa-paper-plane", "file": "jobizz_screen/apply.png" },
                    { "label": "Application Tracking", "icon": "fas fa-calendar-check", "file": "jobizz_screen/application_tracking.png" },
                    { "label": "Portfolio Manager", "icon": "fas fa-briefcase", "file": "jobizz_screen/portfolio_uploaded.png" },
                    { "label": "User Profile", "icon": "fas fa-user", "file": "jobizz_screen/profile.png" }
                ]
            }
        },


        {
            "tabId": "wratil-details",
            "glowColor": "rgba(46, 204, 113, 0.25)",
            "fileName": "wratil_case_study.md",

            "hero": {
                "title": "Wratil — Quranic Mastery Ecosystem",
                "lead": "A production-grade Flutter platform connecting students with certified Quran teachers through real-time Agora RTC video sessions, an interactive Syncfusion Quran reader, and a complete booking & subscription commerce system — built on a scalable Feature-Driven Modular Architecture."
            },

            "sections": [
                {
                    "icon": "fas fa-bullseye",
                    "title": "Executive Summary",
                    "content": "Traditional Quranic learning lacks digital infrastructure — scattered tools, no structured scheduling, and no reliable real-time communication built for education. Wratil solves this by delivering a dedicated, end-to-end ecosystem that connects global students with verified teachers, streamlines session booking, and handles subscriptions and payments — all inside a single cross-platform mobile app.",
                    "bullets": [
                        "<strong>Target Users:</strong> Students seeking certified Quranic instruction and teachers looking to monetize their expertise globally.",
                        "<strong>Core Problem Solved:</strong> Fragmented tools replaced by one unified platform covering discovery, booking, live sessions, payments, and learning resources.",
                        "<strong>Scale:</strong> Architected to support thousands of concurrent real-time sessions with clean separation of concerns across every feature module."
                    ]
                },

                {
                    "icon": "fas fa-layer-group",
                    "title": "Architecture & Engineering Decisions",
                    "content": "Wratil is built on a <strong>Feature-Driven Modular Architecture</strong> paired with the <strong>Repository Pattern</strong>, enforcing a strict three-layer separation across the entire codebase. Every engineering decision was made to maximize testability, scalability, and long-term maintainability.",
                    "bullets": [
                        "<strong>BLoC / Cubit:</strong> Chosen over Provider or Riverpod for its strict event-driven contract — every state transition is explicit, predictable, and independently testable, which is critical in a complex multi-feature app.",
                        "<strong>GetIt (Service Locator):</strong> Enables true module decoupling. Features register their own dependencies at startup, making it trivial to swap implementations or inject mocks during testing without touching any UI code.",
                        "<strong>Retrofit + Dio:</strong> Retrofit generates type-safe API interfaces from annotations, eliminating parsing boilerplate. Dio handles the underlying transport layer with centralized interceptors for token injection, logging, and error normalization.",
                        "<strong>Repository Pattern:</strong> Every feature's data layer exposes an abstract repository interface. The logic layer (Cubit) has zero awareness of whether data comes from a remote API or local cache — this makes offline support and migration seamless.",
                        "<strong>Pusher Channels:</strong> Handles all real-time signaling (call invitations, session start alerts, status updates) separately from the Agora media stream, keeping concerns cleanly separated."
                    ]
                },

                {
                    "icon": "fas fa-video",
                    "title": "Live Sessions — Agora RTC Deep Dive",
                    "content": "The most technically demanding feature in Wratil. Real-time audio/video sessions required orchestrating multiple systems simultaneously: Agora's media engine, Pusher's signaling layer, local permission management, and app lifecycle events.",
                    "bullets": [
                        "<strong>Call Orchestration:</strong> Dedicated Cubits manage the full session lifecycle — token verification, microphone/camera permission flows, connection health monitoring, and remote peer state tracking (joined, muted, disconnected).",
                        "<strong>Pusher Signaling:</strong> Call invitations and session start notifications are pushed via Pusher websockets before the Agora channel is joined, ensuring zero-delay coordination between teacher and student.",
                        "<strong>Lifecycle Handling:</strong> Custom AppLifecycleObserver detects backgrounding and incoming phone calls, gracefully pausing the session and resuming state without dropping the channel connection.",
                        "<strong>Network Resilience:</strong> Implemented automatic reconnection logic with exponential backoff — if a participant's connection degrades, the session recovers silently without requiring a manual rejoin."
                    ],
                    "isCode": true,
                    "codeFile": "agora_service.dart",
                    "code": "<span class=\"syntax-type\">Future</span>&lt;<span class=\"syntax-keyword\">void</span>&gt; <span class=\"syntax-function\">joinChannel</span>({\n  <span class=\"syntax-keyword\">required</span> <span class=\"syntax-type\">String</span> channelName,\n  <span class=\"syntax-keyword\">required</span> <span class=\"syntax-type\">String</span> token,\n  <span class=\"syntax-keyword\">required</span> <span class=\"syntax-type\">int</span> uid,\n}) <span class=\"syntax-keyword\">async</span> {\n  <span class=\"syntax-keyword\">await</span> _engine.<span class=\"syntax-function\">joinChannel</span>(\n    token: token,\n    channelId: channelName,\n    uid: uid,\n    options: <span class=\"syntax-keyword\">const</span> <span class=\"syntax-type\">ChannelMediaOptions</span>(\n      clientRoleType: <span class=\"syntax-type\">ClientRoleType</span>.clientRoleBroadcaster,\n      channelProfile: <span class=\"syntax-type\">ChannelProfileType</span>.channelProfileCommunication,\n    ),\n  );\n}"
                },

                {
                    "icon": "fas fa-book-open",
                    "title": "Interactive Quran Reader",
                    "content": "Building a professional Quran reading experience on mobile required solving performance challenges unique to high-resolution Arabic PDF rendering — a problem most general-purpose PDF viewers handle poorly.",
                    "bullets": [
                        "<strong>Syncfusion PDF Engine:</strong> Chosen specifically for its optimized Arabic text rendering and efficient page parsing, outperforming alternatives like pdf_render on lower-end Android devices.",
                        "<strong>Memory Management:</strong> Implemented lazy page loading with an LRU cache strategy — only the current page and its immediate neighbors are kept in memory, preventing OOM crashes on long reading sessions.",
                        "<strong>Dual Reading Modes:</strong> Engineered two distinct UX modes — a continuous scroll mode for casual reading and a single-page mode with swipe gestures optimized for focused recitation practice.",
                        "<strong>60fps Target:</strong> All PDF rendering runs on an isolated Isolate to keep the main UI thread free, ensuring the app remains responsive even while loading dense, high-resolution pages."
                    ]
                },

                {
                    "icon": "fas fa-calendar-check",
                    "title": "Booking & Commerce System",
                    "content": "The session booking and subscription pipeline is the commercial backbone of the platform, requiring precise real-time data synchronization and bulletproof transaction handling.",
                    "bullets": [
                        "<strong>Real-Time Slot Management:</strong> Teacher availability is fetched and locked optimistically on the client — if a slot is taken between fetch and confirm, the server rejects the booking and the UI rolls back gracefully with a clear user message.",
                        "<strong>Timezone Synchronization:</strong> All availability data is stored in UTC on the backend. Custom Dart extension methods in the Core layer convert and display slots in the user's local timezone, preventing scheduling conflicts across regions.",
                        "<strong>Subscription & Coupons:</strong> Built a flexible subscription engine supporting multiple package tiers with coupon validation applied server-side before any charge is processed.",
                        "<strong>Gifting System:</strong> An innovative feature allowing users to purchase and send subscription packages to others — handled via a dedicated gifting flow with recipient validation and wallet credit attribution.",
                        "<strong>Digital Wallet:</strong> In-app wallet tracks credits, session deductions, and subscription activations with an auditable transaction history synchronized in real-time."
                    ]
                },

                {
                    "icon": "fas fa-shield-alt",
                    "title": "Security, Auth & Data Persistence",
                    "content": "Authentication and data security were treated as first-class concerns, not afterthoughts. The multi-step auth flow and local data strategy reflect production-level security practices.",
                    "bullets": [
                        "<strong>Multi-Step Auth:</strong> Registration flow includes OTP verification via Pinput with automated country code detection, preventing invalid phone submissions before they hit the backend.",
                        "<strong>Encrypted Token Storage:</strong> Auth tokens are stored exclusively in Flutter Secure Storage (AES encryption on Android, Keychain on iOS) — never in plain SharedPreferences.",
                        "<strong>Token Injection:</strong> Dio interceptors automatically attach Bearer tokens to every authenticated request, handling token refresh transparently without any manual intervention in feature code.",
                        "<strong>Session Persistence:</strong> App state survives cold starts — users resume their last session context without re-authentication, using a secure combination of Secure Storage and SharedPreferences."
                    ]
                },

                {
                    "icon": "fas fa-globe",
                    "title": "Localization & UI Excellence",
                    "content": "Wratil serves a global Arabic and English-speaking audience, requiring deep localization support beyond simple string translation.",
                    "bullets": [
                        "<strong>Automated RTL/LTR Switching:</strong> The entire layout direction flips dynamically based on locale — padding, alignment, icon mirroring, and text direction all adapt without any per-widget conditional logic.",
                        "<strong>Cairo Font System:</strong> Custom Cairo font family used throughout for a premium Arabic typography experience that maintains consistency across both locales.",
                        "<strong>Shimmer Loading States:</strong> Skeletonizer provides contextual loading skeletons matching the shape of each screen's content — users always understand what is loading and where.",
                        "<strong>Lottie Micro-Animations:</strong> Strategically placed Lottie animations for empty states, success confirmations, and onboarding steps — improving engagement without impacting performance."
                    ]
                },

                {
                    "icon": "fas fa-fire",
                    "title": "Engineering Challenges Solved",
                    "content": "Three challenges in this project required solutions that went significantly beyond standard Flutter development patterns.",
                    "bullets": [
                        "<strong>Challenge 1 — Real-Time Video Orchestration:</strong> Maintaining synchronized, low-latency sessions across varying network conditions while managing app lifecycle events. <em>Solved by</em> engineering custom BLoC listeners that orchestrate Agora state, Pusher signals, and platform lifecycle transitions as a unified state machine.",
                        "<strong>Challenge 2 — Global Timezone Synchronization:</strong> Displaying teacher availability correctly across dozens of timezones without booking conflicts. <em>Solved by</em> standardizing all data to UTC at the API layer and building a centralized timezone conversion utility in Core, applied universally across all booking UI.",
                        "<strong>Challenge 3 — High-Fidelity PDF Rendering:</strong> Loading heavy Quran PDFs without memory leaks or frame drops on mid-range devices. <em>Solved by</em> isolating rendering to a background Isolate, implementing an LRU page cache, and tuning Syncfusion's configuration for Arabic document profiles."
                    ]
                }
            ],

            "techStack": [
                { "name": "Flutter", "category": "Framework" },
                { "name": "Dart", "category": "Language" },
                { "name": "BLoC / Cubit", "category": "State Management" },
                { "name": "GetIt", "category": "Dependency Injection" },
                { "name": "Dio", "category": "Networking" },
                { "name": "Retrofit", "category": "API Layer" },
                { "name": "Pusher Channels", "category": "Real-time Signaling" },
                { "name": "Agora RTC", "category": "Live Audio/Video" },
                { "name": "Syncfusion PDF", "category": "Document Rendering" },
                { "name": "Secure Storage", "category": "Encrypted Storage" },
                { "name": "Shared Preferences", "category": "Local Cache" },
                { "name": "Lottie", "category": "Animations" },
                { "name": "Skeletonizer", "category": "Loading States" },
                { "name": "Pinput", "category": "OTP Auth" },
                { "name": "Chewie", "category": "Video Playback" }
            ],

            "mockup": {
                "projectKey": "wratil",
                "screens": [
                    { "label": "Onboarding", "icon": "fas fa-star", "file": "wratil_screen/onboarding.png" },
                    { "label": "Home Hub", "icon": "fas fa-home", "file": "wratil_screen/home.png" },
                    { "label": "Quran Reader", "icon": "fas fa-book-open", "file": "wratil_screen/quran.png" },
                    { "label": "Teacher Discovery", "icon": "fas fa-search", "file": "wratil_screen/teachers.png" },
                    { "label": "Session Booking", "icon": "fas fa-calendar-check", "file": "wratil_screen/booking.png" },
                    { "label": "My Sessions", "icon": "fas fa-calendar-alt", "file": "wratil_screen/my_sessions.png" },
                    { "label": "Live Session", "icon": "fas fa-video", "file": "wratil_screen/session.png" },
                    { "label": "Digital Wallet", "icon": "fas fa-wallet", "file": "wratil_screen/wallet.png" },
                    { "label": "Packages", "icon": "fas fa-credit-card", "file": "wratil_screen/packages.png" },
                    { "label": "notifications", "icon": "fas fa-bell", "file": "wratil_screen/notifications.png" }

                ]
            }
        },

        {
            "tabId": "hala-bakeries-details",
            "glowColor": "rgba(243, 156, 18, 0.25)",
            "fileName": "hala_bakeries_case_study.md",

            "hero": {
                "title": "Hala Bakeries — Enterprise Sales & Inventory System",
                "lead": "A production-grade B2B Flutter application engineered to streamline multi-branch bakery operations, featuring real-time inventory tracking, role-based access control, comprehensive offline-aware data synchronization, and advanced PDF/Excel reporting capabilities."
            },

            "sections": [
                {
                    "icon": "fas fa-bullseye",
                    "title": "Executive Summary",
                    "content": "Managing a multi-branch bakery operation requires precise inventory tracking, secure employee management, and reliable data synchronization. The Hala Bakeries Sales app replaces manual processes with a centralized digital ecosystem, connecting administrators and branch employees through a unified, real-time dashboard powered by Firebase.",
                    "bullets": [
                        "<strong>Target Users:</strong> Bakery administrators managing regional branches, and daily branch employees logging stock, sales, and damages.",
                        "<strong>Core Problem Solved:</strong> Eliminates fragmented paper-based tracking, preventing inventory discrepancies and providing real-time visibility into branch-level performance.",
                        "<strong>Scale:</strong> Architected to support scalable multi-branch data segregation, role-based workflows, and offline-resilient data entry."
                    ]
                },

                {
                    "icon": "fas fa-layer-group",
                    "title": "Architecture & Engineering Decisions",
                    "content": "Built on a <strong>Feature-Driven Modular Architecture</strong>, the codebase is cleanly separated into distinct domains (Admin, Employee, Auth, Shared), ensuring high maintainability and testability for enterprise-scale operations.",
                    "bullets": [
                        "<strong>BLoC / Cubit:</strong> Enforces a strict unidirectional data flow. Each inventory action (receiving stock, logging damages, updating balances) is managed by isolated Cubits, ensuring predictable state transitions and robust error handling.",
                        "<strong>Firebase Ecosystem:</strong> Utilizes Firebase Authentication for secure role-based access and Cloud Firestore for real-time, scalable NoSQL data synchronization across all active branches.",
                        "<strong>GetIt (Service Locator):</strong> Decouples feature logic from dependencies, allowing seamless injection of Firebase repositories, local cache handlers, and reporting services.",
                        "<strong>Go Router:</strong> Implements deep-linking and scalable, declarative routing, crucial for handling complex navigation flows based on administrative vs. employee user roles."
                    ]
                },

                {
                    "icon": "fas fa-boxes",
                    "title": "Advanced Inventory & Stock Management",
                    "content": "The core of the application revolves around precise, auditable inventory control. The system ensures that every product movement is tracked, validated, and synchronized.",
                    "bullets": [
                        "<strong>Comprehensive Workflows:</strong> Dedicated modules handle opening balances, stock receiving, daily inventory counts, and damage recording.",
                        "<strong>Low Stock Alerts:</strong> Real-time tracking triggers low stock warnings, allowing administrators to preemptively restock critical bakery items.",
                        "<strong>Barcode Scanning Integration:</strong> Utilizes <code>mobile_scanner</code> for rapid, error-free product identification and stock taking directly from device cameras.",
                        "<strong>Audit Trails:</strong> Every stock modification is logged with a timestamp and employee ID, ensuring complete accountability across all branches."
                    ]
                },

                {
                    "icon": "fas fa-file-invoice",
                    "title": "Enterprise Reporting & Analytics",
                    "content": "Data is only valuable if it can be analyzed. The app features a powerful on-device reporting engine capable of generating professional business documents without relying on a backend generation server.",
                    "bullets": [
                        "<strong>Multi-Format Export:</strong> Engineers seamless data conversion into professional PDF documents and complex Excel spreadsheets using <code>pdf</code>, <code>printing</code>, and <code>excel</code> Dart packages.",
                        "<strong>Filtered Analytics:</strong> Administrators can generate highly specific reports filtered by date ranges, specific branches, product categories, or employee shifts.",
                        "<strong>Direct Printing & Sharing:</strong> Integrated native sharing capabilities allow immediate distribution of daily sales reports via email or WhatsApp directly from the app."
                    ]
                },

                {
                    "icon": "fas fa-wifi",
                    "title": "Network Resilience & Offline Awareness",
                    "content": "Bakery environments can have unstable internet connections. The application is designed to gracefully handle network degradation without losing critical transactional data.",
                    "bullets": [
                        "<strong>Real-Time Connectivity Monitoring:</strong> Integrates <code>internet_connection_checker_plus</code> combined with a persistent UI Connectivity Banner to instantly alert users when operating offline.",
                        "<strong>Firestore Offline Persistence:</strong> Leverages Firestore's native caching to allow employees to continue logging sales and inventory counts seamlessly during outages, auto-syncing when connectivity is restored.",
                        "<strong>State Preservation:</strong> Utilizes SharedPreferences to cache essential app configurations and active user sessions, ensuring uninterrupted workflow during cold starts."
                    ],
                    "isCode": true,
                    "codeFile": "connectivity_banner.dart",
                    "code": "<span class=\"syntax-type\">StreamBuilder</span>&lt;<span class=\"syntax-type\">InternetStatus</span>&gt;(\n  stream: <span class=\"syntax-type\">InternetConnection</span>().onStatusChange,\n  builder: (context, snapshot) {\n    <span class=\"syntax-keyword\">if</span> (snapshot.hasData &amp;&amp; snapshot.data == <span class=\"syntax-type\">InternetStatus</span>.disconnected) {\n      <span class=\"syntax-keyword\">return</span> <span class=\"syntax-type\">Material</span>(\n        color: <span class=\"syntax-type\">Colors</span>.red,\n        child: <span class=\"syntax-type\">Text</span>(\n          <span class=\"syntax-string\">'لا يوجد اتصال بالإنترنت - وضع العمل دون اتصال'</span>,\n        ),\n      );\n    }\n    <span class=\"syntax-keyword\">return</span> <span class=\"syntax-keyword\">const</span> <span class=\"syntax-type\">SizedBox</span>.shrink();\n  },\n);"
                },

                {
                    "icon": "fas fa-globe",
                    "title": "Localization & UX Excellence",
                    "content": "Designed specifically for the Middle Eastern market, the application enforces a native Arabic user experience with premium typography and dynamic layouts.",
                    "bullets": [
                        "<strong>Native RTL Support:</strong> The app employs a forced Right-To-Left (RTL) Directionality wrapper in the root <code>main.dart</code>, ensuring that all UI components, animations, and navigations flow naturally for Arabic readers.",
                        "<strong>Premium Arabic Typography:</strong> Integrates <code>GoogleFonts.cairo</code> globally across the application for high-legibility, professional Arabic text rendering.",
                        "<strong>Localized Data Formatting:</strong> Utilizes the <code>intl</code> package with initialized Arabic date symbols to display localized, culturally accurate timestamps and pricing formats."
                    ]
                }
            ],

            "techStack": [
                { "name": "Flutter", "category": "Framework" },
                { "name": "Dart", "category": "Language" },
                { "name": "BLoC / Cubit", "category": "State Management" },
                { "name": "Firebase Firestore", "category": "Database" },
                { "name": "Firebase Auth", "category": "Authentication" },
                { "name": "GetIt", "category": "Dependency Injection" },
                { "name": "Go Router", "category": "Routing" },
                { "name": "Mobile Scanner", "category": "Barcode Scanning" },
                { "name": "Excel & PDF", "category": "Document Generation" },
                { "name": "Shared Preferences", "category": "Local Storage" },
                { "name": "Intl", "category": "Localization" },
                { "name": "Internet Connection", "category": "Network Status" }
            ],

            "mockup": {
                "projectKey": "hala_bakeries",
                "screens": [

                    { "label": "Splash", "icon": "fas fa-spinner", "file": "hala_bakeries_screen/splash.png" },
                    { "label": "Login", "icon": "fas fa-sign-in-alt", "file": "hala_bakeries_screen/login.png" },
                    { "label": "Change Password", "icon": "fas fa-key", "file": "hala_bakeries_screen/change_password.png" },
                    { "label": "Admin Dashboard", "icon": "fas fa-chart-line", "file": "hala_bakeries_screen/home.png" },
                    { "label": "Add Admin", "icon": "fas fa-user-plus", "file": "hala_bakeries_screen/add_admin.png" },
                    { "label": "Employee Dashboard", "icon": "fas fa-user-tie", "file": "hala_bakeries_screen/employee_dashboard.png" },
                    { "label": "Inventory reports", "icon": "fas fa-boxes", "file": "hala_bakeries_screen/Inventory_reports.png" },
                    { "label": "Receipt Reports", "icon": "fas fa-receipt", "file": "hala_bakeries_screen/receipt_report.png" },
                    { "label": "Low Stock Alerts", "icon": "fas fa-exclamation-triangle", "file": "hala_bakeries_screen/low_stock_alerts.png" },
                    { "label": "Add Product", "icon": "fas fa-plus-circle", "file": "hala_bakeries_screen/add_product.png" },
                    { "label": "Branch List", "icon": "fas fa-store", "file": "hala_bakeries_screen/branch_list.png" },
                    { "label": "Personnel Management", "icon": "fas fa-users", "file": " hala_bakeries_screen/personnel_management.png" },
                    { "label": "Product Management", "icon": "fas fa-box", "file": "hala_bakeries_screen/product_management.png" },
                    { "label": "Importing Products", "icon": "fas fa-file-import", "file": "hala_bakeries_screen/importing_products.png" },
                    { "label": "Reports Generation", "icon": "fas fa-file-excel", "file": "hala_bakeries_screen/reports_generation.png" },
                    { "label": "Daily Inventory", "icon": "fas fa-boxes", "file": "hala_bakeries_screen/daily_inventory.png" },


                ]
            }
        },

        {
            "tabId": "homeease-details",
            "glowColor": "rgba(41, 128, 185, 0.25)",
            "fileName": "homeease_case_study.md",

            "hero": {
                "title": "HomeEase — Modern On-Demand Home Services Platform",
                "lead": "A robust, multi-lingual Flutter mobile application utilizing Feature-First Architecture and BLoC state management to deliver seamless home service booking, professional discovery, secure payments, digital wallet management, and real-time order tracking."
            },

            "sections": [
                {
                    "icon": "fas fa-home",
                    "title": "Executive Summary",
                    "content": "Finding reliable home services often involves navigating fragmented platforms with poor communication and no standardized pricing. HomeEase unifies the entire process, offering a centralized hub where users can discover categories, browse trusted companies, book specific services, manage multiple addresses, and handle payments securely through an integrated wallet.",
                    "bullets": [
                        "<strong>Target Audience:</strong> Homeowners and tenants seeking reliable, fast, and verified home maintenance and improvement services.",
                        "<strong>Core Solution:</strong> An end-to-end mobile platform integrating service discovery, smart address management, multi-lingual support, and digital wallet integration.",
                        "<strong>Scale:</strong> Developed using a modular feature-first architecture, robust dependency injection, and scalable state management to support a growing user and service provider base."
                    ]
                },

                {
                    "icon": "fas fa-layer-group",
                    "title": "Architecture & Engineering Decisions",
                    "content": "HomeEase employs a strictly modular, feature-based <strong>Clean Architecture</strong> approach, organizing the codebase by domain features (Auth, Home, Services, Payment, etc.) to ensure high maintainability and testability.",
                    "bullets": [
                        "<strong>Cubit (BLoC):</strong> Manages state predictably across all features. Used for clean separation of UI from business logic, ensuring reactive, side-effect-free updates.",
                        "<strong>GetIt (Service Locator):</strong> Centralizes dependency injection for all API clients, repositories, and logic classes, enabling seamless decoupling and testing.",
                        "<strong>Retrofit & Dio:</strong> Powers the networking layer. Retrofit autogenerates type-safe API clients, while Dio handles advanced interceptors, logging, and timeouts.",
                        "<strong>Freezed Serialization:</strong> Utilized across API responses and states to generate immutable models, union types (e.g., success/failure states), and deep copy functions, minimizing runtime errors.",
                        "<strong>CacheHelper:</strong> A centralized wrapper around SharedPreferences for secure and rapid access to user tokens, selected language, and onboarding states."
                    ]
                },

                {
                    "icon": "fas fa-cogs",
                    "title": "Core State Management & Auth Flow",
                    "content": "The application relies on Freezed-generated union states and Cubits to handle asynchronous API calls elegantly, avoiding boilerplate try-catch blocks in the UI layer and providing strict compile-time safety.",
                    "bullets": [
                        "<strong>Patterned API Handling:</strong> API responses are wrapped in generic success/failure states for predictable UI reactions.",
                        "<strong>Token Management:</strong> Securely caching authentication tokens upon successful login to dictate initial routing seamlessly.",
                        "<strong>UI Separation:</strong> Text controllers (Phone, Password) and form keys are isolated in the Cubit, keeping UI components strictly declarative."
                    ],
                    "isCode": true,
                    "codeFile": "login_cubit.dart",
                    "code": "<span class=\"syntax-type\">Future</span>&lt;<span class=\"syntax-type\">void</span>&gt; <span class=\"syntax-function\">emitLoginAuthStates</span>() <span class=\"syntax-keyword\">async</span> {\n  <span class=\"syntax-function\">emit</span>(<span class=\"syntax-keyword\">const</span> <span class=\"syntax-type\">LoginState</span>.loading());\n\n  <span class=\"syntax-keyword\">final</span> response = <span class=\"syntax-keyword\">await</span> _loginRepo.<span class=\"syntax-function\">login</span>(<span class=\"syntax-type\">LoginRequestBody</span>(\n      password: passwordController.text,\n      phone: phoneController.text));\n\n  response.<span class=\"syntax-function\">when</span>(success: (loginResponse) {\n    <span class=\"syntax-type\">CacheHelper</span>.<span class=\"syntax-function\">saveData</span>(key:<span class=\"syntax-string\">'token'</span>, value: loginResponse.token.<span class=\"syntax-function\">toString</span>());\n    <span class=\"syntax-function\">emit</span>(<span class=\"syntax-type\">LoginState</span>.loginSuccess(loginResponse));\n  }, failure: (error) {\n    <span class=\"syntax-function\">emit</span>(<span class=\"syntax-type\">LoginState</span>.error(error: error.apiErrorModel.message ?? <span class=\"syntax-string\">''</span>));\n  });\n}"
                },

                {
                    "icon": "fas fa-map-marked-alt",
                    "title": "Smart Location & Address Management",
                    "content": "Accurate service delivery requires robust address handling. The platform allows users to seamlessly manage their locations and link them to specific service orders.",
                    "bullets": [
                        "<strong>Address Selection:</strong> Dedicated flows for adding, selecting, and modifying user service locations.",
                        "<strong>Order Integration:</strong> Binds the user's active address directly to their checkout cart to ensure accurate service provider dispatching."
                    ]
                },

                {
                    "icon": "fas fa-wallet",
                    "title": "Integrated Wallet & Checkout Flow",
                    "content": "To facilitate smooth transactions and increase user loyalty, HomeEase incorporates a digital wallet alongside a comprehensive payment checkout system.",
                    "bullets": [
                        "<strong>My Wallet:</strong> Users can track their current balance, view past transactions, and use wallet funds seamlessly for service payments.",
                        "<strong>Multi-Step Checkout:</strong> Structured order detail flows linking selected services, time slots, and flexible payment methods."
                    ]
                },

                {
                    "icon": "fas fa-language",
                    "title": "Dynamic Localization & UI Polish",
                    "content": "Built for a diverse user base, the app supports full dynamic localization and pixel-perfect responsive UI scaling.",
                    "bullets": [
                        "<strong>Easy Localization:</strong> Real-time toggling between English and Arabic (including full RTL layout support) without requiring app restarts.",
                        "<strong>Responsive Scaling:</strong> flutter_screenutil ensures consistent layouts, typography, and padding across all device form factors.",
                        "<strong>Interactive Feedback:</strong> Integrated smooth page indicators for onboarding and native SVG rendering (flutter_svg) for crisp iconography at any resolution."
                    ]
                },

                {
                    "icon": "fas fa-route",
                    "title": "Intelligent Routing & Session Management",
                    "content": "Ensuring users land exactly on the right screen based on their authentication and onboarding history.",
                    "bullets": [
                        "<strong>Initial Route Evaluation:</strong> The app dynamically calculates the starting screen at launch—checking for language preferences, onboarding completion, and valid cached session tokens.",
                        "<strong>Centralized AppRouter:</strong> All screen transitions are managed through a centralized routing system, keeping complex navigation logic entirely out of UI widgets."
                    ]
                }
            ],

            "techStack": [
                { "name": "Flutter", "category": "Framework" },
                { "name": "Dart", "category": "Language" },
                { "name": "Cubit / BLoC", "category": "State Management" },
                { "name": "GetIt", "category": "Dependency Injection" },
                { "name": "Dio", "category": "Networking" },
                { "name": "Retrofit", "category": "API Layer" },
                { "name": "Freezed", "category": "Serialization" },
                { "name": "Easy Localization", "category": "Internationalization" },
                { "name": "ScreenUtil", "category": "Responsive Design" },
                { "name": "Shared Preferences", "category": "Local Cache" },
                { "name": "Pinput", "category": "OTP Input" },
                { "name": "Image Picker", "category": "Media Selection" }
            ],

            "mockup": {
                "projectKey": "homeease",
                "screens": [
                    { "label": "Language Selection", "icon": "fas fa-language", "file": "homeease_screen/select_language.png" },
                    { "label": "Onboarding", "icon": "fas fa-star", "file": "homeease_screen/onboarding.png" },
                    { "label": "User Login", "icon": "fas fa-sign-in-alt", "file": "homeease_screen/login.png" },
                    { "label": "Home Dashboard", "icon": "fas fa-home", "file": "homeease_screen/home.png" },
                    { "label": "Service Categories", "icon": "fas fa-th-large", "file": "homeease_screen/categories.png" },
                    { "label": "Company Profiles", "icon": "fas fa-building", "file": "homeease_screen/companies.png" },
                    { "label": "Service Details", "icon": "fas fa-tools", "file": "homeease_screen/service.png" },
                    { "label": "Address Management", "icon": "fas fa-map-marker-alt", "file": "homeease_screen/address.png" },
                    { "label": "Order Details", "icon": "fas fa-receipt", "file": "homeease_screen/orderdetalis.png" },
                    { "label": "My Wallet", "icon": "fas fa-wallet", "file": "homeease_screen/mywallet.png" },
                    { "label": "Order History", "icon": "fas fa-history", "file": "homeease_screen/history.png" },
                    { "label": "User Profile", "icon": "fas fa-user", "file": "homeease_screen/profile.png" }
                ]
            }
        },

        {
            "tabId": "ecommerce-details",
            "glowColor": "rgba(242, 114, 53, 0.25)",
            "fileName": "ecommerce_case_study.md",

            "hero": {
                "title": "StoreApp — Advanced Multi-Role E-Commerce Platform",
                "lead": "A full-scale, production-ready Flutter e-commerce application leveraging the GetX ecosystem for high-performance state management, featuring dynamic product discovery, interactive cart & checkout flows, real-time location mapping, role-based admin controls, and robust RESTful API integration."
            },

            "sections": [
                {
                    "icon": "fas fa-bullseye",
                    "title": "Executive Summary",
                    "content": "Modern digital retail demands fast load times, intuitive navigation, and reliable checkout processes. StoreApp addresses these needs by providing a comprehensive mobile storefront that connects consumers with diverse product categories, simplifies the cart-to-checkout pipeline, and empowers administrators with a built-in management suite—all packaged in a fluid, cross-platform application.",
                    "bullets": [
                        "<strong>Target Audience:</strong> Shoppers seeking a smooth mobile purchasing experience, and store administrators requiring on-the-go inventory and order management.",
                        "<strong>Core Solution:</strong> An elegant platform unifying dynamic product search, real-time cart updates, secure checkout with location-based address picking, and favorite wishlists.",
                        "<strong>Scale:</strong> Built on a scalable MVC architecture using GetX, with robust HTTP service layers, offline caching, and responsive UI suitable for long-term growth."
                    ]
                },

                {
                    "icon": "fas fa-layer-group",
                    "title": "Architecture & State Management",
                    "content": "StoreApp is structured around the <strong>MVC (Model-View-Controller) Pattern</strong> supercharged by the <strong>GetX Ecosystem</strong>. This ensures a clean separation of UI components, business logic, and data layers while providing an incredibly fast reactive state management solution.",
                    "bullets": [
                        "<strong>GetX Controllers:</strong> Utilized for explicit, reactive state transitions. UI components update automatically when observable variables change, eliminating unnecessary widget rebuilds.",
                        "<strong>GetX Route Management:</strong> Centralized, context-less routing via `GetMaterialApp`, allowing seamless transitions and middleware guards for protected screens (like admin panels and checkout flows).",
                        "<strong>Decoupled Data Layer:</strong> The data layer is decoupled into Remote and Local data sources. The `http` package drives API communication, augmented by `dartz` for functional error handling.",
                        "<strong>Clean Business Logic:</strong> Controllers handle pure business logic and API requests, keeping the view layer strictly focused on rendering the UI."
                    ]
                },

                {
                    "icon": "fas fa-shopping-cart",
                    "title": "Cart, Checkout & Order Tracking",
                    "content": "The transaction pipeline is the most critical flow of an e-commerce platform. StoreApp implements a multi-stage checkout process with granular, real-time state tracking.",
                    "bullets": [
                        "<strong>Real-time Cart Management:</strong> A reactive cart controller instantly recalculates totals, shipping costs, and item quantities as the user adds or removes products without freezing the UI.",
                        "<strong>Geographic Address Mapping:</strong> Integrated with `google_maps_flutter` and `geolocator` to allow users to visually pin their delivery address on an interactive map, automatically converting coordinates into textual addresses via `geocoding`.",
                        "<strong>Order Lifecycle:</strong> Users can track their orders across multiple states (Pending, Processing, Shipped, Delivered) through a dedicated status dashboard."
                    ],
                    "isCode": true,
                    "codeFile": "cart_controller.dart",
                    "code": "<span class=\"syntax-type\">void</span> <span class=\"syntax-function\">addAndRemove</span>(<span class=\"syntax-type\">String</span> productId, <span class=\"syntax-type\">String</span> quantity) <span class=\"syntax-keyword\">async</span> {\n  statusRequest = <span class=\"syntax-type\">StatusRequest</span>.loading;\n  <span class=\"syntax-function\">update</span>();\n  <span class=\"syntax-keyword\">var</span> response = <span class=\"syntax-keyword\">await</span> cartdata.<span class=\"syntax-function\">cartData</span>(\n    token: myServices.sharedPreferences.<span class=\"syntax-function\">getString</span>(<span class=\"syntax-string\">\"token\"</span>)!,\n    productId: productId,\n    quantity: quantity\n  );\n  statusRequest = <span class=\"syntax-function\">handlingData</span>(response);\n  <span class=\"syntax-keyword\">if</span> (<span class=\"syntax-type\">StatusRequest</span>.success == statusRequest) {\n    <span class=\"syntax-keyword\">if</span> (response[<span class=\"syntax-string\">'status'</span>] == <span class=\"syntax-keyword\">true</span>) {\n      <span class=\"syntax-function\">showToast</span>(msg: <span class=\"syntax-string\">\"The product has been added to the cart\"</span>);\n    } <span class=\"syntax-keyword\">else</span> {\n      statusRequest = <span class=\"syntax-type\">StatusRequest</span>.failure;\n    }\n  }\n  <span class=\"syntax-function\">update</span>();\n}"
                },

                {
                    "icon": "fas fa-user-shield",
                    "title": "Role-Based Admin Dashboard",
                    "content": "Unlike standard e-commerce templates, StoreApp includes a built-in Administrative suite for store owners to manage the platform directly from the mobile application without needing a separate web portal.",
                    "bullets": [
                        "<strong>Admin Authentication Guard:</strong> Role-based login routes users to either the standard customer layout or the secure admin dashboard depending on their account privileges.",
                        "<strong>Catalog Management:</strong> Admins can add, edit, or remove products and categories directly through secure remote API endpoints, with support for image uploads via `file_picker`.",
                        "<strong>Order Fulfillment:</strong> Admins access a dedicated order queue to review pending orders, update delivery statuses, and manage user requests on the fly."
                    ]
                },

                {
                    "icon": "fas fa-lock",
                    "title": "Authentication, Security & Local Caching",
                    "content": "User sessions and authentication are protected using standard security practices, while leveraging persistent caching to deliver a blazing-fast user experience.",
                    "bullets": [
                        "<strong>OTP Verification:</strong> Integrated `flutter_otp_text_field` for secure account creation and password recovery, adding a reliable layer of identity verification.",
                        "<strong>Local Persistence:</strong> Utilizes `shared_preferences` and `sqflite` for caching session IDs, tokens, cart data, and localization settings, enabling instant app launches without re-authentication.",
                        "<strong>Functional Error Handling:</strong> Using the `dartz` package, the data layer wraps API responses in `Either<Failure, Data>` types, ensuring all network exceptions are safely caught and presented to the user gracefully."
                    ]
                },

                {
                    "icon": "fas fa-paint-brush",
                    "title": "UI Polish & Visual Feedback",
                    "content": "The visual experience is deeply enhanced with rich feedback, smooth image loading, and modern UI paradigms to maximize customer retention.",
                    "bullets": [
                        "<strong>Lottie Micro-Animations:</strong> Implemented interactive `lottie` animations for empty cart states, successful checkouts, and network error screens, providing a delightful user experience.",
                        "<strong>Aggressive Image Caching:</strong> `cached_network_image` is used extensively across product grids to save bandwidth, reduce load times, and prevent image flickering during scrolling.",
                        "<strong>Smooth Interactions:</strong> Utilized `smooth_page_indicator` for onboarding flows and promotional banners, making the app feel incredibly premium and native."
                    ]
                },

                {
                    "icon": "fas fa-fire",
                    "title": "Engineering Challenges Solved",
                    "content": "Building a full-scale e-commerce platform required overcoming specific logic, state management, and routing hurdles.",
                    "bullets": [
                        "<strong>Challenge 1 — Optimistic UI Updates:</strong> Waiting for HTTP requests to finish before updating the Cart or Favorites causes perceived lag. <em>Solved by</em> updating GetX observable states instantly upon user tap, and reverting the state silently if the API request fails via the controller.",
                        "<strong>Challenge 2 — Complex Route Middleware:</strong> Ensuring unauthenticated users cannot access checkout, and regular users cannot access the Admin panel. <em>Solved by</em> implementing custom GetX Route Middlewares that inspect the local `SharedPreferences` cache before rendering the requested route.",
                        "<strong>Challenge 3 — Map-Based Address Picking:</strong> Parsing accurate string addresses from a visual map pin. <em>Solved by</em> combining `google_maps_flutter` for the visual interface and `geocoding` to reverse-geocode the Lat/Lng into a readable street address, saving both to the database."
                    ]
                }
            ],

            "techStack": [
                { "name": "Flutter", "category": "Framework" },
                { "name": "Dart", "category": "Language" },
                { "name": "GetX", "category": "State & Routing" },
                { "name": "http", "category": "Networking" },
                { "name": "Dartz", "category": "Functional Logic" },
                { "name": "Google Maps", "category": "Maps Integration" },
                { "name": "Geolocator", "category": "Location Services" },
                { "name": "Shared Preferences", "category": "Local Cache" },
                { "name": "Sqflite", "category": "Local Database" },
                { "name": "Firebase", "category": "Push Notifications" },
                { "name": "Lottie", "category": "Animations" },
                { "name": "Cached Network Image", "category": "Image Caching" }
            ],

            "mockup": {
                "projectKey": "ecommerce",
                "screens": [
                    { "label": "Onboarding", "icon": "fas fa-star", "file": "ecommerce_screen/onboarding.png" },
                    { "label": "Secure Login", "icon": "fas fa-sign-in-alt", "file": "ecommerce_screen/login.png" },
                    { "label": "OTP Verification", "icon": "fas fa-key", "file": "ecommerce_screen/otp.png" },
                    { "label": "Home Dashboard", "icon": "fas fa-home", "file": "ecommerce_screen/home.png" },
                    { "label": "Product Catalog", "icon": "fas fa-list", "file": "ecommerce_screen/category.png" },
                    { "label": "Product Details", "icon": "fas fa-info-circle", "file": "ecommerce_screen/product_detail.png" },
                    { "label": "Shopping Cart", "icon": "fas fa-shopping-cart", "file": "ecommerce_screen/cart.png" },
                    { "label": "Location Checkout", "icon": "fas fa-map-marked-alt", "file": "ecommerce_screen/checkout_map.png" },
                    { "label": "Order Details", "icon": "fas fa-box", "file": "ecommerce_screen/order_detail.png" },
                    { "label": "Admin Dashboard", "icon": "fas fa-user-shield", "file": "ecommerce_screen/admin_home.png" },
                    { "label": "User Profile", "icon": "fas fa-user", "file": "ecommerce_screen/profile.png" }
                ]
            }
        },

        {
            "tabId": "fluoro-details",
            "glowColor": "rgba(0, 188, 212, 0.25)",
            "fileName": "fluoro_master_case_study.md",

            "hero": {
                "title": "Fluoro Master — Medical Radiology & Fluoroscopy Ecosystem",
                "lead": "A comprehensive medical utility and educational platform for radiology professionals and students, delivering detailed fluoroscopy procedure guides, dose calculators, interactive safety checklists, clinical quizzes, and an AI-powered advisory system — built with Clean Architecture and BLoC state management."
            },

            "sections": [
                {
                    "icon": "fas fa-bullseye",
                    "title": "Executive Summary",
                    "content": "Radiology professionals and students face a critical lack of accessible, structured clinical references during procedures. Fluoro Master bridges this gap by providing an all-in-one digital companion that covers procedural protocols, radiation safety, dose monitoring, and continuous clinical education — available on-device without requiring constant connectivity.",
                    "bullets": [
                        "<strong>Target Audience:</strong> Radiologists, fluoroscopy technologists, radiology residents, and medical students seeking on-the-job clinical guidance and structured learning.",
                        "<strong>Core Solution:</strong> A unified platform combining a detailed procedures library, real-time dose calculators, interactive safety simulators, AI-assisted advisory, and a gamified quiz engine.",
                        "<strong>Scale:</strong> Architected on Clean Architecture with feature-first organization and BLoC state management, ensuring robust scalability and seamless offline access to all clinical content."
                    ]
                },

                {
                    "icon": "fas fa-layer-group",
                    "title": "Architecture & Engineering Decisions",
                    "content": "Fluoro Master employs a <strong>Feature-First Clean Architecture</strong>, clearly separating the Presentation, Domain, and Data layers for every feature module. This ensures high testability and a maintainable, extensible codebase as the medical content library grows.",
                    "bullets": [
                        "<strong>BLoC Pattern:</strong> Manages all complex state transitions — from procedure loading to quiz scoring and AI response streaming — providing explicit, testable, and side-effect-free UI updates.",
                        "<strong>GetIt (Service Locator):</strong> Centralizes all dependency injection across data sources, repositories, and business logic classes, enabling seamless decoupling and painless unit testing.",
                        "<strong>Retrofit & Dio:</strong> Powers the API communication layer with auto-generated type-safe clients, token-injection interceptors, and structured logging for synchronizing medical data and user progress.",
                        "<strong>Flutter Animate:</strong> Provides smooth, performant micro-animations across all screens, ensuring a premium and engaging user experience without impacting rendering performance.",
                        "<strong>Local Storage:</strong> Critical clinical content and user progress are encrypted and cached locally, guaranteeing full offline access — essential in clinical environments with unreliable connectivity."
                    ]
                },

                {
                    "icon": "fas fa-book-medical",
                    "title": "Comprehensive Medical Procedures Library",
                    "content": "The core of Fluoro Master is its structured clinical procedures database, designed to serve as an authoritative on-the-go reference for fluoroscopy professionals.",
                    "bullets": [
                        "<strong>Detailed Procedure Guides:</strong> Step-by-step procedural protocols for a wide range of fluoroscopy examinations, including patient positioning, equipment setup, contrast media protocols, and imaging parameters.",
                        "<strong>Safety Checklists:</strong> Interactive pre-procedure checklists ensuring compliance with radiation protection standards and patient safety protocols before every clinical session.",
                        "<strong>Dose Reference Cards:</strong> Quick-access radiation dose reference values and calculators for common fluoroscopy procedures, helping professionals minimize patient exposure.",
                        "<strong>References & Evidence Base:</strong> Integrated reference lists linking each procedure to its peer-reviewed clinical guidelines and radiological society standards."
                    ]
                },

                {
                    "icon": "fas fa-brain",
                    "title": "AI-Powered Advisory System",
                    "content": "To support real-time clinical decision-making, Fluoro Master integrates an intelligent advisory engine powered by a large language model backend.",
                    "bullets": [
                        "<strong>Clinical Q&A:</strong> Users can query the AI assistant with clinical questions regarding procedures, contraindications, dose thresholds, and equipment settings, receiving evidence-based responses instantly.",
                        "<strong>Contextual Awareness:</strong> The advisory system is contextually aware of the currently viewed procedure, offering targeted guidance without requiring users to re-explain their clinical scenario.",
                        "<strong>Secure API Layer:</strong> AI requests are routed through Retrofit/Dio interceptors with authentication, ensuring all communication with the backend medical AI service is fully secured and logged."
                    ],
                    "isCode": true,
                    "codeFile": "procedure_cubit.dart",
                    "code": "<span class=\"syntax-type\">Future</span>&lt;<span class=\"syntax-type\">void</span>&gt; <span class=\"syntax-function\">loadProcedureDetails</span>(<span class=\"syntax-type\">String</span> procedureId) <span class=\"syntax-keyword\">async</span> {\n  <span class=\"syntax-function\">emit</span>(<span class=\"syntax-keyword\">const</span> <span class=\"syntax-type\">ProcedureState</span>.loading());\n\n  <span class=\"syntax-keyword\">final</span> result = <span class=\"syntax-keyword\">await</span> _procedureRepo.<span class=\"syntax-function\">getProcedureById</span>(procedureId);\n\n  result.<span class=\"syntax-function\">when</span>(\n    success: (procedure) {\n      <span class=\"syntax-function\">emit</span>(<span class=\"syntax-type\">ProcedureState</span>.loaded(procedure));\n    },\n    failure: (error) {\n      <span class=\"syntax-function\">emit</span>(<span class=\"syntax-type\">ProcedureState</span>.error(error.apiErrorModel.message ?? <span class=\"syntax-string\">''</span>));\n    },\n  );\n}"
                },

                {
                    "icon": "fas fa-graduation-cap",
                    "title": "Interactive Quiz & Education Engine",
                    "content": "To support continuous medical education, Fluoro Master features a structured quiz system covering key fluoroscopy knowledge domains.",
                    "bullets": [
                        "<strong>Topic-Based Quizzes:</strong> Quizzes are organized by clinical topics — radiation physics, equipment parameters, contrast protocols, and patient safety — allowing targeted knowledge assessment.",
                        "<strong>Scored Sessions:</strong> Each quiz session tracks scores, correct/incorrect answers, and time taken, providing users with an accurate picture of their knowledge gaps.",
                        "<strong>Progress Persistence:</strong> Quiz history and scores are persisted locally using encrypted storage, enabling users to track their learning progress over time without requiring an account."
                    ]
                },

                {
                    "icon": "fas fa-calculator",
                    "title": "Clinical Dose Calculators & Simulators",
                    "content": "Radiation dose management is a critical safety concern in fluoroscopy. Fluoro Master provides built-in calculators to assist professionals in making informed dose decisions.",
                    "bullets": [
                        "<strong>Dose Area Product (DAP) Calculator:</strong> Computes patient radiation dose metrics based on input imaging parameters, aiding in compliance with ALARA principles.",
                        "<strong>Interactive Simulators:</strong> Step-through clinical scenario simulators allow users to practice procedure decision-making in a safe, risk-free digital environment.",
                        "<strong>Reference Value Comparisons:</strong> Calculated doses are automatically benchmarked against standard diagnostic reference levels (DRLs) to flag potential overexposure."
                    ]
                },

                {
                    "icon": "fas fa-fire",
                    "title": "Engineering Challenges Solved",
                    "content": "Building a medically accurate, offline-capable, and AI-integrated platform presented unique engineering challenges.",
                    "bullets": [
                        "<strong>Challenge 1 — Offline-First Clinical Data:</strong> Medical professionals often work in signal-poor clinical environments. <em>Solved by</em> implementing an offline-first data layer that caches all procedure content and user progress locally using encrypted storage, syncing transparently with the remote API when connectivity is restored.",
                        "<strong>Challenge 2 — Complex Nested State Management:</strong> Procedure detail screens contain multiple independent sub-states (checklist completion, dose calculations, AI responses). <em>Solved by</em> scoping dedicated Cubits to each functional sub-section, keeping state isolated and preventing unintentional UI rebuilds across the entire screen.",
                        "<strong>Challenge 3 — Secure Medical Data API:</strong> Medical data APIs require strict authentication and tamper-proof communication. <em>Solved by</em> implementing Dio interceptors for automatic token injection and response integrity verification, combined with Flutter Secure Storage for encrypted credential persistence."
                    ]
                }
            ],

            "techStack": [
                { "name": "Flutter", "category": "Framework" },
                { "name": "Dart", "category": "Language" },
                { "name": "BLoC", "category": "State Management" },
                { "name": "Clean Architecture", "category": "Architecture" },
                { "name": "GetIt", "category": "Dependency Injection" },
                { "name": "Retrofit", "category": "API Layer" },
                { "name": "Dio", "category": "Networking" },
                { "name": "Flutter Animate", "category": "Animations" },
                { "name": "Local Storage", "category": "Offline Cache" },
                { "name": "Secure Storage", "category": "Encrypted Storage" }
            ],

            "mockup": {
                "projectKey": "fluoro",
                "screens": [
                    { "label": "Onboarding", "icon": "fas fa-star", "file": "fluoro_screen/onboarding.png" },
                    { "label": "Home Dashboard", "icon": "fas fa-home", "file": "fluoro_screen/home.png" },
                    { "label": "Procedures Library", "icon": "fas fa-book-medical", "file": "fluoro_screen/procedures.png" },
                    { "label": "Procedure Detail", "icon": "fas fa-file-medical", "file": "fluoro_screen/procedure_detail.png" },
                    { "label": "Safety Checklist", "icon": "fas fa-clipboard-check", "file": "fluoro_screen/checklist.png" },
                    { "label": "Dose Calculator", "icon": "fas fa-calculator", "file": "fluoro_screen/calculator.png" },
                    { "label": "Quiz Screen", "icon": "fas fa-graduation-cap", "file": "fluoro_screen/quiz.png" },
                    { "label": "AI Advisory", "icon": "fas fa-brain", "file": "fluoro_screen/ai_advisory.png" },
                    { "label": "References", "icon": "fas fa-list-alt", "file": "fluoro_screen/references.png" }
                ]
            }
        }

    ]
};
