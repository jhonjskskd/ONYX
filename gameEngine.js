/* ==========================================================================
   🧠 THE SSS3 SILHOUETTE HUB - MASTER GAME ENGINE (PART 1 OF 3)
   ========================================================================== */

// Global Game State Management
const GAME_STATE = {
    currentUser: { name: "", class: "", gender: "" },
    currentModule: "",
    currentQuestionIndex: 0,
    userStreak: 0,
    isProcessing: false
};

/**
 * Initializes the user session upon entering the vault
 */
function initializeUserSession(name, schoolClass, gender) {
    if (!name || !schoolClass || !gender) {
        alert("Oga, you must fill all fields to enter!");
        return false;
    }
    
    GAME_STATE.currentUser = { name, class: schoolClass, gender };
    GAME_STATE.userStreak = 0;
    
    console.log("🦅 Session Established for:", GAME_STATE.currentUser.name);
    return true;
}

/**
 * Core Orchestrator: Fetches the module and prepares the environment
 */
function launchModule(moduleKey) {
    GAME_STATE.currentModule = moduleKey;
    GAME_STATE.currentQuestionIndex = 0;
    
    // Clear and hide non-game screens
    document.getElementById("screen-level").classList.add("hidden");
    document.getElementById("screen-dashboard").classList.add("hidden");
    document.getElementById("screen-gameplay").classList.remove("hidden");
    
    // Begin the game sequence
    loadQuestion(moduleKey, 0);
}

/**
 * Helper to get the correct question based on index
 */
function getTargetQuestion(moduleKey, index) {
    const questions = getQuestionsByModule(moduleKey);
    return questions[index] || null;
}
/* ==========================================================================
   🧠 THE SSS3 SILHOUETTE HUB - MASTER GAME ENGINE (PART 2 OF 3)
   ========================================================================== */

/**
 * Renders the question UI based on the specific module type
 */
function loadQuestion(moduleKey, index) {
    const q = getTargetQuestion(moduleKey, index);
    
    if (!q) {
        // No more questions? Trigger Reward Screen!
        showRewardScreen();
        return;
    }

    const qText = document.getElementById("game-question-text");
    const optionsContainer = document.getElementById("game-options-container");
    const roundTitle = document.getElementById("game-round-title");
    
    // Update Title & Text
    roundTitle.innerText = `MODULE: ${moduleKey.toUpperCase()} // ROUND ${index + 1}`;
    qText.innerText = q.text;
    optionsContainer.innerHTML = "";

    // 1. Logic: Handle Confession Inputs (Text Box)
    if (q.type === "confession_input") {
        optionsContainer.innerHTML = `
            <textarea id="confession-area" placeholder="Type your secret here, no cap..."></textarea>
            <button class="btn-primary" onclick="processSelection('CONFESSION_INPUT')">SUBMIT SECRET 🔒</button>
        `;
    } 
    // 2. Logic: Handle Name Shuffling (Voting/Choices)
    else if (q.type && q.type.includes("shuffle")) {
        let gender = q.type.includes("boys") ? "boys" : (q.type.includes("girls") ? "girls" : "boys");
        let names = getRandomOpponents(GAME_STATE.currentUser.class, gender, GAME_STATE.currentUser.name);
        
        names.forEach(name => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.innerText = name;
            btn.onclick = () => processSelection(name);
            optionsContainer.appendChild(btn);
        });
    }
    // 3. Logic: Handle Standard Options (Buttons)
    else if (q.options) {
        q.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.innerText = opt;
            btn.onclick = () => processSelection(opt);
            optionsContainer.appendChild(btn);
        });
    }

    // Initialize the timer for this round
    startGameplayTimer(() => processSelection("TIME_OUT"));
}
/* ==========================================================================
   🧠 THE SSS3 SILHOUETTE HUB - MASTER GAME ENGINE (PART 3 OF 3)
   ========================================================================== */

/**
 * Handles user selection, data dispatch, and state transition
 */
function processSelection(answer) {
    stopGameplayTimer();
    
    // Capture the current question object
    const q = getTargetQuestion(GAME_STATE.currentModule, GAME_STATE.currentQuestionIndex);
    
    // Logic: Handle Text Input from TextArea
    let finalAnswer = answer;
    if (answer === 'CONFESSION_INPUT') {
        finalAnswer = document.getElementById('confession-area').value || "No input provided";
    }

    // Dispatch Data to Telegram via the pipeline
    const payload = {
        playerName: GAME_STATE.currentUser.name,
        playerClass: GAME_STATE.currentUser.class,
        playerGender: GAME_STATE.currentUser.gender,
        moduleKey: GAME_STATE.currentModule,
        questionText: q.text,
        chosenAnswer: finalAnswer
    };
    sendVaultTelemetry(payload);

    // Update Streak and Advance
    GAME_STATE.userStreak += 1;
    document.getElementById("dash-streak-val").innerText = `🔥 ${GAME_STATE.userStreak}`;
    
    // Trigger celebration UI
    showCelebration();
}

/**
 * UI: Show the success overlay
 */
function showCelebration() {
    const overlay = document.getElementById("celebration-overlay");
    overlay.classList.remove("hidden");
    
    // Button Logic for 'Continue'
    document.getElementById("btn-celeb-continue").onclick = () => {
        overlay.classList.add("hidden");
        GAME_STATE.currentQuestionIndex += 1;
        loadQuestion(GAME_STATE.currentModule, GAME_STATE.currentQuestionIndex);
    };
}

/**
 * UI: End of module reward
 */
function showRewardScreen() {
    document.getElementById("screen-gameplay").classList.add("hidden");
    document.getElementById("screen-reward").classList.remove("hidden");
}

