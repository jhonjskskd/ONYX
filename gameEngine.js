/* ==========================================================================
   🧠 THE SSS3 SILHOUETTE HUB - PREMIUM ARCHITECTURE GAME ENGINE
   ========================================================================== */

// 1. SYSTEM STATE STORAGE ENGINE
const GAME_STATE = {
    currentUser: { name: "", class: "", gender: "" },
    currentModule: "",
    currentQuestionIndex: 0,
    userStreak: 0,
    isProcessing: false
};

/**
 * 2. SESSION INITIALIZATION ENGINE
 * Establishes authentication structures across global states safely.
 */
function initializeUserSession(name, schoolClass, gender) {
    if (!name || !schoolClass || !gender) {
        alert("Oga, you must fill all fields to enter!");
        return false;
    }
    
    // Clean and lock inputs into telemetry registry parameters
    GAME_STATE.currentUser = { 
        name: name.trim(), 
        class: schoolClass, 
        gender: gender 
    };
    GAME_STATE.userStreak = 0;
    
    console.log("🦅 [ENGINE] Session securely locked for operator:", GAME_STATE.currentUser.name);
    return true;
}

/**
 * 3. CORE MODULE ROUTER
 * Orchestrates cross-fading UI windows safely upon launching a target grid item.
 */
function launchModule(moduleKey) {
    if (GAME_STATE.isProcessing) return;
    
    GAME_STATE.currentModule = moduleKey;
    GAME_STATE.currentQuestionIndex = 0;
    
    console.log(`📡 [ENGINE] Launching subsystem sequence: ${moduleKey.toUpperCase()}`);
    
    // Smooth transition between layout display properties
    const screenLevel = document.getElementById("screen-level");
    const screenDash = document.getElementById("screen-dashboard");
    const screenGameplay = document.getElementById("screen-gameplay");
    
    if (screenLevel) screenLevel.classList.add("hidden");
    if (screenDash) screenDash.classList.add("hidden");
    
    if (screenGameplay) {
        screenGameplay.classList.remove("hidden");
        screenGameplay.style.display = "block";
    }
    
    // Fire baseline loader row sequence
    loadQuestion(moduleKey, 0);
}

/**
 * 4. COMPILER COMPLEMENTS
 * Helper utility to return strict array references from question databases.
 */
function getTargetQuestion(moduleKey, index) {
    if (typeof getQuestionsByModule === "function") {
        const questions = getQuestionsByModule(moduleKey);
        return questions[index] || null;
    }
    console.error("❌ [CRITICAL] questions.js script missing or unlinked.");
    return null;
}

/**
 * 5. LAYOUT DISPLAY RENDERING ENGINE
 * Maps question structures directly into custom DOM layout schemas.
 */
function loadQuestion(moduleKey, index) {
    GAME_STATE.isProcessing = false;
    const q = getTargetQuestion(moduleKey, index);
    
    // Fail-safe logic: If stack runs out, instantly route execution directly to Reward certificate
    if (!q) {
        console.log("🏆 [ENGINE] Module clear token detected. Transitioning to end gate...");
        showRewardScreen();
        return;
    }

    const qText = document.getElementById("game-question-text");
    const optionsContainer = document.getElementById("game-options-container");
    const roundTitle = document.getElementById("game-round-title");
    
    // UI Label Injections
    if (roundTitle) roundTitle.innerText = `MODULE: ${moduleKey.toUpperCase()} // ROUND ${index + 1}`;
    if (qText) qText.innerText = q.text;
    if (optionsContainer) optionsContainer.innerHTML = "";

    // PARAMETER A: Text-area input logic for secret submissions
    if (q.type === "confession_input") {
        optionsContainer.innerHTML = `
            <textarea id="confession-area" placeholder="Type your secret here, no cap..."></textarea>
            <button type="button" class="btn-primary" id="btn-submit-confession">SUBMIT SECRET 🔒</button>
        `;
        
        // Mobile tap safety listener attachment
        const submitBtn = document.getElementById("btn-submit-confession");
        if (submitBtn) {
            submitBtn.addEventListener("click", function() {
                processSelection('CONFESSION_INPUT');
            });
        }
    } 
    // PARAMETER B: Classmate name pool shuffling logic
    else if (q.type && q.type.includes("shuffle")) {
        let genderTarget = q.type.includes("boys") ? "boys" : (q.type.includes("girls") ? "girls" : "boys");
        
        if (typeof getRandomOpponents === "function") {
            let names = getRandomOpponents(GAME_STATE.currentUser.class, genderTarget, GAME_STATE.currentUser.name);
            
            names.forEach(name => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "option-btn";
                btn.innerText = name;
                btn.addEventListener("click", function() {
                    processSelection(name);
                });
                optionsContainer.appendChild(btn);
            });
        } else {
            optionsContainer.innerHTML = `<p class='gate-warning'>Error loading class roster...</p>`;
        }
    }
    // PARAMETER C: Traditional multiple-choice buttons
    else if (q.options) {
        q.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "option-btn";
            btn.innerText = opt;
            btn.addEventListener("click", function() {
                processSelection(opt);
            });
            optionsContainer.appendChild(btn);
        });
    }

    // Safety clock routine dispatch
    if (typeof startGameplayTimer === "function") {
        startGameplayTimer(function() {
            processSelection("TIME_OUT");
        });
    }
}

/**
 * 6. TELEMETRY SELECTION DISPATCHER
 * Stops system execution clocks and packages user parameters into data payloads.
 */
function processSelection(answer) {
    if (GAME_STATE.isProcessing) return;
    GAME_STATE.isProcessing = true;

    if (typeof stopGameplayTimer === "function") {
        stopGameplayTimer();
    }
    
    const q = getTargetQuestion(GAME_STATE.currentModule, GAME_STATE.currentQuestionIndex);
    if (!q) return;
    
    let finalAnswer = answer;
    if (answer === 'CONFESSION_INPUT') {
        const textElement = document.getElementById('confession-area');
        finalAnswer = (textElement && textElement.value.trim().length > 0) ? textElement.value.trim() : "No input provided";
    }

    // Generate telemetry system record package
    const payload = {
        playerName: GAME_STATE.currentUser.name,
        playerClass: GAME_STATE.currentUser.class,
        playerGender: GAME_STATE.currentUser.gender,
        moduleKey: GAME_STATE.currentModule,
        questionText: q.text,
        chosenAnswer: finalAnswer
    };
    
    // Ship record data over to the Telegram bridge file pipeline
    if (typeof sendVaultTelemetry === "function") {
        sendVaultTelemetry(payload);
    } else {
        console.warn("⚠️ [DATA LINK] Telegram submission channel offline.");
    }

    // Advance UI metadata scores
    GAME_STATE.userStreak += 1;
    const streakField = document.getElementById("dash-streak-val");
    if (streakField) streakField.innerText = `🔥 ${GAME_STATE.userStreak}`;
    
    // Initialize cross-screen interstitial card modal
    showCelebration();
}

/**
 * 7. HIGH-FIDELITY MODAL GATEWAY
 * Displays verification confirmation to prevent state freezing on mobile layers.
 */
function showCelebration() {
    const overlay = document.getElementById("celebration-overlay");
    const continueBtn = document.getElementById("btn-celeb-continue");
    
    if (overlay && continueBtn) {
        // Enforce strong style rendering properties directly on DOM
        overlay.classList.remove("hidden");
        overlay.style.display = "flex"; 
        
        console.log("🎉 [MODAL] Interstitial display rendered safely.");
        
        // Re-bind handler cleanly to isolate interface clicks
        continueBtn.onclick = function() {
            overlay.classList.add("hidden");
            overlay.style.display = "none";
            
            // Increment pointer reference parameters safely
            GAME_STATE.currentQuestionIndex += 1;
            loadQuestion(GAME_STATE.currentModule, GAME_STATE.currentQuestionIndex);
        };
    } else {
        // Fallback safety route if overlay structural design elements miss matching IDs
        console.warn("🚨 [UI BUG] Overlay ID elements missing. Skipping visual frame directly.");
        GAME_STATE.currentQuestionIndex += 1;
        loadQuestion(GAME_STATE.currentModule, GAME_STATE.currentQuestionIndex);
    }
}

/**
 * 8. ENDGAME CONGRATULATIONS SEQUENCE
 * Fires final digital passport configuration view panels.
 */
function showRewardScreen() {
    const gameplayView = document.getElementById("screen-gameplay");
    const rewardView = document.getElementById("screen-reward");
    
    if (gameplayView) gameplayView.classList.add("hidden");
    if (rewardView) {
        rewardView.classList.remove("hidden");
        rewardView.style.display = "block";
    }
    console.log("🦅 [COMPLETED] Operator successfully cleared vault parameters.");
}
