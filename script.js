// Loading Animation
class LoadingManager {
    constructor() {
        this.commands = [
            'npm install portfolio-dependencies',
            'building abdelrahman-ramadan portfolio...',
            'compiling professional experience...',
            'optimizing skill showcase...',
            'initializing contact system...'
        ];
        this.currentCommandIndex = 0;
        this.currentCharIndex = 0;
        this.init();
    }

    init() {
        this.startLoading();
    }

    startLoading() {
        const commandElement = document.getElementById('loadingCommand');
        const outputElement = document.getElementById('terminalOutput');

        if (!commandElement || !outputElement) return;

        this.typeCommand(commandElement, () => {
            this.showOutput(outputElement);
        });
    }

    typeCommand(element, callback) {
        const command = this.commands[0];

        const typeInterval = setInterval(() => {
            if (this.currentCharIndex < command.length) {
                element.textContent = command.substring(0, this.currentCharIndex + 1);
                this.currentCharIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(callback, 500);
            }
        }, 50);
    }

    showOutput(element) {
        const outputs = [
            'Fetching mobile development expertise... âœ“',
            'Loading Flutter and Dart skills... âœ“',
            'Compiling Wratil and Jobizz projects... âœ“',
            'Initializing Clean Architecture portfolio... âœ“',
            'Setting up interactive interface... âœ“',
            'Portfolio ready! Welcome Abdelrahman Ramadan ًںڑ€'
        ];

        let outputIndex = 0;
        const outputInterval = setInterval(() => {
            if (outputIndex < outputs.length) {
                const outputLine = document.createElement('div');
                outputLine.textContent = outputs[outputIndex];
                element.appendChild(outputLine);
                outputIndex++;
            } else {
                clearInterval(outputInterval);
            }
        }, 400);
    }
}

// Portfolio Interactive Functionality
class PortfolioManager {
    constructor() {
        this.activeTab = null;
        this.openTabs = [];
        this.draggedTab = null;
        this.init();
    }

    init() {
        this.renderData(); // Dynamic rendering injection
        this.setupEventListeners();
        this.setupKeyboardShortcuts();
        this.setupDragAndDrop();
        
        // Handle Deep Linking
        const urlParams = new URLSearchParams(window.location.search);
        const initialTab = urlParams.get('tab') || window.location.hash.substring(1);
        
        if (initialTab) {
            // Delay slightly to ensure rendering is complete
            setTimeout(() => {
                this.openTab(initialTab);
            }, 100);
        } else {
            this.showWelcomePage();
        }

        // Show main container after loading
        setTimeout(() => {
            document.getElementById('mainContainer').style.display = 'flex';
        }, 4500);
    }

    renderData() {
        console.log('Dynamically rendering portfolio data...');
        if (!window.portfolioData) {
            console.error('portfolioData not found! Make sure portfolio-data.js is loaded first.');
            return;
        }
        this._renderExperiences();
        this._renderProjects();
        this._renderSkills();
        this._renderEducation();
        this._renderContact();
        this._renderCaseStudies();
    }

    _renderExperiences() {
        const container = document.getElementById('experience-timeline-container');
        if (!container || !window.portfolioData.experiences) return;

        container.innerHTML = '<div class="git-branch"></div>';
        window.portfolioData.experiences.forEach(exp => {
            const commit = document.createElement('div');
            commit.className = 'git-commit';
            const bulletsHtml = exp.bullets.map(b => `<li>${b}</li>`).join('');
            const techHtml = exp.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
            const caseStudyBtn = exp.caseStudyTab ? `
                <div class="project-actions" style="margin-top:15px;">
                    <button class="contact-btn primary premium-case-study-btn experience-case-study-btn" onclick="portfolioManager.openTab('${exp.caseStudyTab}')">
                        <i class="fab fa-markdown"></i> View Case Study Details
                    </button>
                </div>` : '';

            commit.innerHTML = `
                <div class="commit-dot"></div>
                <div class="commit-content">
                    <div class="commit-header">
                        <span class="commit-date" style="font-weight:bold;color:var(--accent-blue);font-size:14px;">
                            <i class="far fa-calendar-alt"></i> ${exp.date}
                        </span>
                    </div>
                    <div class="commit-message">
                        <h3>${exp.title}</h3>
                        <h4>
                            ${exp.companyUrl
                                ? `<a href="${exp.companyUrl}" target="_blank">${exp.company}
                                    <i class="fas fa-external-link-alt" style="font-size:0.8em;"></i>
                                   </a>`
                                : exp.caseStudyTab
                                    ? `<a href="#" onclick="event.preventDefault(); portfolioManager.openTab('${exp.caseStudyTab}')" style="cursor:pointer;">${exp.company}
                                        <i class="fab fa-markdown" style="font-size:0.8em;" title="View Case Study"></i>
                                       </a>`
                                    : `<span>${exp.company}</span>`
                            }${exp.location ? ` - ${exp.location}` : ''}
                        </h4>
                    </div>
                    <div class="commit-details">
                        ${exp.description ? `<p>${exp.description}</p>` : ''}
                        <ul>${bulletsHtml}</ul>
                        <div class="tech-stack mt-2">${techHtml}</div>
                        ${caseStudyBtn}
                    </div>
                </div>`;
            container.appendChild(commit);
        });
    }

    _renderProjects() {
        const container = document.getElementById('projects-grid-container');
        if (!container || !window.portfolioData.projects) return;

        container.innerHTML = '';
        window.portfolioData.projects.forEach(proj => {
            const card = document.createElement('div');
            card.className = 'premium-project-card';
            const techHtml = proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
            const actionBtn = proj.caseStudyTab ? `
                <div class="project-actions" style="margin-top:15px;">
                    <button class="contact-btn primary premium-case-study-btn" onclick="portfolioManager.openTab('${proj.caseStudyTab}')">
                        <i class="fab fa-markdown"></i> View Case Study Details
                    </button>
                </div>` : '';

            card.innerHTML = `
                <div class="project-header">
                    <h3>${proj.title}</h3>
                    <div class="project-links">
                        <a href="${proj.githubUrl}" target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <div class="project-meta">
                    <span class="badge type-badge">${proj.type}</span>
                    <span class="badge duration-badge"><i class="far fa-calendar-alt"></i> ${proj.date}</span>
                </div>
                <p class="project-description">${proj.description}</p>
                <div class="tech-stack">${techHtml}</div>
                ${actionBtn}`;
            container.appendChild(card);
        });
    }

    _renderSkills() {
        const container = document.getElementById('skills-grid-container');
        if (!container || !window.portfolioData.skills) return;

        container.innerHTML = '';
        window.portfolioData.skills.forEach(group => {
            const cat = document.createElement('div');
            cat.className = 'skill-category';
            const tagsHtml = group.tags.map(t => `<span class="skill-tag">${t}</span>`).join('');
            cat.innerHTML = `
                <h3>${group.category}</h3>
                <div class="skill-tags">${tagsHtml}</div>`;
            container.appendChild(cat);
        });
    }

    _renderEducation() {
        const eduContainer = document.getElementById('education-timeline-container');
        const langContainer = document.getElementById('languages-section-container');

        // Education items
        if (eduContainer && window.portfolioData.education) {
            eduContainer.innerHTML = '';
            window.portfolioData.education.forEach(edu => {
                const item = document.createElement('div');
                item.className = 'education-item';

                let bodyHtml = '';
                if (edu.description) {
                    bodyHtml = `<p>${edu.description}</p>`;
                } else if (edu.bullets) {
                    bodyHtml = `<ul>${edu.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`;
                }

                item.innerHTML = `
                    <div class="education-period">${edu.period}</div>
                    <div class="education-details">
                        <h3>${edu.degree}</h3>
                        <h4>${edu.institution}</h4>
                        ${bodyHtml}
                    </div>`;
                eduContainer.appendChild(item);
            });
        }

        // Languages
        if (langContainer && window.portfolioData.languages) {
            langContainer.innerHTML = `
                <h3><i class="fas fa-language" style="color:var(--accent-green);margin-right:8px;"></i>Languages</h3>
                <div class="language-skills"></div>`;
            const langSkills = langContainer.querySelector('.language-skills');

            window.portfolioData.languages.forEach(lang => {
                const card = document.createElement('div');
                card.className = 'language-card';
                card.innerHTML = `
                    <div class="language-card-header">
                        <div class="language-info">
                            <span class="language-name">${lang.name}</span>
                            <span class="language-badge ${lang.badgeClass}">${lang.badge}</span>
                        </div>
                        <div class="language-icon-wrapper">
                            <i class="${lang.icon}" style="color:${lang.color};"></i>
                        </div>
                    </div>`;
                langSkills.appendChild(card);
            });
        }
    }

    _renderContact() {
        const contactContainer = document.getElementById('contact-grid-container');
        const availContainer = document.getElementById('availability-section-container');

        // Contact cards
        if (contactContainer && window.portfolioData.contact) {
            contactContainer.innerHTML = '';
            window.portfolioData.contact.forEach(c => {
                const card = document.createElement('div');
                card.className = 'contact-card';

                // Build primary action button/link
                let primaryBtn = '';
                if (c.primaryAction === 'link' && c.url) {
                    primaryBtn = `
                        <a href="${c.url}" target="_blank" class="contact-btn primary"
                            style="text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px;">
                            <i class="${c.primaryIcon}"></i> ${c.primaryLabel}
                        </a>`;
                } else if (c.primaryAction === 'email') {
                    primaryBtn = `
                        <a href="mailto:${c.value}" class="contact-btn primary"
                            style="text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px;">
                            <i class="${c.primaryIcon}"></i> ${c.primaryLabel}
                        </a>`;
                } else if (c.primaryAction === 'phone') {
                    primaryBtn = `
                        <a href="tel:${c.value}" class="contact-btn primary"
                            style="text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px;">
                            <i class="${c.primaryIcon}"></i> ${c.primaryLabel}
                        </a>`;
                } else if (c.primaryAction === 'map') {
                    primaryBtn = `
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.value)}" target="_blank"
                            class="contact-btn primary"
                            style="text-decoration:none;display:flex;align-items:center;justify-content:center;gap:8px;">
                            <i class="${c.primaryIcon}"></i> ${c.primaryLabel}
                        </a>`;
                }

                // Determine the copy value
                const copyValue = c.url || c.value;
                const secondaryBtn = `
                    <button class="contact-btn secondary" onclick="navigator.clipboard.writeText('${copyValue}').then(()=>{this.innerHTML='<i class=\\'fas fa-check\\'></i> Copied!';setTimeout(()=>{this.innerHTML='<i class=\\'${c.secondaryIcon}\\'></i> ${c.secondaryLabel}';},2000)})">
                        <i class="${c.secondaryIcon}"></i> ${c.secondaryLabel}
                    </button>`;

                // Value display (link or plain text)
                const displayValue = c.url
                    ? `<a href="${c.url}" target="_blank" style="color:var(--accent-blue);text-decoration:none;">${c.value}</a>`
                    : c.value;

                card.innerHTML = `
                    <div class="contact-icon"><i class="${c.icon}"></i></div>
                    <div class="contact-info">
                        <h3>${c.type}</h3>
                        <p>${displayValue}</p>
                    </div>
                    <div class="contact-actions">
                        ${primaryBtn}
                        ${secondaryBtn}
                    </div>`;
                contactContainer.appendChild(card);
            });
        }

        // Availability section
        if (availContainer && window.portfolioData.availability) {
            const av = window.portfolioData.availability;
            availContainer.innerHTML = `
                <h3>Availability</h3>
                <div class="availability-card">
                    <div class="status-indicator ${av.statusClass}"></div>
                    <div class="availability-info">
                        <h4>${av.status}</h4>
                        <p>${av.description}</p>
                    </div>
                </div>`;
        }
    }

    _renderCaseStudies() {
        const wrapper = document.getElementById('case-studies-wrapper');
        if (!wrapper || !window.portfolioData.caseStudies) return;

        wrapper.innerHTML = '';

        window.portfolioData.caseStudies.forEach(cs => {
            const tab = document.createElement('div');
            tab.className = 'tab-content';
            tab.id = cs.tabId;
            tab.style.setProperty('--project-glow', cs.glowColor);

            // Build sections HTML
            let sectionsHtml = cs.sections.map(sec => {
                let bodyHtml = `<p class="section-paragraph">${sec.content}</p>`;

                // Executive Summary Bento Grid
                if (sec.title.includes("Summary") && sec.bullets) {
                    const icons = ["fa-users", "fa-exclamation-triangle", "fa-chart-line"];
                    const categories = ["Target Audience", "Core Problem Solved", "Project Scale"];
                    
                    const gridCards = sec.bullets.map((b, idx) => `
                        <div class="summary-bento-card">
                            <div class="bento-card-header">
                                <div class="bento-icon-wrapper"><i class="fas ${icons[idx] || 'fa-check'}"></i></div>
                                <h4>${categories[idx] || 'Highlight'}</h4>
                            </div>
                            <div class="bento-card-body">${b}</div>
                        </div>
                    `).join('');
                    
                    bodyHtml = `<div class="summary-bento-grid">${gridCards}</div>`;
                }
                
                // Architecture and feature matrices
                else if (sec.bullets && !sec.title.includes("Challenges") && !sec.isCode) {
                    const bulletsGrid = sec.bullets.map(b => {
                        const boldMatch = b.match(/<strong>(.*?)<\/strong>:(.*)/) || b.match(/<em>(.*?)<\/em>:(.*)/);
                        let titleText = "Key Detail";
                        let descText = b;
                        
                        if (boldMatch) {
                            titleText = boldMatch[1];
                            descText = boldMatch[2];
                        }
                        
                        return `
                            <div class="architecture-card">
                                <div class="arch-card-header">
                                    <span class="arch-bullet-dot"></span>
                                    <h5>${titleText}</h5>
                                </div>
                                <p class="arch-card-body">${descText}</p>
                            </div>
                        `;
                    }).join('');
                    
                    bodyHtml = `
                        <p class="section-paragraph">${sec.content}</p>
                        <div class="architecture-grid">
                            ${bulletsGrid}
                        </div>
                    `;
                }

                // Interactive Simulated VS Code Editor
                if (sec.isCode) {
                    // Pre-render syntax highlighted code with realistic line numbers
                    const codeLines = sec.code.split('\n');
                    const lineNumbersHtml = codeLines.map((_, i) => `<span class="line-number">${i + 1}</span>`).join('');
                    const formattedCodeHtml = codeLines.join('\n');

                    bodyHtml += `
                        <div class="premium-editor-window">
                            <div class="editor-titlebar">
                                <div class="editor-left-controls">
                                    <span class="control-dot red"></span>
                                    <span class="control-dot yellow"></span>
                                    <span class="control-dot green"></span>
                                </div>
                                <div class="editor-active-tab">
                                    <i class="fab fa-google" style="color: #00d2ff; font-size: 11px;"></i>
                                    <span class="tab-filename">${sec.codeFile}</span>
                                </div>
                            </div>
                            <div class="editor-workspace">
                                <div class="editor-lines-sidebar">
                                    ${lineNumbersHtml}
                                </div>
                                <pre class="editor-code-pane"><code>${formattedCodeHtml}</code></pre>
                            </div>
                            <div class="editor-statusbar">
                                <div class="status-left">
                                    <span><i class="fas fa-code-branch"></i> main*</span>
                                    <span><i class="fas fa-sync"></i> Synchronized</span>
                                </div>
                                <div class="status-right">
                                    <span>Ln 1, Col 1</span>
                                    <span>Spaces: 2</span>
                                    <span>UTF-8</span>
                                    <span>Dart</span>
                                </div>
                            </div>
                        </div>`;
                }

                // Engineering Challenges Solved (Combat Cards Interface)
                if (sec.title.includes("Challenges") && sec.bullets) {
                    const challengeCards = sec.bullets.map(b => {
                        const challengeMatch = b.match(/<strong>Challenge (.*?)<\/strong>:(.*?)<em>Solved by<\/em>(.*)/);
                        
                        if (challengeMatch) {
                            const indexText = challengeMatch[1].trim();
                            const challengeText = challengeMatch[2].trim();
                            const solutionText = challengeMatch[3].trim();
                            
                            return `
                                <div class="challenge-combat-card">
                                    <div class="combat-side challenge-side">
                                        <div class="combat-badge challenge"><i class="fas fa-exclamation-triangle"></i> Challenge ${indexText}</div>
                                        <p>${challengeText}</p>
                                    </div>
                                    <div class="combat-side solution-side">
                                        <div class="combat-badge solution"><i class="fas fa-check-circle"></i> Architectural Triumph</div>
                                        <p>${solutionText}</p>
                                    </div>
                                </div>
                            `;
                        }
                        
                        return `<div class="standard-bullet-card">${b}</div>`;
                    }).join('');
                    
                    bodyHtml = `
                        <p class="section-paragraph">${sec.content}</p>
                        <div class="combat-matrix">
                            ${challengeCards}
                        </div>
                    `;
                }

                return `
                    <section class="premium-case-section">
                        <div class="section-anchor-bar"></div>
                        <h3 class="section-title-premium"><i class="${sec.icon}"></i> ${sec.title}</h3>
                        <div class="section-content-wrapper">
                            ${bodyHtml}
                        </div>
                    </section>`;
            }).join('');

            // Build Tech Stack Grid Block
            if (cs.techStack) {
                sectionsHtml += `
                    <section class="premium-case-section tech-stack-section">
                        <div class="section-anchor-bar"></div>
                        <h3 class="section-title-premium"><i class="fas fa-laptop-code"></i> Engineering Tech Stack Matrix</h3>
                        <div class="tech-matrix-grid">
                            ${cs.techStack.map(ts => `
                                <div class="tech-matrix-tag">
                                    <span class="tech-tag-category">${ts.category}</span>
                                    <span class="tech-tag-name">${ts.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                `;
            }

            // Build mockup screenshot buttons & set the first file as active source directly
            const firstScreenFile = cs.mockup.screens && cs.mockup.screens.length > 0 ? cs.mockup.screens[0].file : 'abdelrahman.webp';
            const screensHtml = cs.mockup.screens.map((screen, idx) => `
                <button class="mockup-btn${idx === 0 ? ' active' : ''}" onclick="portfolioManager.changeScreenshot('${cs.mockup.projectKey}', '${screen.file}', this)">
                    <i class="${screen.icon}"></i> ${screen.label}
                </button>`).join('');

            tab.innerHTML = `
                <div class="markdown-preview">
                    <div class="markdown-header">
                        <span class="markdown-title"><i class="fab fa-markdown"></i> ${cs.fileName} (Preview)</span>
                        <div class="markdown-actions">
                            <button class="markdown-action-btn" onclick="portfolioManager.closeTab('${cs.tabId}')">
                                <i class="fas fa-times"></i> Close
                            </button>
                        </div>
                    </div>
                    <div class="markdown-body">
                        <div class="case-study-hero">
                            <div class="hero-badge"><i class="fas fa-magic"></i> Production-Grade Case Study</div>
                            <h1>${cs.hero.title}</h1>
                            <p class="lead">${cs.hero.lead}</p>
                        </div>
                        <div class="case-study-grid">
                            <div class="case-study-left">
                                ${sectionsHtml}
                            </div>
                            <div class="case-study-right">
                                <div class="mockup-container">
                                    <h4>ًں“± Interactive Application Screens</h4>
                                    <p class="mockup-hint">Click the buttons below the device to swap active screens!</p>
                                    <div class="device-frame">
                                        <div class="device-screen">
                                            <img id="${cs.mockup.projectKey}-screen-img" src="${firstScreenFile}" alt="${cs.hero.title} Screen" class="app-screenshot" style="display: block;">
                                            <div class="device-placeholder-overlay" id="${cs.mockup.projectKey}-placeholder" style="display: none; opacity: 0;">
                                                <div class="overlay-content">
                                                    <i class="fas fa-mobile-alt"></i>
                                                    <span>Select a Screen Below</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="device-home-button"></div>
                                    </div>
                                    <div class="mockup-controls">
                                        ${screensHtml}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

            wrapper.appendChild(tab);
        });
    }

    setupEventListeners() {
        // File explorer navigation
        document.querySelectorAll('.file-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const tabName = item.dataset.tab;
                this.openTab(tabName);
            });
        });

        // Tab close functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-close')) {
                e.stopPropagation();
                const tab = e.target.closest('.tab');
                const tabName = tab.dataset.tab;
                this.closeTab(tabName);
            }
        });

        // Tab switching
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                if (!e.target.classList.contains('tab-close')) {
                    const tabName = tab.dataset.tab;
                    this.switchToTab(tabName);
                }
            });
        });

        // Contact buttons functionality
        this.setupContactButtons();

        // Theme toggle functionality
        this.setupThemeToggle();

        // Mobile responsive behavior
        this.setupMobileNavigation();
        
        // Mobile floating menu
        this.setupMobileFloatingMenu();

        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const tabParam = urlParams.get('tab') || window.location.hash.substring(1);
            if (tabParam) {
                this.switchToTab(tabParam);
            } else {
                this.showWelcomePage();
            }
        });
    }

    setupMobileFloatingMenu() {
        const topMenuBtn = document.getElementById('topMenuBtn');
        const dropdownMenu = document.getElementById('mobileFloatingMenu');
        
        if (!topMenuBtn || !dropdownMenu) return;

        // Toggle menu
        topMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdownMenu.contains(e.target) && !topMenuBtn.contains(e.target)) {
                dropdownMenu.classList.remove('active');
            }
        });
        
        // Handle menu item clicks
        const menuItems = dropdownMenu.querySelectorAll('.floating-menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const tabName = item.dataset.tab;
                if (tabName) {
                    this.openTab(tabName);
                }
                dropdownMenu.classList.remove('active');
            });
        });
    }

    setupContactButtons() {
        console.log('Setting up contact buttons...');

        // Remove inline onclick handlers and add proper event listeners
        document.addEventListener('click', (e) => {
            const button = e.target.closest('.contact-btn');
            if (!button) return;

            // Allow default behavior for download links, anchor tags, or buttons with inline onclick
            if (button.hasAttribute('download') || button.tagName.toLowerCase() === 'a' || button.hasAttribute('onclick')) {
                return;
            }

            console.log('Contact button clicked:', button);

            const isPrimary = button.classList.contains('primary');
            const isSecondary = button.classList.contains('secondary');
            const card = button.closest('.contact-card');

            console.log('Button type:', { isPrimary, isSecondary });

            if (!card) {
                console.error('No contact card found');
                return;
            }

            e.preventDefault();
            e.stopPropagation();

            // Get contact type from the card
            const contactInfo = card.querySelector('.contact-info h3')?.textContent;
            const contactValue = card.querySelector('.contact-info p')?.textContent;

            console.log('Contact info:', { contactInfo, contactValue });

            if (isPrimary) {
                this.handlePrimaryContactAction(contactInfo, contactValue);
            } else if (isSecondary) {
                this.handleSecondaryContactAction(contactInfo, contactValue);
            }
        });

        // Also add direct event listeners to existing buttons
        setTimeout(() => {
            const contactButtons = document.querySelectorAll('.contact-btn');
            console.log('Found contact buttons:', contactButtons.length);

            contactButtons.forEach((button, index) => {
                console.log(`Button ${index}:`, button.textContent.trim());

                button.addEventListener('click', (e) => {
                    console.log('Direct button click:', button);
                    // The event delegation above should handle this, but adding as backup
                });
            });
        }, 1000);
    }

    handlePrimaryContactAction(contactType, contactValue) {
        switch(contactType) {
            case 'Email':
                this.openEmailClient(contactValue);
                break;
            case 'Phone':
                this.makePhoneCall(contactValue);
                break;
            case 'LinkedIn':
                this.openLinkedInProfile();
                break;
            case 'GitHub':
                this.openGitHubProfile();
                break;
            case 'Location':
                this.openLocationMap();
                break;
        }
    }

    handleSecondaryContactAction(contactType, contactValue) {
        // All secondary buttons are copy actions
        switch(contactType) {
            case 'LinkedIn':
                window.copyToClipboard('https://www.linkedin.com/in/abdelrahman-ramadan22/');
                break;
            case 'GitHub':
                window.copyToClipboard('https://github.com/AbdulrahmanRamadan22');
                break;
            case 'Location':
                window.copyToClipboard('Cairo, Egypt');
                break;
            default:
                window.copyToClipboard(contactValue);
        }
    }

    openEmailClient(email) {
        try {
            const mailtoUrl = `mailto:${email}`;
            window.open(mailtoUrl);
            this.showNotification('Opening email client...', 'info');
        } catch (error) {
            this.showNotification('Failed to open email client', 'error');
        }
    }

    makePhoneCall(phoneNumber) {
        try {
            const telUrl = `tel:${phoneNumber.replace(/\s/g, '')}`;
            window.open(telUrl);
            this.showNotification('Initiating call...', 'info');
        } catch (error) {
            this.showNotification('Failed to initiate call', 'error');
        }
    }

    openLinkedInProfile() {
        this.openExternalLink('https://www.linkedin.com/in/abdelrahman-ramadan22/', 'LinkedIn Profile');
    }

    openGitHubProfile() {
        this.openExternalLink('https://github.com/AbdulrahmanRamadan22', 'GitHub Profile');
    }

    openLocationMap() {
        this.openExternalLink('https://maps.google.com/?q=Cairo,Egypt', 'Location Map');
    }

    openExternalLink(url, description = '') {
        try {
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
            if (!newWindow) {
                // Popup blocked
                this.showNotification('Please allow popups to open external links', 'warning');
                // Fallback: try to navigate in same tab
                window.location.href = url;
            } else if (description) {
                this.showNotification(`Opening ${description}...`, 'info');
            }
        } catch (error) {
            this.showNotification('Failed to open link', 'error');
        }
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');

        if (!themeToggle || !themeIcon) return;

        // Load saved theme or default to dark
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.setTheme(savedTheme);

        // Theme toggle click handler
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            // Add switching animation
            themeToggle.classList.add('switching');

            // Change theme after animation starts
            setTimeout(() => {
                this.setTheme(newTheme);
                localStorage.setItem('portfolio-theme', newTheme);
                this.showNotification(`Switched to ${newTheme} theme`, 'success');
            }, 150);

            // Remove animation class
            setTimeout(() => {
                themeToggle.classList.remove('switching');
            }, 600);
        });
    }

    setTheme(theme) {
        const themeIcon = document.getElementById('themeIcon');

        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            if (themeIcon) {
                themeIcon.className = 'fas fa-moon';
                themeIcon.title = 'Switch to Dark Mode';
            }
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeIcon) {
                themeIcon.className = 'fas fa-lightbulb';
                themeIcon.title = 'Switch to Light Mode';
            }
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Number keys for quick navigation
            if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '7') {
                e.preventDefault();
                const shortcuts = {
                    '1': 'overview',
                    '2': 'about',
                    '3': 'experience',
                    '4': 'skills',
                    '5': 'projects',
                    '6': 'education',
                    '7': 'contact'
                };
                this.openTab(shortcuts[e.key]);
            }

            // Ctrl/Cmd + W to close current tab
            if ((e.ctrlKey || e.metaKey) && e.key === 'w') {
                e.preventDefault();
                this.closeTab(this.activeTab);
            }
        });
    }

    initializeActiveStates() {
        this.updateFileExplorerStates();
        this.updateTabBarStates();
        this.updateContentStates();
    }

    openTab(tabName) {
        if (!this.openTabs.includes(tabName)) {
            this.openTabs.push(tabName);
            this.createTabElement(tabName);
        }
        this.switchToTab(tabName);
    }

    closeTab(tabName) {
        const tabIndex = this.openTabs.indexOf(tabName);
        if (tabIndex === -1) return;

        // Remove from open tabs
        this.openTabs.splice(tabIndex, 1);

        // Remove tab element
        const tabElement = document.querySelector(`.tab[data-tab="${tabName}"]`);
        if (tabElement) {
            tabElement.remove();
        }

        // If no tabs left, show welcome page
        if (this.openTabs.length === 0) {
            if (history.pushState) {
                history.pushState(null, null, window.location.pathname);
            }
            this.showWelcomePage();
            return;
        }

        // If closing active tab, switch to another tab
        if (this.activeTab === tabName) {
            const newActiveTab = this.openTabs[Math.max(0, tabIndex - 1)];
            this.switchToTab(newActiveTab);
        }

        this.updateFileExplorerStates();
    }

    createTabElement(tabName) {
        const tabConfig = {
            overview: { icon: 'fas fa-file-alt', label: 'overview.md' },
            about: { icon: 'fas fa-user', label: 'about.md' },
            experience: { icon: 'fas fa-briefcase', label: 'experience.md' },
            skills: { icon: 'fas fa-code', label: 'skills.md' },
            projects: { icon: 'fas fa-folder-open', label: 'projects.md' },
            education: { icon: 'fas fa-graduation-cap', label: 'education.md' },
            contact: { icon: 'fas fa-envelope', label: 'contact.md' },
            'cv-details': { icon: 'far fa-file-pdf', label: 'cv.pdf' }
        };

        // Dynamically add case studies to tabConfig
        if (window.portfolioData && window.portfolioData.caseStudies) {
            window.portfolioData.caseStudies.forEach(cs => {
                tabConfig[cs.tabId] = { icon: 'fab fa-markdown', label: cs.fileName };
            });
        }

        const config = tabConfig[tabName];
        if (!config) return;

        const tabBar = document.querySelector('.tab-bar');
        const tabElement = document.createElement('div');
        tabElement.className = 'tab';
        tabElement.dataset.tab = tabName;

        tabElement.innerHTML = `
            <i class="${config.icon}"></i>
            <span>${config.label}</span>
            <button class="tab-close" aria-label="Close tab">أ—</button>
        `;

        // Add click listener for tab switching
        tabElement.addEventListener('click', (e) => {
            if (!e.target.classList.contains('tab-close')) {
                this.switchToTab(tabName);
            }
        });

        // Make tab draggable
        tabElement.draggable = true;

        // Add click listener for close button
        const closeBtn = tabElement.querySelector('.tab-close');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeTab(tabName);
        });

        tabBar.appendChild(tabElement);
    }

    changeScreenshot(project, imgFilename, button) {
        const imgElement = document.getElementById(`${project}-screen-img`);
        const overlayElement = document.getElementById(`${project}-placeholder`);
        
        if (!imgElement) return;
        
        // Hide the overlay by default
        if (overlayElement) {
            overlayElement.style.opacity = '0';
            overlayElement.style.display = 'none';
        }
        
        // Set source
        imgElement.src = imgFilename;
        imgElement.style.display = 'block';
        
        // Handle loading error (if files don't exist yet, show fallback)
        imgElement.onerror = () => {
            imgElement.style.display = 'none';
            if (overlayElement) {
                overlayElement.style.display = 'flex';
                // Trigger reflow for transition
                overlayElement.offsetHeight;
                overlayElement.style.opacity = '1';
                const span = overlayElement.querySelector('span');
                if (span) span.textContent = `Replace with ${imgFilename}`;
            }
        };
        
        // Update active class on buttons
        const controls = button.parentNode;
        if (controls) {
            controls.querySelectorAll('.mockup-btn').forEach(btn => {
                btn.classList.remove('active');
            });
        }
        button.classList.add('active');
    }

    switchToTab(tabName) {
        if (!this.openTabs.includes(tabName)) {
            this.openTab(tabName);
            return;
        }

        this.activeTab = tabName;
        
        // Deep linking: Update URL when a tab is switched
        if (history.pushState) {
            history.pushState(null, null, '?tab=' + tabName);
        }

        this.updateFileExplorerStates();
        this.updateTabBarStates();
        this.updateContentStates();
        this.showTabContent(tabName);
        this.hideWelcomePage();
    }

    updateFileExplorerStates() {
        document.querySelectorAll('.file-item').forEach(item => {
            const tabName = item.dataset.tab;
            // Only show active if there are open tabs and this is the active tab
            item.classList.toggle('active', this.openTabs.length > 0 && tabName === this.activeTab);
        });
    }

    setupDragAndDrop() {
        // Add drag and drop functionality for tab reordering
        const tabBar = document.querySelector('.tab-bar');
        if (!tabBar) return;

        tabBar.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('tab')) {
                this.draggedTab = e.target;
                e.target.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
            }
        });

        tabBar.addEventListener('dragover', (e) => {
            e.preventDefault();
            const tab = e.target.closest('.tab');
            if (tab && tab !== this.draggedTab) {
                tab.classList.add('drag-over');
            }
        });

        tabBar.addEventListener('dragleave', (e) => {
            const tab = e.target.closest('.tab');
            if (tab) {
                tab.classList.remove('drag-over');
            }
        });

        tabBar.addEventListener('drop', (e) => {
            e.preventDefault();
            const targetTab = e.target.closest('.tab');

            if (targetTab && targetTab !== this.draggedTab) {
                const draggedTabName = this.draggedTab.dataset.tab;
                const targetTabName = targetTab.dataset.tab;

                this.reorderTabs(draggedTabName, targetTabName);
            }

            // Clean up drag classes
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('dragging', 'drag-over');
            });

            this.draggedTab = null;
        });

        tabBar.addEventListener('dragend', () => {
            // Clean up drag classes
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('dragging', 'drag-over');
            });
            this.draggedTab = null;
        });

        // Make tabs draggable
        this.updateTabDraggability();
    }

    updateTabDraggability() {
        document.querySelectorAll('.tab').forEach(tab => {
            tab.draggable = true;
        });
    }

    reorderTabs(draggedTabName, targetTabName) {
        const draggedIndex = this.openTabs.indexOf(draggedTabName);
        const targetIndex = this.openTabs.indexOf(targetTabName);

        if (draggedIndex === -1 || targetIndex === -1) return;

        // Remove dragged tab from array
        const [draggedTab] = this.openTabs.splice(draggedIndex, 1);

        // Insert at new position
        this.openTabs.splice(targetIndex, 0, draggedTab);

        // Rebuild tab bar
        this.rebuildTabBar();
    }

    rebuildTabBar() {
        const tabBar = document.querySelector('.tab-bar');
        if (!tabBar) return;

        // Clear current tabs
        tabBar.innerHTML = '';

        // Recreate tabs in new order
        this.openTabs.forEach(tabName => {
            this.createTabElement(tabName);
        });

        // Update states
        this.updateTabBarStates();
        this.updateTabDraggability();
    }

    updateTabBarStates() {
        document.querySelectorAll('.tab').forEach(tab => {
            const tabName = tab.dataset.tab;
            tab.classList.toggle('active', tabName === this.activeTab);
        });
    }

    updateContentStates() {
        document.querySelectorAll('.tab-content').forEach(content => {
            const tabName = content.id;
            content.classList.toggle('active', tabName === this.activeTab);
        });
    }

    showTabContent(tabName) {
        // Hide all tab contents including welcome
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Show selected tab content
        const targetContent = document.getElementById(tabName);
        if (targetContent) {
            targetContent.classList.add('active');
        }

        // Scroll to top of content
        const editorContent = document.querySelector('.editor-content');
        if (editorContent) {
            editorContent.scrollTop = 0;
        }
    }

    showWelcomePage() {
        this.activeTab = null;

        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Show welcome page
        const welcomePage = document.getElementById('welcome');
        if (welcomePage) {
            welcomePage.classList.add('active');
        }

        // Update states
        this.updateFileExplorerStates();
        this.updateTabBarStates();
    }

    hideWelcomePage() {
        const welcomePage = document.getElementById('welcome');
        if (welcomePage) {
            welcomePage.classList.remove('active');
        }
    }

    setupMobileNavigation() {
        // Handle mobile tab scrolling
        const tabBar = document.querySelector('.tab-bar');
        if (tabBar) {
            // Enable smooth scrolling for tab bar on mobile
            tabBar.style.scrollBehavior = 'smooth';
        }

        // Handle responsive sidebar toggle for mobile
        this.setupMobileSidebar();
    }

    setupMobileSidebar() {
        // Add mobile sidebar toggle functionality if needed
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');

        // Handle mobile file explorer
        if (window.innerWidth <= 991) {
            this.setupMobileFileExplorer();
        }

        // Update on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 991) {
                this.setupMobileFileExplorer();
            }
        });
    }

    setupMobileFileExplorer() {
        const fileList = document.querySelector('.file-list');
        if (fileList) {
            // Ensure horizontal scrolling works properly on mobile
            fileList.style.overflowX = 'auto';
            fileList.style.whiteSpace = 'nowrap';
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 16px',
            borderRadius: '4px',
            color: '#ffffff',
            fontSize: '14px',
            zIndex: '9999',
            opacity: '0',
            transform: 'translateY(-20px)',
            transition: 'all 0.3s ease'
        });

        // Set background color based on type
        const colors = {
            info: 'var(--accent-blue)',
            success: 'var(--success-color)',
            warning: 'var(--warning-color)',
            error: 'var(--error-color)'
        };
        notification.style.backgroundColor = colors[type] || colors.info;

        // Add to DOM
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Contact functionality - Make globally available
window.copyToClipboard = function(text) {
    // Check if clipboard API is available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            // Show success notification
            if (window.portfolioManager) {
                window.portfolioManager.showNotification(`Copied "${text}" to clipboard`, 'success');
            }
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    // Fallback for older browsers or non-secure contexts
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful && window.portfolioManager) {
            window.portfolioManager.showNotification(`Copied "${text}" to clipboard`, 'success');
        } else if (window.portfolioManager) {
            window.portfolioManager.showNotification('Failed to copy to clipboard', 'error');
        }
    } catch (err) {
        if (window.portfolioManager) {
            window.portfolioManager.showNotification('Copy not supported in this browser', 'warning');
        }
    }

    document.body.removeChild(textArea);
}

// Enhanced link opening functionality
function openExternalLink(url, description = '') {
    try {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (!newWindow) {
            // Popup blocked
            if (window.portfolioManager) {
                window.portfolioManager.showNotification('Please allow popups to open external links', 'warning');
            }
            // Fallback: try to navigate in same tab
            window.location.href = url;
        } else if (window.portfolioManager && description) {
            window.portfolioManager.showNotification(`Opening ${description}...`, 'info');
        }
    } catch (error) {
        if (window.portfolioManager) {
            window.portfolioManager.showNotification('Failed to open link', 'error');
        }
    }
}

// Smooth scroll behavior for internal links
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start loading animation
    window.loadingManager = new LoadingManager();

    // Initialize portfolio after loading
    setTimeout(() => {
        window.portfolioManager = new PortfolioManager();

        // Add loading animation
        document.body.classList.add('loaded');

        // Initialize tooltips or other UI enhancements
        initializeUIEnhancements();

        // Add immediate contact button functionality as backup
        initializeContactButtons();
    }, 1000);
});

// Immediate contact button setup
function initializeContactButtons() {
    console.log('Initializing immediate contact buttons...');

    // Wait for content to be fully loaded
    setTimeout(() => {
        const contactButtons = document.querySelectorAll('.contact-btn');
        console.log('Setting up', contactButtons.length, 'contact buttons');

        contactButtons.forEach((button) => {
            // Remove any existing listeners
            button.replaceWith(button.cloneNode(true));
        });

        // Re-query after cloning
        document.querySelectorAll('.contact-btn').forEach((button) => {
            button.addEventListener('click', (e) => {
                // Allow default behavior for download links, anchor tags, or buttons with inline onclick
                if (button.hasAttribute('download') || button.tagName.toLowerCase() === 'a' || button.hasAttribute('onclick')) {
                    console.log('Allowing native behavior for:', button.tagName);
                    return;
                }

                console.log('Button clicked:', button.textContent.trim());

                const card = button.closest('.contact-card');
                if (!card) return;

                e.preventDefault();
                e.stopPropagation();

                const contactType = card.querySelector('.contact-info h3')?.textContent;
                const contactValue = card.querySelector('.contact-info p')?.textContent;
                const isPrimary = button.classList.contains('primary');

                console.log('Contact action:', { contactType, contactValue, isPrimary });

                if (isPrimary) {
                    handlePrimaryAction(contactType, contactValue);
                } else {
                    handleSecondaryAction(contactType, contactValue);
                }
            });
        });
    }, 2000);
}

function handlePrimaryAction(contactType, contactValue) {
    console.log('Primary action:', contactType, contactValue);

    switch(contactType) {
        case 'Email':
            window.open(`mailto:${contactValue}`);
            showQuickNotification('Opening email client...');
            break;
        case 'Phone':
        case 'Phone (Saudi Arabia)':
        case 'Phone (Egypt)':
            window.open(`tel:${contactValue.replace(/\s/g, '')}`);
            showQuickNotification('Initiating call...');
            break;
        case 'LinkedIn':
            window.open('https://www.linkedin.com/in/abdelrahman-ramadan22/', '_blank');
            showQuickNotification('Opening LinkedIn...');
            break;
        case 'GitHub':
            window.open('https://github.com/AbdulrahmanRamadan22', '_blank');
            showQuickNotification('Opening GitHub...');
            break;
        case 'Location':
            window.open('https://maps.google.com/?q=Cairo,Egypt', '_blank');
            showQuickNotification('Opening map...');
            break;
    }
}

function handleSecondaryAction(contactType, contactValue) {
    console.log('Secondary action:', contactType, contactValue);

    let textToCopy = contactValue;

    switch(contactType) {
        case 'LinkedIn':
            textToCopy = 'https://www.linkedin.com/in/abdelrahman-ramadan22/';
            break;
        case 'GitHub':
            textToCopy = 'https://github.com/AbdulrahmanRamadan22';
            break;
        case 'Location':
            textToCopy = 'Cairo, Egypt';
            break;
    }

    // Simple copy to clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            showQuickNotification(`Copied: ${textToCopy}`);
        }).catch(() => {
            fallbackCopy(textToCopy);
        });
    } else {
        fallbackCopy(textToCopy);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showQuickNotification(`Copied: ${text}`);
}

function showQuickNotification(message) {
    console.log('Notification:', message);

    // Create a simple notification
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-blue);
        color: white;
        padding: 12px 16px;
        border-radius: 4px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function initializeUIEnhancements() {
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.file-item, .tab, .contact-btn, .skill-tag, .project-card');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll('button, .file-item, .tab');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--accent-blue)';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Initialize performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Portfolio loaded in ${loadTime}ms`);
        });
    }
}

// Handle browser back/forward navigation
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.tab) {
        if (window.portfolioManager) {
            window.portfolioManager.switchToTab(event.state.tab);
        }
    }
});

// Export for testing or external usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioManager, copyToClipboard, smoothScrollTo };
}
