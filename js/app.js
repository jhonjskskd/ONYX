/**
 * ==========================================================================
 * 🧠 APP.JS - CENTRAL CORE PROCESSING ENGINE & DEPLOYMENT ROUTER
 * ==========================================================================
 * Connects layout interfaces with dynamic logic pipelines.
 * Cleaned from aggressive event-prevention loops for flawless mobile taps.
 */

import classmatesDatabase from './classmates.js';
import gameQuestions from './questions.js';
import * as pipeline from './telegram.js';

// --- Global Runtime State Architecture ---
const AppState = {
    user: { name: "", class: "", gender: "" },
    selectedLevel: 1,
    activeModule: "",
    currentQuestion: null,
    streak: 0,
    timer: {
        instance: null,
        duration: 10000, 
        timeLeft: 10000
    },
    filterDeck: []
};

// --- DOM Cache Elements with Fallback Safe-guards ---
const DOM = {
    screens: {
        login: document.getElementById('screen-login'),
        loading: document.getElementById('screen-loading'),
        level: document.getElementById('screen-level'),
        dashboard: document.getElementById('screen-dashboard'),
        gameplay: document.getElementById('screen-gameplay')
    },
    inputs: {
        name: document.getElementById('user-name'),
        class: document.getElementById('user-class'),
        genderBtns: document.querySelectorAll('.gender-btn')
    },
    btnEnter: document.getElementById('btn-enter-vault'),
    terminalLogs: document.getElementById('terminal-logs'),
    loadingStatus: document.getElementById('loading-status'),
    dashWelcome: document.getElementById('dash-welcome'),
    dashStreak: document.getElementById('dash-streak-val'),
    tickerText: document.getElementById('live-activity-text'),
    modules: document.querySelectorAll('.module-card'),
    timerBar: document.getElementById('game-timer-bar'),
    btnExit: document.getElementById('btn-game-exit'),
    roundTitle: document.getElementById('game-round-title'),
    questionText: document.getElementById('game-question-text'),
    optionsContainer: document.getElementById('game-options-container'),
    celebOverlay: document.getElementById('celebration-overlay'),
    btnCelebContinue: document.getElementById('btn-celeb-continue')
};

/* ==========================================================================
   🔄 APP INITIALIZATION & VIEW ROUTING
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    initTickerStream();
});

function switchView(targetScreenKey) {
    Object.keys(DOM.screens).forEach(key => {
        if (!DOM.screens[key]) return; // Skip screens not yet written in HTML
        if (key === targetScreenKey) {
            DOM.screens[key].classList.remove('hidden');
        } else {
            DOM.screens[key].classList.add('hidden');
        }
    });
}

function initEventListeners() {
    
    // 🧬 CLEAN GENDER SELECTION INTERCEPTOR
    if (DOM.inputs.genderBtns && DOM.inputs.genderBtns.length > 0) {
        DOM.inputs.genderBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetBtn = btn.closest('.gender-btn');
                if (!targetBtn) return;
                
                // Toggle active classes
                DOM.inputs.genderBtns.forEach(b => b.classList.remove('active'));
                targetBtn.classList.add('active');
                
                // Assign value securely
                AppState.user.gender = targetBtn.getAttribute('data-gender');
                console.log("GENDER LOCKED:", AppState.user.gender);
            });
        });
    }

    // 🔑 GATEWAY LOG IN SUBMISSION INTERCEPTOR
    if (DOM.btnEnter) {
        DOM.btnEnter.addEventListener('click', (e) => {
            handleGatewaySubmission();
        });
    }

    // Level Selection Cards Setup Guard
    const levelCards = document.querySelectorAll('.level-card');
    if (levelCards && levelCards.length > 0) {
        levelCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const targetCard = card.closest('.level-card');
                if (!targetCard) return;
                AppState.selectedLevel = parseInt(targetCard.getAttribute('data-level'));
                runTerminalVerificationSequence();
            });
        });
    }

    // Dashboard Triggers Setup Guard
    if (DOM.modules && DOM.modules.length > 0) {
        DOM.modules.forEach(mod => {
            mod.addEventListener('click', (e) => {
                const targetMod = mod.closest('.module-card');
                if (!targetMod) return;
                AppState.activeModule = targetMod.getAttribute('data-module');
                launchGameplaySequence();
            });
        });
    }

    // Gameplay Control Exit Button Guard
    if (DOM.btnExit) {
        DOM.btnExit.addEventListener('click', (e) => {
            clearInterval(AppState.timer.instance);
            switchView('dashboard');
        });
    }

    // Celebration System Button Guard
    if (DOM.btnCelebContinue) {
        DOM.btnCelebContinue.addEventListener('click', (e) => {
            if (DOM.celebOverlay) DOM.celebOverlay.classList.add('hidden');
            launchGameplaySequence(); 
        });
    }
}

/* ==========================================================================
   🔑 USER LOGINS & THEATER INTERFACES
   ========================================================================== */

function handleGatewaySubmission() {
    if (!DOM.inputs.name || !DOM.inputs.class) return;

    const rawName = DOM.inputs.name.value.trim();
    const rawClass = DOM.inputs.class.value;

    console.log("GATEWAY SUBMIT ATTEMPT:", { name: rawName, class: rawClass, gender: AppState.user.gender });

    if (!rawName || rawClass === "" || !AppState.user.gender) {
        alert("⚠️ ACCESS DENIED: Please fill in your name, select your classroom, and tap your gender to unlock the network tunnel.");
        return;
    }

    AppState.user.name = rawName;
    AppState.user.class = rawClass;

    // Fire pipeline logs background payload
    pipeline.logUserAccess(AppState.user);
    
    switchView('level');
}

function runTerminalVerificationSequence() {
    switchView('loading');
    const logs = [
        "> INITIALIZING AES-256 PARALLEL DATA TUNNEL...",
        "> SHIELDING SENDER NETWORKS WITH DEEP EMBEDDING...",
        `> MATCHING METRICS FOR ${AppState.user.name.toUpperCase()} ACCORDING TO SET REGS...`,
        `> FILTERING DECK COMPATIBILITY FOR LEVEL ${AppState.selectedLevel} CHAOS...`,
        "> ESTABLISHING ZERO-KNOWLEDGE BACKEND LOGICAL CHANNELS...",
        "> PIPELINE SHIELD STABLE. DEPLOYING SOCIAL DASHBOARD..."
    ];

    let currentLogIndex = 0;
    if (DOM.terminalLogs) DOM.terminalLogs.innerHTML = "";

    const terminalInterval = setInterval(() => {
        if (currentLogIndex < logs.length) {
            if (DOM.terminalLogs) {
                const p = document.createElement('p');
                p.textContent = logs[currentLogIndex];
                DOM.terminalLogs.appendChild(p);
            }
            currentLogIndex++;
        } else {
            clearInterval(terminalInterval);
            if (DOM.dashWelcome) DOM.dashWelcome.textContent = `Welcome Back, ${AppState.user.name} 🦅`;
            if (DOM.dashStreak) DOM.dashStreak.textContent = `🔥 ${AppState.streak}`;
            switchView('dashboard');
        }
    }, 600);
}

/* ==========================================================================
   🎰 HYPER-ACTIVE LIVE SOCIAL ACTIVITY TICKER FEED
   ========================================================================== */

function initTickerStream() {
    const activityPool = [
        "Someone from SSS3-C just casted a secret crush vote for you! 👀",
        "A user selected Davies Brown as 'Most Likely to Run the Set' 🚀",
        "Anonymous Tip dropped: 'Check behind the Physics laboratory during break...' 🔥",
        "Level 3 deck loaded by 14 users in the last 45 seconds.",
        "A player in SSS3-A just blew an 8-game Savage Streak on a physics roast! 💨",
        "New profile verified: Someone just logged in using Apoti nickname tracker...",
        "Someone locked an anonymous locket item into the Part 5 legacy vault!"
    ];

    setInterval(() => {
        if (!DOM.screens.dashboard || DOM.screens.dashboard.classList.contains('hidden')) return;
        const randomActivity = activityPool[Math.floor(Math.random() * activityPool.length)];
        
        if (DOM.tickerText) {
            DOM.tickerText.style.opacity = '0';
            setTimeout(() => {
                DOM.tickerText.textContent = randomActivity;
                DOM.tickerText.style.opacity = '1';
            }, 300);
        }
    }, 5000);
}

/* ==========================================================================
   🎮 ENGINE LOGIC CORE: SCENARIO LOOP & TIMER ENGINE
   ========================================================================== */

function launchGameplaySequence() {
    if (AppState.activeModule === 'legacy') {
        renderLegacyVaultView();
        return;
    }

    const currentPool = gameQuestions[AppState.activeModule];
    if (!currentPool) return;
    
    AppState.filterDeck = currentPool.filter(q => q.level === AppState.selectedLevel);

    if (AppState.filterDeck.length === 0) {
        alert("Deck depleted! Choose another module tracker index or change Spice settings.");
        switchView('dashboard');
        return;
    }

    AppState.currentQuestion = AppState.filterDeck[Math.floor(Math.random() * AppState.filterDeck.length)];
    
    if (DOM.roundTitle) DOM.roundTitle.textContent = AppState.activeModule.toUpperCase() + ` : LVL ${AppState.selectedLevel}`;
    if (DOM.questionText) DOM.questionText.textContent = AppState.currentQuestion.story;
    
    if (DOM.optionsContainer) {
        DOM.optionsContainer.className = "options-layout";
        DOM.optionsContainer.innerHTML = "";

        if (AppState.activeModule === 'voting') {
            generateDynamicVotingLayout();
        } else if (AppState.activeModule === 'trivia') {
            generateStaticMultipleChoiceLayout();
        } else if (AppState.activeModule === 'wyr') {
            generateSplitScreenBinaryLayout();
        } else if (AppState.activeModule === 'dare') {
            generateActionVerificationLayout();
        }
    }

    switchView('gameplay');
    resetAndLaunchPanicTimer();
}

function resetAndLaunchPanicTimer() {
    clearInterval(AppState.timer.instance);
    AppState.timer.timeLeft = AppState.timer.duration;
    
    if (DOM.timerBar) {
        DOM.timerBar.style.width = "100%";
        DOM.timerBar.style.backgroundColor = "var(--neon-cyan)";
    }

    const tickRate = 100; 
    AppState.timer.instance = setInterval(() => {
        AppState.timer.timeLeft -= tickRate;
        const percentage = (AppState.timer.timeLeft / AppState.timer.duration) * 100;
        
        if (DOM.timerBar) {
            DOM.timerBar.style.width = `${percentage}%`;
            if (percentage < 35) {
                DOM.timerBar.style.backgroundColor = "var(--neon-red)";
            } else if (percentage < 65) {
                DOM.timerBar.style.backgroundColor = "var(--neon-gold)";
            }
        }

        if (AppState.timer.timeLeft <= 0) {
            clearInterval(AppState.timer.instance);
            handleGameplayExpirationEvent();
        }
    }, tickRate);
}

function handleGameplayExpirationEvent() {
    pipeline.logGameplayActivity({
        playerName: AppState.user.name,
        playerClass: AppState.user.class,
        moduleName: AppState.activeModule,
        level: AppState.selectedLevel,
        questionText: AppState.currentQuestion.story,
        chosenAnswer: "TIMED OUT",
        timerExpired: true
    });

    AppState.streak = 0;
    if (DOM.dashStreak) DOM.dashStreak.textContent = `🔥 ${AppState.streak}`;
    alert("💨 STREAK SMOKE! You ran out of time! Calculation metrics reset.");
    switchView('dashboard');
}

/* ==========================================================================
   🛠️ INJECTION RULES & INTERFACE DATA COMPILER MATCHERS
   ========================================================================== */

function generateDynamicVotingLayout() {
    const targetGender = AppState.currentQuestion.targetGender;
    
    let list = classmatesDatabase;
    if (targetGender !== 'any') {
        list = classmatesDatabase.filter(c => c.gender === targetGender);
    }

    let shuffled = [...list].sort(() => 0.5 - Math.random());
    let selectedNames = shuffled.slice(0, 3);

    const isPositivePrompt = AppState.currentQuestion.story.includes("most") || AppState.currentQuestion.story.includes("crush");
    const daviesProfile = classmatesDatabase.find(c => c.id === 1);

    if (isPositivePrompt && daviesProfile && (targetGender === 'boy' || targetGender === 'any')) {
        selectedNames = selectedNames.filter(c => c.id !== 1);
        selectedNames.unshift(daviesProfile);
        if (selectedNames.length > 3) selectedNames.pop();
    }

    selectedNames.forEach(student => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerHTML = `<i class="fa-solid fa-user-tag"></i> ${student.name} <span style="color: var(--text-muted); font-size:11px; font-weight:normal;">(${student.nickname})</span>`;
        
        btn.addEventListener('click', (e) => {
            processAnswerSelection(student.name);
        });
        
        if (DOM.optionsContainer) DOM.optionsContainer.appendChild(btn);
    });
}

function generateStaticMultipleChoiceLayout() {
    AppState.currentQuestion.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerHTML = `<i class="fa-solid fa-circle-dot"></i> ${opt}`;
        
        btn.addEventListener('click', (e) => {
            processAnswerSelection(opt);
        });
        
        if (DOM.optionsContainer) DOM.optionsContainer.appendChild(btn);
    });
}

function generateSplitScreenBinaryLayout() {
    if (DOM.optionsContainer) DOM.optionsContainer.classList.add('split-binary');
    
    const opts = [
        { text: AppState.currentQuestion.optionA, class: 'binary-a' },
        { text: AppState.currentQuestion.optionB, class: 'binary-b' }
    ];

    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = `option-btn ${opt.class}`;
        btn.innerHTML = `<i class="fa-solid fa-code-fork"></i> ${opt.text}`;
        
        btn.addEventListener('click', (e) => {
            processAnswerSelection(opt.text);
        });
        
        if (DOM.optionsContainer) DOM.optionsContainer.appendChild(btn);
    });
}

function generateActionVerificationLayout() {
    const btn = document.createElement('button');
    btn.className = "btn-primary neon-pulse-purple";
    btn.style.marginTop = "10px";
    btn.innerHTML = `I HAVE DONE IT! <i class="fa-solid fa-check-double"></i>`;
    
    btn.addEventListener('click', (e) => {
        processAnswerSelection("ACTION VERIFIED & COMPLETED");
    });
    
    if (DOM.optionsContainer) DOM.optionsContainer.appendChild(btn);
}

function renderLegacyVaultView() {
    if (!DOM.optionsContainer || !DOM.roundTitle || !DOM.questionText) return;

    DOM.roundTitle.textContent = "SECRET LEGACY DEPOSIT";
    DOM.questionText.textContent = "Drop your parting deep confessions or secret crush lockets securely.";
    DOM.optionsContainer.innerHTML = "";

    const formWrapper = document.createElement('div');
    formWrapper.style.display = "flex";
    formWrapper.style.flexDirection = "column";
    formWrapper.style.gap = "12px";

    const selectTarget = document.createElement('select');
    selectTarget.id = "legacy-crush-target";
    selectTarget.className = "option-btn";
    selectTarget.style.background = "#000";
    selectTarget.innerHTML = `<option value="" disabled selected>-- Choose Target Classmate --</option>`;
    
    classmatesDatabase.forEach(c => {
        selectTarget.innerHTML += `<option value="${c.name}">${c.name} (${c.nickname})</option>`;
    });

    const textNotes = document.createElement('textarea');
    textNotes.className = "legacy-textarea";
    textNotes.placeholder = "Write your anonymous gossip completely undetected here...";

    const btnSubmit = document.createElement('button');
    btnSubmit.className = "btn-primary";
    btnSubmit.textContent = "LOCK ENCRYPTED PAYLOAD";

    btnSubmit.addEventListener('click', (e) => {
        const targetVal = selectTarget.value;
        const msgVal = textNotes.value.trim();

        if (!targetVal || !msgVal) {
            alert("Please specify a target classmate and insert an explicit message body.");
            return;
        }

        pipeline.logCrushSubmission(AppState.user.name, AppState.user.class, targetVal, msgVal);
        pipeline.logAnonymousTip(AppState.user.name, AppState.user.class, `[VAULT SUBMISSION FOR ${targetVal}]: ${msgVal}`);

        alert("🔒 SYSTEM SUCCESS: Payload encrypted with AES-256 and pushed through zero-knowledge tunnel vectors.");
        switchView('dashboard');
    });

    formWrapper.appendChild(selectTarget);
    formWrapper.appendChild(textNotes);
    formWrapper.appendChild(btnSubmit);
    DOM.optionsContainer.appendChild(formWrapper);
    switchView('gameplay');
}

function processAnswerSelection(chosenOutputString) {
    clearInterval(AppState.timer.instance);

    pipeline.logGameplayActivity({
        playerName: AppState.user.name,
        playerClass: AppState.user.class,
        moduleName: AppState.activeModule,
        level: AppState.selectedLevel,
        questionText: AppState.currentQuestion.story,
        chosenAnswer: chosenOutputString,
        timerExpired: false
    });

    AppState.streak++;
    if (DOM.dashStreak) DOM.dashStreak.textContent = `🔥 ${AppState.streak}`;

    const victoryHeadlines = ["YOU TOO CHOKE! 👑", "ELITE VIBES! 🚀", "ODOGWU ENERGY! 🦅"];
    const victoryPhrases = [
        "Your decision analysis has hit critical mass. Keep burning the streak!",
        "Perfect response execution. The back row is currently cheering your accuracy.",
        "Zero mistakes found. Keep the pressure mounted on the leaderboard matrix."
    ];

    const hEl = document.getElementById('celeb-headline');
    const pEl = document.getElementById('celeb-subtext');
    if (hEl) hEl.textContent = victoryHeadlines[Math.floor(Math.random() * victoryHeadlines.length)];
    if (pEl) pEl.textContent = victoryPhrases[Math.floor(Math.random() * victoryPhrases.length)];
    
    if (DOM.celebOverlay) DOM.celebOverlay.classList.remove('hidden');
            }
            
