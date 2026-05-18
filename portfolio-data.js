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
            caseStudyTab: null
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
        {
            title: "Hospital Management App",
            githubUrl: "https://github.com/AbdulrahmanRamadan22/hospital",
            type: "Mobile App",
            date: "Sep 2024 - Oct 2024",
            description: "Digital system for patient records and hospital operations via API integration with intuitive dashboards.",
            tech: ["Flutter", "Dio", "SQLite"],
            caseStudyTab: null
        },
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
            tabId: "jobizz-details",
            glowColor: "rgba(0, 122, 204, 0.25)",
            fileName: "jobizz_case_study.md",
            hero: {
                title: "Jobizz — Production Career Platform",
                lead: "A complete job discovery and application platform built using Clean Architecture and Flutter BLoC."
            },
            sections: [
                {
                    icon: "fas fa-bullseye",
                    title: "Executive Summary",
                    content: "Jobizz is a premium mobile career portal connecting talent with modern tech recruiters. The system utilizes industry-standard best practices in mobile engineering: a domain-driven Clean Architecture structure, robust offline capabilities, secure multi-factor session management, and adaptive layout presentation."
                },
                {
                    icon: "fas fa-layer-group",
                    title: "Architecture & State Management",
                    content: "The application relies on <strong>Domain-Driven Design (DDD)</strong> Clean Architecture separated into three strict layers:",
                    bullets: [
                        "<strong>Data Layer:</strong> Dio client, Retrofit API definitions, local SqfLite storage caches, and Repository implementations.",
                        "<strong>Domain Layer:</strong> Pure Dart Entity classes, Value Objects, and isolated Use Case classes enforcing SOLID principles.",
                        "<strong>Presentation Layer:</strong> State management powered by <strong>BLoC/Cubit</strong> to keep the UI entirely reactive, separating business logic from design."
                    ]
                },
                {
                    icon: "fas fa-code",
                    title: "Secure Interceptor Implementation",
                    content: "Here is an abstract showcasing how secure API tokens are managed dynamically using Retrofit & Dio Interceptors on the data layer:",
                    isCode: true,
                    codeFile: "auth_interceptor.dart",
                    code: `<span class="syntax-keyword">class</span> <span class="syntax-type">AuthInterceptor</span> <span class="syntax-keyword">extends</span> <span class="syntax-type">Interceptor</span> {
  <span class="syntax-keyword">final</span> <span class="syntax-type">SecureStorage</span> _storage;

  <span class="syntax-type">AuthInterceptor</span>(<span class="syntax-keyword">this</span>._storage);

  <span class="syntax-annotation">@override</span>
  <span class="syntax-keyword">void</span> <span class="syntax-function">onRequest</span>(<span class="syntax-type">RequestOptions</span> options, <span class="syntax-type">RequestInterceptorHandler</span> handler) <span class="syntax-keyword">async</span> {
    <span class="syntax-keyword">final</span> token = <span class="syntax-keyword">await</span> _storage.<span class="syntax-function">read</span>(key: <span class="syntax-string">'jwt_token'</span>);
    <span class="syntax-keyword">if</span> (token != <span class="syntax-keyword">null</span>) {
      options.headers[<span class="syntax-string">'Authorization'</span>] = <span class="syntax-string">'Bearer \$token'</span>;
    }
    <span class="syntax-keyword">return</span> <span class="syntax-keyword">super</span>.<span class="syntax-function">onRequest</span>(options, handler);
  }
}`
                }
            ],
            mockup: {
                projectKey: "jobizz",
                screens: [
                    { label: "Home View", icon: "fas fa-home", file: "jobizz_home.png" },
                    { label: "Job Feed", icon: "fas fa-briefcase", file: "jobizz_jobs.png" },
                    { label: "Live Chat", icon: "fas fa-comments", file: "jobizz_chat.png" },
                    { label: "Profile View", icon: "fas fa-user-circle", file: "jobizz_profile.png" }
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
        }

    ]
};
