/**
 * Vermeil & Co. Fine Jewelry & Watches Learning & Skills Academy
 * Ed-Tech Learning Portal Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Data Store & Syllabus Curriculum
    // -------------------------------------------------------------
    const academyLessons = [
        {
            id: 1,
            module: "Module 1",
            title: "Diamond 4Cs & Loupe Inspection Techniques",
            duration: "24:15",
            seconds: 1455,
            instructor: "Dr. Hélène Vance, GG",
            image: "images/j/lobostudiohamburg-ring-66598_1920.jpg",
            category: "Gemology",
            completed: true,
            notes: `
                <h4 class="text-base font-bold text-primary mb-3">Core Learning Objectives:</h4>
                <ul class="list-disc list-inside space-y-2 text-sm text-gray-300">
                    <li>Mastering the 10x achromatic, aplanatic triplet loupe under standardized 5500K daylight illumination.</li>
                    <li>Identifying internal clarity characteristics: pinpoints, feathers, crystals, and bearded girdles.</li>
                    <li>Evaluating proportion symmetry: table percentage (53-58%), crown angle (34-35°), and pavilion depth (40.6-41°).</li>
                    <li>Detecting high-temperature, high-pressure (HPHT) and CVD synthetic diamond diamond growth graining.</li>
                </ul>
                <div class="mt-4 p-4 rounded bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                    Pro-tip: Always clean the diamond facet surfaces with an alcohol lint-free cloth before loupe examination to avoid mistaking dust for VS2 pinpoints.
                </div>
            `,
            transcript: [
                { time: "00:00", text: "Welcome to the Vermeil Academy. Today we begin our hands-on examination of diamond optical evaluation." },
                { time: "03:45", text: "Hold the 10x triplet loupe approximately 1 inch from your dominant eye, keeping both eyes open to minimize eye fatigue." },
                { time: "09:20", text: "When scanning the diamond, begin at the table facet and systematically rotate clockwise through all eight star facets." },
                { time: "16:10", text: "Notice the difference between a natural feather following cleavage planes versus laser drill holes in treated stones." },
                { time: "22:05", text: "In our practical exercise, plot the internal inclusions on the standardized diamond clarity diagram." }
            ]
        },
        {
            id: 2,
            module: "Module 2",
            title: "Swiss Lever Escapement & Balance Wheel Dynamics",
            duration: "28:50",
            seconds: 1730,
            instructor: "Philippe Laurent, Master Horologist",
            image: "images/j/stocksnap-pocket-watch-2569573_1920.jpg",
            category: "Horology",
            completed: false,
            notes: `
                <h4 class="text-base font-bold text-primary mb-3">Core Learning Objectives:</h4>
                <ul class="list-disc list-inside space-y-2 text-sm text-gray-300">
                    <li>The geometry of the Swiss lever: pallet arbor, entry pallet jewel, exit pallet jewel, and guard pin.</li>
                    <li>Impulse pin alignment within the fork notch during dead-center equilibrium.</li>
                    <li>Evaluating lock, total drop, and slide tolerances using high-magnification stereomicroscopy.</li>
                    <li>Lubrication protocol: applying microscopic quantities of Moebius 9415 synthetic grease to escape wheel impulse faces.</li>
                </ul>
                <div class="mt-4 p-4 rounded bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                    Critical warning: Never apply oil to the pallet jewel locking face or pallet arbor pivots. Escapement oils must remain strictly on the impulse plane.
                </div>
            `,
            transcript: [
                { time: "00:00", text: "In this lecture, we examine the heart of the mechanical watch movement: the Swiss lever escapement." },
                { time: "05:15", text: "Observe the impulse face of the escape wheel tooth as it transfers potential energy into kinetic balance oscillation." },
                { time: "11:40", text: "We measure draw angle — typically 12 to 15 degrees — ensuring the lever remains securely locked against banking pins." },
                { time: "18:25", text: "Using an electronic timing machine, we listen to the three distinct sounds of the horological beat cycle." },
                { time: "26:30", text: "Fine-tuning beat error below 0.2ms by delicately adjusting the mobile stud carrier on the balance cock." }
            ]
        },
        {
            id: 3,
            module: "Module 3",
            title: "Micro-Pavé Diamond Setting & Optical Bench Microscopes",
            duration: "31:10",
            seconds: 1870,
            instructor: "Marco Bellini, Master Stone Setter",
            image: "images/jewelry-craft.jpg",
            category: "Artisanal Craft",
            completed: false,
            notes: `
                <h4 class="text-base font-bold text-primary mb-3">Core Learning Objectives:</h4>
                <ul class="list-disc list-inside space-y-2 text-sm text-gray-300">
                    <li>Preparation of micro-bead gravers using Arkansas oilstones and ceramic polishing laps.</li>
                    <li>Drilling seat pilot holes with heart burs and ball burs matched to stone girdle diameter (±0.02mm).</li>
                    <li>Raising bright-cut beads under 35x stereo zoom microscopes with pneumatic handpieces.</li>
                    <li>Shared-prong versus micro-pavé castle setting techniques for maximum brilliance with minimum metal interference.</li>
                </ul>
                <div class="mt-4 p-4 rounded bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                    Atelier standard: Every raised bead must be burnished with an oiled beading tool to a mirror sphere that locks the girdle securely.
                </div>
            `,
            transcript: [
                { time: "00:00", text: "Welcome to the high-jewelry setting atelier. Micro-pavé requires absolute hand stabilization and optical precision." },
                { time: "07:30", text: "We hold our graver at a 45-degree angle to lift the gold grain without compromising structural wall thickness." },
                { time: "14:15", text: "Placing 1.0mm melee diamonds: ensure all table facets remain on a perfectly uniform spherical plane." },
                { time: "23:40", text: "Notice the bright-cutting pass along the outer border that frames the pavé field with mirror-like reflection." }
            ]
        },
        {
            id: 4,
            module: "Module 4",
            title: "18K Gold Metallurgy, Alloys & Porosity Mitigation",
            duration: "22:40",
            seconds: 1360,
            instructor: "Claire Fontaine, Senior Metallurgist",
            image: "images/j/hans-chain-2119611_1920.jpg",
            category: "Metallurgy",
            completed: false,
            notes: `
                <h4 class="text-base font-bold text-primary mb-3">Core Learning Objectives:</h4>
                <ul class="list-disc list-inside space-y-2 text-sm text-gray-300">
                    <li>The ternary phase diagram of Au-Ag-Cu alloys in 750‰ fine gold formulations.</li>
                    <li>Achieving Vermeil Royal Rose Gold: balancing 75% pure gold, 21% copper, and 4% fine silver.</li>
                    <li>Investment casting thermal curves, inert gas overpressure, and eliminating dendritic shrink porosity.</li>
                    <li>Work hardening, annealing temperatures, and recrystallization quenching protocols.</li>
                </ul>
            `,
            transcript: [
                { time: "00:00", text: "Today we demystify the metallurgy of precious metals used across haute joaillerie." },
                { time: "06:10", text: "Why 18K white gold requires palladium or rhodium electro-deposition to achieve cold optical brilliance." },
                { time: "15:45", text: "Analyzing sprue placement to avoid turbulence during centrifugal and vacuum-assisted gold casting." }
            ]
        },
        {
            id: 5,
            module: "Module 5",
            title: "Tourbillon Regulating Organ Calibration & Timing Diagnostics",
            duration: "35:15",
            seconds: 2115,
            instructor: "Philippe Laurent, Master Horologist",
            image: "images/j/stocksnap-pocket-watch-2569573_1920.jpg",
            category: "Horology",
            completed: false,
            notes: `
                <h4 class="text-base font-bold text-primary mb-3">Core Learning Objectives:</h4>
                <ul class="list-disc list-inside space-y-2 text-sm text-gray-300">
                    <li>The mechanics of Abraham-Louis Breguet's tourbillon cage revolving once every 60 seconds.</li>
                    <li>Counteracting gravitational positional error in vertical positions (Crown Up, Crown Down, Crown Left, Crown Right).</li>
                    <li>Dynamic poising of titanium and beryllium-copper balance wheels with variable inertia micro-screws.</li>
                    <li>Interpreting Witschi Chronoscope acoustic timing traces and amplitude drop across 24-hour reserve states.</li>
                </ul>
            `,
            transcript: [
                { time: "00:00", text: "The tourbillon remains the pinnacle demonstration of high watchmaking mastery." },
                { time: "08:20", text: "Examining the carriage weight: under 0.3 grams for over 70 individual microscopic titanium components." },
                { time: "20:50", text: "Poising the balance dynamically on ruby knives before mounting inside the revolving cage." }
            ]
        }
    ];

    let currentLessonIndex = 1; // Default to Module 2
    let isPlaying = false;
    let playbackSpeed = 1.0;
    let currentSeconds = 420; // 07:00 in
    let playInterval = null;

    // -------------------------------------------------------------
    // 2. Video Player DOM Elements & Handlers
    // -------------------------------------------------------------
    const videoPlaceholder = document.getElementById('lesson-video-frame');
    const playBtn = document.getElementById('player-play-btn');
    const playIcon = document.getElementById('player-play-icon');
    const playPauseOverlay = document.getElementById('player-overlay-btn');
    const timeDisplay = document.getElementById('player-time-display');
    const progressBar = document.getElementById('player-progress-bar');
    const progressTrack = document.getElementById('player-progress-track');
    const speedSelect = document.getElementById('player-speed-select');
    const completeLessonBtn = document.getElementById('complete-lesson-btn');
    const currentLessonTitle = document.getElementById('current-lesson-title');
    const currentLessonModule = document.getElementById('current-lesson-module');
    const currentLessonCategory = document.getElementById('current-lesson-category');
    const currentLessonInstructor = document.getElementById('current-lesson-instructor');
    const currentLessonImage = document.getElementById('player-video-poster');

    // Tabs
    const tabBtns = document.querySelectorAll('.lesson-tab-btn');
    const tabPanels = document.querySelectorAll('.lesson-tab-panel');

    // Playlist
    const playlistContainer = document.getElementById('syllabus-playlist');

    // Format Seconds to MM:SS
    function formatTime(sec) {
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    // Load Lesson into Player
    function loadLesson(index) {
        currentLessonIndex = index;
        const lesson = academyLessons[index];
        if (!lesson) return;

        currentLessonTitle.innerText = lesson.title;
        currentLessonModule.innerText = lesson.module;
        currentLessonCategory.innerText = lesson.category;
        currentLessonInstructor.innerText = `Instructor: ${lesson.instructor}`;
        if (currentLessonImage) {
            currentLessonImage.src = lesson.image;
        }

        currentSeconds = lesson.completed ? lesson.seconds : 240;
        updateTimeUI();

        // Update Notes
        const notesContainer = document.getElementById('tab-panel-notes');
        if (notesContainer) {
            notesContainer.innerHTML = lesson.notes;
        }

        // Update Transcript
        const transcriptContainer = document.getElementById('tab-panel-transcript');
        if (transcriptContainer) {
            transcriptContainer.innerHTML = lesson.transcript.map(item => `
                <div class="flex items-start gap-4 p-3 rounded hover:bg-white/5 transition-colors cursor-pointer group transcript-item" data-time="${item.time}">
                    <span class="px-2 py-0.5 rounded bg-primary/20 text-primary text-xs font-mono font-bold group-hover:bg-primary group-hover:text-secondary transition-colors">${item.time}</span>
                    <p class="text-sm text-gray-300 leading-relaxed">${item.text}</p>
                </div>
            `).join('');

            // Add click listeners to jump in video
            transcriptContainer.querySelectorAll('.transcript-item').forEach(el => {
                el.addEventListener('click', () => {
                    const timeStr = el.getAttribute('data-time');
                    const [min, sec] = timeStr.split(':').map(Number);
                    currentSeconds = (min * 60) + sec;
                    updateTimeUI();
                    if (!isPlaying) togglePlay();
                    showAcademyToast(`Jumped to ${timeStr}`);
                });
            });
        }

        // Render Playlist active state
        renderPlaylist();

        // Update Complete button label
        if (completeLessonBtn) {
            if (lesson.completed) {
                completeLessonBtn.innerHTML = `
                    <svg class="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Lesson Completed</span>
                `;
                completeLessonBtn.classList.remove('bg-primary', 'hover:bg-primary/80', 'text-secondary');
                completeLessonBtn.classList.add('bg-white/10', 'text-green-400', 'border', 'border-green-400/30');
            } else {
                completeLessonBtn.innerHTML = `
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Mark Lesson Complete</span>
                `;
                completeLessonBtn.classList.add('bg-primary', 'hover:bg-primary/80', 'text-secondary');
                completeLessonBtn.classList.remove('bg-white/10', 'text-green-400', 'border', 'border-green-400/30');
            }
        }
    }

    function updateTimeUI() {
        const lesson = academyLessons[currentLessonIndex];
        const pct = Math.min(100, (currentSeconds / lesson.seconds) * 100);
        if (progressBar) progressBar.style.width = `${pct}%`;
        if (timeDisplay) timeDisplay.innerText = `${formatTime(currentSeconds)} / ${lesson.duration}`;
    }

    function togglePlay() {
        isPlaying = !isPlaying;
        if (isPlaying) {
            if (playIcon) {
                playIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />`;
            }
            if (playPauseOverlay) playPauseOverlay.classList.add('opacity-0', 'pointer-events-none');
            const posterPulse = document.getElementById('player-pulse-badge');
            if (posterPulse) posterPulse.innerText = 'PLAYING AT 1080P PRO';

            playInterval = setInterval(() => {
                const lesson = academyLessons[currentLessonIndex];
                currentSeconds += 1 * playbackSpeed;
                if (currentSeconds >= lesson.seconds) {
                    currentSeconds = lesson.seconds;
                    togglePlay();
                    markCurrentLessonComplete();
                }
                updateTimeUI();
            }, 1000);
        } else {
            if (playIcon) {
                playIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`;
            }
            if (playPauseOverlay) playPauseOverlay.classList.remove('opacity-0', 'pointer-events-none');
            const posterPulse = document.getElementById('player-pulse-badge');
            if (posterPulse) posterPulse.innerText = 'PAUSED - CLICK TO RESUME';
            clearInterval(playInterval);
        }
    }

    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (playPauseOverlay) playPauseOverlay.addEventListener('click', togglePlay);

    if (progressTrack) {
        progressTrack.addEventListener('click', (e) => {
            const rect = progressTrack.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            const lesson = academyLessons[currentLessonIndex];
            currentSeconds = Math.max(0, Math.min(lesson.seconds, Math.floor(pos * lesson.seconds)));
            updateTimeUI();
        });
    }

    if (speedSelect) {
        speedSelect.addEventListener('change', (e) => {
            playbackSpeed = parseFloat(e.target.value);
            showAcademyToast(`Playback Speed: ${playbackSpeed}x`);
        });
    }

    function markCurrentLessonComplete() {
        academyLessons[currentLessonIndex].completed = true;
        loadLesson(currentLessonIndex);
        updateStudentAnalytics();
        showAcademyToast(`Mastery Recorded: ${academyLessons[currentLessonIndex].title} Completed! +150 XP`);
    }

    if (completeLessonBtn) {
        completeLessonBtn.addEventListener('click', () => {
            markCurrentLessonComplete();
        });
    }

    // Tabs Switcher
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');
            tabBtns.forEach(b => {
                b.classList.remove('active', 'text-primary', 'border-b-2', 'border-primary');
                b.classList.add('text-gray-400');
            });
            btn.classList.add('active', 'text-primary', 'border-b-2', 'border-primary');
            btn.classList.remove('text-gray-400');

            tabPanels.forEach(panel => {
                if (panel.id === `tab-panel-${target}`) {
                    panel.classList.remove('hidden');
                } else {
                    panel.classList.add('hidden');
                }
            });
        });
    });

    // Render Syllabus Playlist
    function renderPlaylist() {
        if (!playlistContainer) return;
        playlistContainer.innerHTML = academyLessons.map((item, idx) => {
            const isActive = idx === currentLessonIndex;
            return `
                <div class="playlist-item p-4 rounded border transition-all cursor-pointer flex items-center justify-between group ${
                    isActive 
                        ? 'bg-primary/10 border-primary text-white' 
                        : 'bg-white/5 border-white/5 hover:border-primary/40 text-gray-300'
                }" data-index="${idx}">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            item.completed 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/40' 
                                : isActive 
                                    ? 'bg-primary text-secondary' 
                                    : 'bg-white/10 text-gray-400'
                        }">
                            ${item.completed ? '✓' : idx + 1}
                        </div>
                        <div>
                            <span class="text-[10px] uppercase font-bold tracking-widest text-primary block">${item.module} • ${item.category}</span>
                            <h5 class="text-xs font-semibold group-hover:text-primary transition-colors line-clamp-1">${item.title}</h5>
                        </div>
                    </div>
                    <div class="text-right flex flex-col items-end">
                        <span class="text-[10px] text-gray-400 font-mono">${item.duration}</span>
                        ${isActive ? '<span class="text-[9px] uppercase tracking-wider text-primary font-bold animate-pulse mt-0.5">Playing</span>' : ''}
                    </div>
                </div>
            `;
        }).join('');

        playlistContainer.querySelectorAll('.playlist-item').forEach(el => {
            el.addEventListener('click', () => {
                const idx = parseInt(el.getAttribute('data-index'), 10);
                loadLesson(idx);
            });
        });
    }

    // -------------------------------------------------------------
    // 3. Student Progress Analytics Engine
    // -------------------------------------------------------------
    function updateStudentAnalytics() {
        const total = academyLessons.length;
        const completed = academyLessons.filter(l => l.completed).length;
        const pct = Math.round((completed / total) * 100);

        const circleProgress = document.getElementById('analytics-progress-pct');
        const circleBar = document.getElementById('analytics-circle-svg');
        const modulesCount = document.getElementById('analytics-modules-count');
        const xpCount = document.getElementById('analytics-xp-count');
        const certBadge = document.getElementById('certificate-status-pill');

        if (circleProgress) circleProgress.innerText = `${pct}%`;
        if (modulesCount) modulesCount.innerText = `${completed} / ${total} Modules`;
        if (xpCount) xpCount.innerText = `${completed * 350 + 450} XP`;

        if (circleBar) {
            // Circumference of radius 54 is ~339.29
            const offset = 339.29 - (339.29 * pct) / 100;
            circleBar.style.strokeDashoffset = offset;
        }

        if (certBadge) {
            if (pct >= 80) {
                certBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-green-400 animate-ping mr-2"></span>Eligible for Master Diploma`;
                certBadge.className = "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-green-500/20 text-green-400 border border-green-500/40 inline-flex items-center";
            }
        }
    }

    // -------------------------------------------------------------
    // 4. Interactive Certification Quiz Engine
    // -------------------------------------------------------------
    const quizQuestions = [
        {
            q: "1. Under 10x standardized daylight gemological inspection, which inclusion type presents the highest risk of structural cleavage during prong setting?",
            options: [
                "Microscopic pinpoints scattered along the pavilion",
                "Internal feathers that intersect the diamond's surface or girdle edge",
                "Faint growth graining visible only under polarized lighting",
                "Trigon growth marks on natural unpolished crystal surfaces"
            ],
            correct: 1,
            explanation: "Feathers that reach the girdle edge or surface follow diamond octahedral cleavage planes and are susceptible to extending under mechanical setting pressure."
        },
        {
            q: "2. In high-grade Swiss mechanical horology, what is the primary role of the Incabloc shock absorption system?",
            options: [
                "Regulates the spring tension of the mainspring barrel",
                "Allows the balance staff cone pivots to shift slightly against spring-loaded jewel bearings during violent impact",
                "Adjusts the isobaric rate variations between high and low temperatures",
                "Prevents magnetism from affecting the Breguet overcoil hairspring"
            ],
            correct: 1,
            explanation: "The Incabloc mechanism uses spring-loaded lyre-shaped springs to cushion the extremely delicate (0.07mm) balance staff pivots against mechanical shock."
        },
        {
            q: "3. Vermeil & Co. 18K Royal Rose Gold achieves its signature deep warm luster using which metallurgical alloy proportion?",
            options: [
                "50% Gold, 40% Nickel, 10% Zinc",
                "75% Fine Pure Gold, 21% Pure Copper, 4% Fine Silver",
                "75% Gold, 25% Pure Aluminum",
                "91.6% Pure Gold, 8.4% Cobalt"
            ],
            correct: 1,
            explanation: "18K Gold is legally 750/1000 fine gold. The rich pinkish-red hue is created by alloy balance of 21% copper and 4% silver, avoiding porosity."
        },
        {
            q: "4. What optical bench instrument measures the critical angle of total internal reflection to conclusively distinguish natural ruby from red spinel?",
            options: [
                "Optical Refractometer with Sodium 589nm D-line Filter",
                "Calibrated Magnetic Field Micro-Gaussmeter",
                "Ultrasonic Bath Frequency Probe",
                "Electronic Diamond Thermal Conductivity Tester"
            ],
            correct: 0,
            explanation: "A gemological refractometer reads refractive index (Ruby = 1.762-1.770 with 0.008 birefringence; Spinel = 1.718 isotropic singly refractive)."
        },
        {
            q: "5. When regulating a mechanical watch movement, shifting the curb pins along the terminal hairspring curve directly alters what parameter?",
            options: [
                "The active vibrating length of the balance spring, altering its daily rate (seconds fast/slow)",
                "The amplitude of the mainspring barrel teeth",
                "The rotational direction of the automatic winding oscillating weight",
                "The power reserve autonomy from 48 to 72 hours"
            ],
            correct: 0,
            explanation: "Shortening the active spring length makes the balance oscillate faster, while lengthening it slows down the beat rate."
        }
    ];

    const quizContainer = document.getElementById('quiz-questions-form');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const quizResultsCard = document.getElementById('quiz-results-card');
    const quizScoreText = document.getElementById('quiz-score-text');
    const quizFeedbackMsg = document.getElementById('quiz-feedback-msg');
    const claimCertBtn = document.getElementById('claim-certificate-btn');

    function renderQuiz() {
        if (!quizContainer) return;
        quizContainer.innerHTML = quizQuestions.map((item, qIdx) => `
            <div class="mb-8 p-6 rounded-lg bg-white/5 border border-white/5 transition-all hover:border-white/10" id="quiz-question-box-${qIdx}">
                <p class="font-bold text-white text-base mb-4 leading-snug">${item.q}</p>
                <div class="space-y-3">
                    ${item.options.map((opt, optIdx) => `
                        <label class="flex items-center gap-3 p-3 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border border-transparent hover:border-primary/20">
                            <input type="radio" name="question-${qIdx}" value="${optIdx}" class="text-primary focus:ring-primary h-4 w-4">
                            <span class="text-sm text-gray-300">${opt}</span>
                        </label>
                    `).join('')}
                </div>
                <div class="mt-4 hidden quiz-explanation text-xs p-3 rounded border"></div>
            </div>
        `).join('');
    }

    if (submitQuizBtn) {
        submitQuizBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let score = 0;
            let answered = 0;

            quizQuestions.forEach((item, qIdx) => {
                const selected = document.querySelector(`input[name="question-${qIdx}"]:checked`);
                const box = document.getElementById(`quiz-question-box-${qIdx}`);
                const expBox = box.querySelector('.quiz-explanation');

                if (selected) {
                    answered++;
                    const chosenVal = parseInt(selected.value, 10);
                    if (chosenVal === item.correct) {
                        score++;
                        box.classList.add('border-green-500/40', 'bg-green-500/5');
                        box.classList.remove('border-red-500/40', 'bg-red-500/5');
                        expBox.className = "mt-4 quiz-explanation text-xs p-3 rounded border border-green-500/30 bg-green-500/10 text-green-300 block";
                        expBox.innerHTML = `<strong>Correct!</strong> ${item.explanation}`;
                    } else {
                        box.classList.add('border-red-500/40', 'bg-red-500/5');
                        box.classList.remove('border-green-500/40', 'bg-green-500/5');
                        expBox.className = "mt-4 quiz-explanation text-xs p-3 rounded border border-red-500/30 bg-red-500/10 text-red-300 block";
                        expBox.innerHTML = `<strong>Incorrect.</strong> ${item.explanation}`;
                    }
                } else {
                    expBox.className = "mt-4 quiz-explanation text-xs p-3 rounded border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 block";
                    expBox.innerHTML = `<strong>Not answered.</strong> Correct answer: ${item.options[item.correct]}.`;
                }
            });

            if (answered < quizQuestions.length) {
                if (!confirm(`You have answered ${answered} of ${quizQuestions.length} questions. Submit anyway?`)) {
                    return;
                }
            }

            const pctScore = Math.round((score / quizQuestions.length) * 100);
            if (quizResultsCard) quizResultsCard.classList.remove('hidden');
            if (quizScoreText) quizScoreText.innerText = `${score} / ${quizQuestions.length} (${pctScore}%)`;

            if (pctScore >= 80) {
                quizFeedbackMsg.innerText = "Congratulations! You have demonstrated exceptional mastery in Haute Horlogerie & Gemological Sciences. Your Official Certificate of Completion is now unlocked!";
                if (claimCertBtn) claimCertBtn.classList.remove('hidden');
                showAcademyToast("Exam Passed with Honors! Official Certificate Unlocked.");
            } else {
                quizFeedbackMsg.innerText = "You achieved " + pctScore + "%. A minimum passing score of 80% is required to claim the Master Gemologist & Horologist Diploma. Review the question explanations above and retake the exam.";
                if (claimCertBtn) claimCertBtn.classList.add('hidden');
                showAcademyToast("Score: " + pctScore + "%. Review the lesson notes to improve.");
            }

            // Scroll to results
            if (quizResultsCard) {
                quizResultsCard.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // -------------------------------------------------------------
    // 5. Official Certificate Generator Modal
    // -------------------------------------------------------------
    const certModal = document.getElementById('certificate-modal');
    const closeCertBtn = document.getElementById('close-cert-modal');
    const printCertBtn = document.getElementById('print-certificate-btn');
    const certRecipientInput = document.getElementById('cert-student-name');
    const certDisplayName = document.getElementById('cert-display-name');
    const certIssueDate = document.getElementById('cert-issue-date');

    if (claimCertBtn && certModal) {
        claimCertBtn.addEventListener('click', () => {
            if (certIssueDate) {
                const today = new Date();
                certIssueDate.innerText = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
            }
            certModal.classList.remove('hidden');
            certModal.classList.add('flex');
        });
    }

    if (closeCertBtn && certModal) {
        closeCertBtn.addEventListener('click', () => {
            certModal.classList.add('hidden');
            certModal.classList.remove('flex');
        });
    }

    if (certRecipientInput && certDisplayName) {
        certRecipientInput.addEventListener('input', (e) => {
            certDisplayName.innerText = e.target.value || "Julien De Vere";
        });
    }

    if (printCertBtn) {
        printCertBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // -------------------------------------------------------------
    // 6. Downloadable Resource Vault Engine
    // -------------------------------------------------------------
    const resourceFiles = {
        "diamond-grading-chart": {
            filename: "Vermeil_4Cs_Diamond_Grading_Reference_Manual.txt",
            title: "VERMEIL & CO. - 4Cs DIAMOND GRADING & CLARITY MASTER REFERENCE",
            content: `================================================================================
VERMEIL & CO. HAUTE JOAILLERIE & WATCHES ACADEMY
REFERENCE PROTOCOL: 4CS GEMOLOGICAL EVALUATION & INCLUSION PLOTTING MANUAL
================================================================================

1. CLARITY SCALE (GIA STANDARDIZED 10X MAGNIFICATION)
--------------------------------------------------------------------------------
- FL (Flawless): No internal inclusions or surface blemishes visible under 10x.
- IF (Internally Flawless): No internal inclusions; minor surface polish marks only.
- VVS1 / VVS2 (Very Very Slightly Included): Inclusions so slight that a skilled
  grader finds them difficult (VVS1) or somewhat easy (VVS2) to locate under 10x.
- VS1 / VS2 (Very Slightly Included): Minor inclusions (crystals, feathers, clouds)
  difficult (VS1) to somewhat easy (VS2) to locate.
- SI1 / SI2 (Slightly Included): Noticeable inclusions easy (SI1) or very easy (SI2)
  to locate under 10x magnification.
- I1 / I2 / I3 (Included): Inclusions obvious under 10x and often eye-visible.

2. CUT PROPORTIONS & LIGHT RETURN (IDEAL TOLERANCES)
--------------------------------------------------------------------------------
- Table Percentage: 54.0% - 57.0%
- Crown Angle: 34.0° - 35.0° (optimal fire dispersion)
- Pavilion Angle: 40.6° - 41.0° (critical angle total internal reflection)
- Star Facet Length: 50% - 55%
- Girdle Thickness: Medium to Slightly Thick, faceted
- Culet: None (pointed)

3. LOUPE BENCHWORK INSPECTION PROTOCOL
--------------------------------------------------------------------------------
- Standardized 5500K daylight-balanced illumination.
- Aplanatic, achromatic 10x triplet loupe clean of oil residues.
- Clean diamond with denatured alcohol and lint-free microfiber cloth.
- Hold stone in self-locking locking gemological tweezers at the girdle edges.
`
        },
        "escapement-blueprint": {
            filename: "Swiss_Lever_Escapement_Calibration_Blueprint.txt",
            title: "VERMEIL ACADEMY - SWISS LEVER ESCAPEMENT & LUBRICATION SPECIFICATION",
            content: `================================================================================
VERMEIL & CO. FINE WATCHMAKING ACADEMY
TECHNICAL BULLETIN: SWISS LEVER ESCAPEMENT CALIBRATION & LUBRICATION PROTOCOL
================================================================================

CALIBRE SPECIFICATION: 28,800 VIBRATIONS PER HOUR (4HZ)
ISOBARIC POWER AUTONOMY: 72 HOURS TWIN BARREL

1. ESCAPEMENT GEOMETRY CHECKLIST
--------------------------------------------------------------------------------
A. Locking Depth (Penetration):
   - Measure 1/5 to 1/4 of total impulse face width of escape tooth resting on
     pallet jewel locking corner.
B. Total Drop:
   - Verify equal entry drop and exit drop clearances (approx. 1.5° - 2.0°).
C. Draw:
   - Ensure 12° to 15° draw angle draws lever firmly against banking pins during
     supplementary arc of oscillation.
D. Guard Pin Clearance:
   - Safety guard pin must clear safety roller passing hollow with zero friction.

2. HOROLOGICAL LUBRICATION MATRIX
--------------------------------------------------------------------------------
- Pallet Jewel Impulse Faces: Moebius 9415 (micro-drop applied to 3 escape teeth).
- Pallet Arbor Pivots: DRY (NO OIL TO PREVENT VISCOUS DRAG).
- Balance Wheel Cap Jewels: Moebius 9010 (droplet occupying 2/3 of cap diameter).
- Escape Wheel Pivots: Moebius 9010.
- Mainspring Barrel Wall: Kluber P125 / Moebius 8200.
`
        },
        "metallurgy-matrix": {
            filename: "Precious_Metals_Assay_18K_Metallurgy_Guide.txt",
            title: "VERMEIL & CO. - 18K GOLD & PLATINUM ALLOY STANDARDS",
            content: `================================================================================
VERMEIL & CO. METALLURGICAL ATELIER SPECIFICATION
HALLMARKING & ALLOY FORMULATION FOR HAUTE JOAILLERIE
================================================================================

1. GOLD KARATAGE & FINENESS CONVERSIONS
--------------------------------------------------------------------------------
- 24 Karat = 999.9‰ Fine Gold (Pure, soft, non-structural)
- 18 Karat = 750.0‰ Fine Gold (Haute Joaillerie European standard)
- 14 Karat = 585.0‰ Fine Gold (Commercial standard)

2. VERMEIL ATELIER PROPRIETARY 18K BLENDS
--------------------------------------------------------------------------------
A. 18K Royal Rose Gold (Au750 / Cu210 / Ag40):
   - 75.0% Fine Gold (999.9)
   - 21.0% Electrolytic Pure Copper
   - 4.0% Fine Silver
   - Melting Interval: 890°C - 910°C
   - Hardness (Annealed): 150 HV / (Work Hardened): 220 HV

B. 18K Royal White Gold (Au750 / Pd150 / Ag100):
   - 75.0% Fine Gold
   - 15.0% Pure Palladium (Hypoallergenic, nickel-free)
   - 10.0% Fine Silver
   - Naturally bright white, does not require repetitive rhodium re-plating.
`
        },
        "gem-refractive-index": {
            filename: "Gemstone_Refractive_Index_Birefringence_Chart.txt",
            title: "VERMEIL ACADEMY - OPTICAL GEMSTONE IDENTIFICATION MATRIX",
            content: `================================================================================
VERMEIL ACADEMY OF GEMOLOGICAL SCIENCES
REFRACTIVE INDEX & SPECIFIC GRAVITY REFERENCE COMPENDIUM
================================================================================

GEMSTONE        | REFRACTIVE INDEX (RI) | OPTIC CHARACTER | SPECIFIC GRAVITY
----------------+-----------------------+-----------------+-----------------
Diamond         | 2.417                 | Isotropic (SR)  | 3.52
Corundum (Ruby) | 1.762 - 1.770         | Uniaxial Neg    | 4.00
Sapphire        | 1.762 - 1.770         | Uniaxial Neg    | 4.00
Spinel          | 1.718                 | Isotropic (SR)  | 3.60
Emerald (Beryl) | 1.577 - 1.583         | Uniaxial Neg    | 2.72
Alexandrite     | 1.746 - 1.755         | Biaxial Pos     | 3.73
Tanzanite       | 1.691 - 1.700         | Biaxial Pos     | 3.35
Tourmaline      | 1.624 - 1.644         | Uniaxial Neg    | 3.06
Almandine Garnet| 1.760 - 1.830         | Isotropic (SR)  | 4.05
Quartz (Ameth.) | 1.544 - 1.553         | Uniaxial Pos    | 2.65
`
        }
    };

    const downloadButtons = document.querySelectorAll('.download-resource-btn');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const resKey = btn.getAttribute('data-resource');
            const data = resourceFiles[resKey] || {
                filename: "Vermeil_Academy_Study_Guide.txt",
                title: "VERMEIL ACADEMY STUDY RESOURCE",
                content: "Official Study Material from Vermeil & Co. Fine Jewelry & Watches Academy."
            };

            const blob = new Blob([data.content], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = data.filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            showAcademyToast(`Downloaded: ${data.filename}`);
        });
    });

    // -------------------------------------------------------------
    // 7. Instructor Manager & Atelier Mentorship Engine
    // -------------------------------------------------------------
    const instructorsList = [
        {
            id: 1,
            name: "Philippe Laurent",
            title: "Master Horologist & Complications Specialist",
            credentials: "Geneva Watchmaking School (EHR), 28 Years Benchwork",
            specialty: "Tourbillons, Minute Repeaters & Escapements",
            image: "images/j/stocksnap-pocket-watch-2569573_1920.jpg",
            hours: "Mon & Thu • 14:00 - 18:00 CET",
            rating: "4.98 / 5.0 (142 reviews)"
        },
        {
            id: 2,
            name: "Dr. Hélène Vance, GG, FGA",
            title: "Head of Gemological Sciences & Diamond Grading",
            credentials: "GIA Graduate Gemologist, Fellow Gemmological Assoc.",
            specialty: "Spectroscopy, 4Cs Diamond Plotting & Provenance",
            image: "images/j/hans-opal-4765457_1920.jpg",
            hours: "Tue & Fri • 10:00 - 15:00 CET",
            rating: "5.0 / 5.0 (218 reviews)"
        },
        {
            id: 3,
            name: "Marco Bellini",
            title: "Haute Joaillerie Master Stone Setter",
            credentials: "Valenza Jewelry Institute Master, 19 Years",
            specialty: "Optical Micro-Pavé, Castle & Invisible Setting",
            image: "images/jewelry-craft.jpg",
            hours: "Wed & Sat • 13:00 - 17:00 CET",
            rating: "4.95 / 5.0 (98 reviews)"
        },
        {
            id: 4,
            name: "Claire Fontaine",
            title: "Senior Metallurgist & Period Appraiser",
            credentials: "Sorbonne Metallurgy & Antique Hallmarking Diploma",
            specialty: "Precious Metal Alloys, Assay & Historical Provenance",
            image: "images/j/hans-chain-2119611_1920.jpg",
            hours: "Mon & Wed • 09:00 - 13:00 CET",
            rating: "4.92 / 5.0 (76 reviews)"
        }
    ];

    const instructorGrid = document.getElementById('instructors-grid');
    const bookModal = document.getElementById('book-office-hours-modal');
    const closeBookModal = document.getElementById('close-book-modal');
    const bookForm = document.getElementById('book-mentor-form');
    const bookInstructorName = document.getElementById('book-instructor-target-name');

    // Instructor Admin Manager Modal
    const adminModal = document.getElementById('instructor-admin-modal');
    const openAdminModalBtn = document.getElementById('open-instructor-admin-btn');
    const closeAdminModalBtn = document.getElementById('close-instructor-admin-modal');
    const newInstructorForm = document.getElementById('new-instructor-form');

    function renderInstructors() {
        if (!instructorGrid) return;
        instructorGrid.innerHTML = instructorsList.map(item => `
            <div class="p-6 rounded-lg bg-white/5 border border-white/5 hover:border-primary/40 transition-all flex flex-col justify-between group card-hover">
                <div>
                    <div class="h-44 w-full rounded overflow-hidden mb-6 relative">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80"></div>
                        <span class="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-primary/90 text-secondary text-[10px] font-bold uppercase tracking-wider">${item.specialty.split(',')[0]}</span>
                    </div>
                    <div class="flex items-center justify-between mb-2">
                        <h4 class="text-lg font-bold text-white group-hover:text-primary transition-colors">${item.name}</h4>
                        <span class="text-xs text-primary font-bold">★ ${item.rating.split(' ')[0]}</span>
                    </div>
                    <p class="text-xs text-primary/80 font-medium uppercase tracking-wider mb-2">${item.title}</p>
                    <p class="text-[11px] text-gray-400 mb-4">${item.credentials}</p>
                    <div class="p-3 rounded bg-black/20 border border-white/5 mb-6">
                        <span class="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Available Atelier Hours:</span>
                        <span class="text-xs text-white font-mono font-medium">${item.hours}</span>
                    </div>
                </div>
                <div class="flex gap-3">
                    <button class="book-session-btn flex-1 py-2.5 px-4 rounded bg-primary text-secondary hover:bg-primary/90 font-bold text-xs uppercase tracking-wider transition-all text-center" data-name="${item.name}">
                        Book Mentorship
                    </button>
                    <button class="message-mentor-btn p-2.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors" data-name="${item.name}" title="Send Message to Master">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    </button>
                </div>
            </div>
        `).join('');

        // Wire click events
        instructorGrid.querySelectorAll('.book-session-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const name = btn.getAttribute('data-name');
                if (bookInstructorName) bookInstructorName.innerText = name;
                if (bookModal) {
                    bookModal.classList.remove('hidden');
                    bookModal.classList.add('flex');
                }
            });
        });

        instructorGrid.querySelectorAll('.message-mentor-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const name = btn.getAttribute('data-name');
                const query = prompt(`Send direct message to ${name}:`);
                if (query && query.trim()) {
                    showAcademyToast(`Message dispatched to ${name}. Expect response within 24h.`);
                }
            });
        });
    }

    if (closeBookModal && bookModal) {
        closeBookModal.addEventListener('click', () => {
            bookModal.classList.add('hidden');
            bookModal.classList.remove('flex');
        });
    }

    if (bookForm) {
        bookForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const date = document.getElementById('book-date').value;
            const time = document.getElementById('book-time').value;
            const mentor = bookInstructorName ? bookInstructorName.innerText : "Instructor";
            if (bookModal) {
                bookModal.classList.add('hidden');
                bookModal.classList.remove('flex');
            }
            showAcademyToast(`1-on-1 Atelier Mentorship confirmed with ${mentor} on ${date} at ${time}. Calendar invite sent!`);
            bookForm.reset();
        });
    }

    // Instructor Admin Modal Handlers
    if (openAdminModalBtn && adminModal) {
        openAdminModalBtn.addEventListener('click', () => {
            adminModal.classList.remove('hidden');
            adminModal.classList.add('flex');
        });
    }

    if (closeAdminModalBtn && adminModal) {
        closeAdminModalBtn.addEventListener('click', () => {
            adminModal.classList.add('hidden');
            adminModal.classList.remove('flex');
        });
    }

    if (newInstructorForm) {
        newInstructorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('admin-inst-name').value;
            const title = document.getElementById('admin-inst-title').value;
            const credentials = document.getElementById('admin-inst-credentials').value;
            const specialty = document.getElementById('admin-inst-specialty').value;
            const hours = document.getElementById('admin-inst-hours').value;

            instructorsList.push({
                id: instructorsList.length + 1,
                name: name,
                title: title,
                credentials: credentials,
                specialty: specialty,
                image: "images/jewelry-hero.jpg",
                hours: hours,
                rating: "5.0 / 5.0 (New Master)"
            });

            renderInstructors();
            if (adminModal) {
                adminModal.classList.add('hidden');
                adminModal.classList.remove('flex');
            }
            newInstructorForm.reset();
            showAcademyToast(`Master Instructor ${name} successfully appointed to the Academy Atelier roster!`);
        });
    }

    // -------------------------------------------------------------
    // 8. Toast Notification Utility
    // -------------------------------------------------------------
    function showAcademyToast(msg) {
        let toast = document.getElementById('academy-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'academy-toast';
            toast.className = 'fixed bottom-8 right-8 z-[200] max-w-sm px-6 py-4 rounded-lg bg-secondary border border-primary text-white text-xs font-medium shadow-2xl transition-all duration-300 opacity-0 translate-y-6 pointer-events-none flex items-center gap-3';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `
            <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span>${msg}</span>
        `;
        toast.classList.remove('opacity-0', 'translate-y-6', 'pointer-events-none');
        toast.classList.add('opacity-100', 'translate-y-0');

        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-y-6', 'pointer-events-none');
            toast.classList.remove('opacity-100', 'translate-y-0');
        }, 3800);
    }

    // -------------------------------------------------------------
    // 9. Initial Load
    // -------------------------------------------------------------
    loadLesson(currentLessonIndex);
    renderQuiz();
    renderInstructors();
    updateStudentAnalytics();
});
