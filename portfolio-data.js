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
            date: "Sep 2024 - Oct 2024",
            title: "Mobile Developer (Flutter Intern)",
            company: "Instant Software Solutions",
            companyUrl: "https://instanteg.com/",
            location: "Cairo, Egypt (Remote)",
            description: "",
            bullets: [
                "Developed responsive, user-friendly interfaces following modern UI/UX principles, improving user engagement by 25%.",
                "Integrated REST APIs with Retrofit/Dio, ensuring seamless data flow and offline functionality using SQLite/SharedPreferences.",
                "Debugged and resolved 15+ critical issues, reducing app crashes by 30% and enhancing stability.",
                "Implemented Clean Architecture, reducing code redundancy by 40% and improving maintainability."
            ],
            tech: ["Flutter", "Dart", "REST APIs", "Clean Architecture", "Local Storage", "Git"],
            caseStudyTab: null
        }
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
            caseStudyTab: null
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
            caseStudyTab: null
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
            degree: "Master's Degree in Computer Science",
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
        }

    ]
};
