/**
 * ==========================================================================
 * 🧠 APP.JS - THE CENTRAL CORE PROCESSING ROUTER & ENGINE
 * ==========================================================================
 * Connects the HTML layout views with data modules and handles state.
 * Fully optimized with dual touchstart/click event filters for flawless mobile deployment.
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
        duration: 10000, // 10 seconds tracking interval
        timeLeft: 10000
    },
    filterDeck: []
};

// --- DOM Cache Elements ---
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
        if (key === targetScreenKey) {
            DOM.screens[key].classList.remove('hidden');
        } else {
            DOM.screens[key].classList.add('hidden');
        }
    });
}

function initEventListeners() {
    
    // 🧬 HYBRID MOBILE GENDER OVERRIDE: Forces responsive toggle styling over input lags
    const handleGenderSelection = (e, btn) => {
        e.preventDefault();
        e.stopPropagation();
        
        const targetBtn = btn.closest('.gender-btn');
        if (!targetBtn) return;
        
        DOM.inputs.genderBtns.forEach(b => b.classList.remove('active'));
        targetBtn.classList.add('active');
        AppState.user.gender = targetBtn.getAttribute('data-gender');
        
        console.log("MOBILE GENDER SYSTEM OVERRIDE LOCKED:", AppState.user.gender);
    };

    DOM.inputs.genderBtns.forEach(btn => {
        btn.addEventListener('touchstart', (e) => handleGenderSelection(e, btn), { passive: false });
        btn.addEventListener('click', (e) => handleGenderSelection(e, btn));
    });

    // 🔑 ENTRANCE GATE SYSTEM BUTTON OVERRIDE
    const handleGateClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleGatewaySubmission();
    };
    
    DOM.btnEnter.addEventListener('touchstart', handleGateClick, { passive: false });
    DOM.btnEnter.addEventListener('click', handleGateClick);

    // Level Cards Selector Click
    document.querySelectorAll('.level-card').forEach(card => {
        const handleLevelSelect = (e) => {
            e.preventDefault();
            const targetCard = card.closest('.level-card');
            if (!targetCard) return;
            AppState.selectedLevel = parseInt(targetCard.getAttribute('data-level'));
            runTerminalVerificationSequence();
        };
        card.addEventListener('touchstart', handleLevelSelect, { passive: false });
        card.addEventListener('click', handleLevelSelect);
    });

    // Dashboard App Module Triggers
    DOM.modules.forEach(mod => {
        const handleModuleSelect = (e) => {
            e.preventDefault();
            const targetMod = mod.closest('.module-card');
            if (!targetMod) return;
            AppState.activeModule = targetMod.getAttribute('data-module');
            launchGameplaySequence();
        };
        mod.addEventListener('touchstart', handleModuleSelect, { passive: false });
        mod.addEventListener('click', handleModuleSelect);
    });

    // Gameplay Control Exit Buttons
    DOM.btnExit.addEventListener('click', (e) => {
        e.preventDefault();
        clearInterval(AppState.timer.instance);
        switchView('dashboard');
    });

    // Celebration Continue Click Interception
    DOM.btnCelebContinue.addEventListener('click', (e) => {
        e.preventDefault();
        DOM.celebOverlay.classList.add('hidden');
        launchGameplaySequence(); 
    });
}

/* ==========================================================================
   🔑 USER LOGINS & THEATER INTERFACES
   ========================================================================== */

function handleGatewaySubmission() {
    const rawName = DOM.inputs.name.value.trim();
    const rawClass = DOM.inputs.class.value;

    console.log("SUBMISSION ATTEMPT METRICS:", { name: rawName, class: rawClass, gender: AppState.user.gender });

    if (!rawName || !rawClass || !AppState.user.gender) {
        alert("⚠️ CRITICAL ERROR: Please fill in your name, select your classroom, and select your gender completely to authorize network sync.");
        return;
    }

    AppState.user.name = rawName;
    AppState.user.class = rawClass;

    // Background pipeline fire
    pipeline.logUserAccess(AppState.user);
    
    // Move to Spice level selection matrix
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
    DOM.terminalLogs.innerHTML = "";

    const terminalInterval = setInterval(() => {
        if (currentLogIndex < logs.length) {
            const p = document.createElement('p');
            p.textContent = logs[currentLogIndex];
            DOM.terminalLogs.appendChild(p);
            currentLogIndex++;
        } else {
            clearInterval(terminalInterval);
            DOM.dashWelcome.textContent = `Welcome Back, ${AppState.user.name} 🦅`;
            DOM.dashStreak.textContent = `🔥 ${AppState.streak}`;
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
        if (DOM.screens.dashboard.classList.contains('hidden')) return;
        const randomActivity = activityPool[Math.floor(Math.random() * activityPool.length)];
        
        DOM.tickerText.style.opacity = '0';
        setTimeout(() => {
            DOM.tickerText.textContent = randomActivity;
            DOM.tickerText.style.opacity = '1';
        }, 300);
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
    AppState.filterDeck = currentPool.filter(q => q.level === AppState.selectedLevel);

    if (AppState.filterDeck.length === 0) {
        alert("Deck depleted! Choose another module tracker index or change Spice settings.");
        switchView('dashboard');
        return;
    }

    AppState.currentQuestion = AppState.filterDeck[Math.floor(Math.random() * AppState.filterDeck.length)];
    
    DOM.roundTitle.textContent = AppState.activeModule.toUpperCase() + ` : LVL ${AppState.selectedLevel}`;
    DOM.questionText.textContent = AppState.currentQuestion.story;
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

    switchView('gameplay');
    resetAndLaunchPanicTimer();
}

function resetAndLaunchPanicTimer() {
    clearInterval(AppState.timer.instance);
    AppState.timer.timeLeft = AppState.timer.duration;
    DOM.timerBar.style.width = "100%";
    DOM.timerBar.style.backgroundColor = "var(--neon-cyan)";

    const tickRate = 100; 
    AppState.timer.instance = setInterval(() => {
        AppState.timer.timeLeft -= tickRate;
        const percentage = (AppState.timer.timeLeft / AppState.timer.duration) * 100;
        DOM.timerBar.style.width = `${percentage}%`;

        if (percentage < 35) {
            DOM.timerBar.style.backgroundColor = "var(--neon-red)";
        } else if (percentage < 65) {
            DOM.timerBar.style.backgroundColor = "var(--neon-gold)";
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
    DOM.dashStreak.textContent = `🔥 ${AppState.streak}`;
    alert("💨 STREAK SMOKE! You ran out of time! Calculation metrics reset.");
    switchView('dashboard');
}

/* ==========================================================================
   🛠️ INJECTION RULES & INTERFACE DATA COMPILER MATCHERS
   ========================================================================= */

function generateDynamicVotingLayout() {
    const targetGender = AppState.currentQuestion.targetGender;
    
    let list = classmatesDatabase;
    if (targetGender !== 'any') {
        list = classmatesDatabase.filter(c => c.gender === targetGender);
    }

    let shuffled = [...list].sort(() => 0.5 - Math.random());
    let selectedNames = shuffled.slice(0, 3);

    // 🔒 THE OWNER-RULE INJECTION ANCHOR
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
        
        const processClick = (e) => {
            e.preventDefault();
            processAnswerSelection(student.name);
        };
        btn.addEventListener('touchstart', processClick, { passive: false });
        btn.addEventListener('click', processClick);
        
        DOM.optionsContainer.appendChild(btn);
    });
}

function generateStaticMultipleChoiceLayout() {
    AppState.currentQuestion.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerHTML = `<i class="fa-solid fa-circle-dot"></i> ${opt}`;
        
        const processClick = (e) => {
            e.preventDefault();
            processAnswerSelection(opt);
        };
        btn.addEventListener('touchstart', processClick, { passive: false });
        btn.addEventListener('click', processClick);
        
        DOM.optionsContainer.appendChild(btn);
    });
}

function generateSplitScreenBinaryLayout() {
    DOM.optionsContainer.classList.add('split-binary');
    
    const opts = [
        { text: AppState.currentQuestion.optionA, class: 'binary-a' },
        { text: AppState.currentQuestion.optionB, class: 'binary-b' }
    ];

    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = `option-btn ${opt.class}`;
        btn.innerHTML = `<i class="fa-solid fa-code-fork"></i> ${opt.text}`;
        
        const processClick = (e) => {
            e.preventDefault();
            processAnswerSelection(opt.text);
        };
        btn.addEventListener('touchstart', processClick, { passive: false });
        btn.addEventListener('click', processClick);
        
        DOM.optionsContainer.appendChild(btn);
    });
}

function generateActionVerificationLayout() {
    const btn = document.createElement('button');
    btn.className = "btn-primary neon-pulse-purple";
    btn.style.marginTop = "10px";
    btn.innerHTML = `I HAVE DONE IT! <i class="fa-solid fa-check-double"></i>`;
    
    const processClick = (e) => {
        e.preventDefault();
        processAnswerSelection("ACTION VERIFIED & COMPLETED");
    };
    btn.addEventListener('touchstart', processClick, { passive: false });
    btn.addEventListener('click', processClick);
    
    DOM.optionsContainer.appendChild(btn);
}

function renderLegacyVaultView() {
    DOM.roundTitle.textContent = "SECRET LEGACY DEPOSIT";
    DOM.questionText.textContent = "Drop your parting deep confessions or secret crush lockets securely. All entries are protected by AES-256 layer theater overlays.";
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
    textNotes.placeholder = "Write your anonymous gossip, parting note, or secret valuation tea completely undetected here...";

    const btnSubmit = document.createElement('button');
    btnSubmit.className = "btn-primary";
    btnSubmit.textContent = "LOCK ENCRYPTED PAYLOAD";

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
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

/* ==========================================================================
   🏆 CELEBRATIONS & SCORE METRICS COMPUTERS
   ========================================================================== */

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
    DOM.dashStreak.textContent = `🔥 ${AppState.streak}`;

    const victoryHeadlines = ["YOU TOO CHOKE! 👑", "ELITE VIBES! 🚀", " Pristine Calculation! 🎯", "ODOGWU ENERGY! 🦅"];
    const victoryPhrases = [
        "Your decision analysis has hit critical mass. Keep burning the streak!",
        "Perfect response execution. The back row is currently cheering your accuracy.",
        "Your selection was routed securely. The simulation network density expands!",
        "Zero mistakes found. Keep the pressure mounted on the leaderboard matrix."
    ];

    document.getElementById('celeb-headline').textContent = victoryHeadlines[Math.floor(Math.random() * victoryHeadlines.length)];
    document.getElementById('celeb-subtext').textContent = victoryPhrases[Math.floor(Math.random() * victoryPhrases.length)];
    
    DOM.celebOverlay.classList.remove('hidden');
    }
                                  
