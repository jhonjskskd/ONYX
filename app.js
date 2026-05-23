/* ==========================================================================
   🚀 THE SSS3 SILHOUETTE HUB - MASTER APPLICATION CONTROLLER (FINAL)
   ========================================================================== */

/**
 * This is the central nerve system of the Silhouette Hub.
 * It governs all DOM interaction, navigation state, and security validation.
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("🦅 [SYSTEM INITIALIZED] Silhouette Hub Controller Loaded...");

    // 1. SELECTORS & DOM CACHING
    const btnAccept = document.getElementById("btn-accept-policy");
    const btnEnter = document.getElementById("btn-enter-vault");
    const btnExit = document.getElementById("btn-game-exit");
    
    // 2. POLICY & DISCLAIMER HANDLING
    if (btnAccept) {
        btnAccept.addEventListener("click", function() {
            const disclaimer = document.getElementById("disclaimer-panel");
            const inputs = document.getElementById("login-form-inputs");
            
            if (disclaimer && inputs) {
                disclaimer.style.opacity = "0";
                setTimeout(() => {
                    disclaimer.classList.add("hidden");
                    inputs.classList.remove("hidden");
                }, 300);
            }
        });
    }

    // 3. AUTHENTICATION & LOGIN LOGIC
    if (btnEnter) {
        btnEnter.addEventListener("click", function() {
            const nameField = document.getElementById("user-name");
            const classField = document.getElementById("user-class");
            const genderContainer = document.querySelectorAll(".gender-btn");
            
            let selectedGender = "boy";
            genderContainer.forEach(btn => {
                if(btn.classList.contains("active")) {
                    selectedGender = btn.dataset.gender;
                }
            });

            // Perform deep validation check
            if (!nameField.value || nameField.value.length < 2) {
                alert("Oga, enter your proper name abeg!");
                return;
            }
            if (!classField.value) {
                alert("Select your class range!");
                return;
            }

            console.log(`📡 [LOGIN] Authenticating session for: ${nameField.value}`);

            // Trigger the transition sequence
            if (initializeUserSession(nameField.value, classField.value, selectedGender)) {
                runTerminalSequence(() => {
                    document.getElementById("screen-login").classList.add("hidden");
                    document.getElementById("screen-level").classList.remove("hidden");
                });
            }
        });
    }

    // 4. NAVIGATION & GENDER TOGGLE ENGINE
    const genderBtns = document.querySelectorAll(".gender-btn");
    genderBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            genderBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
        });
    });

    const levelCards = document.querySelectorAll(".level-card");
    levelCards.forEach(card => {
        card.addEventListener("click", function() {
            console.log("📂 [NAVIGATION] Accessing dashboard...");
            runTerminalSequence(() => {
                document.getElementById("screen-level").classList.add("hidden");
                document.getElementById("screen-dashboard").classList.remove("hidden");
            });
        });
    });

    // 5. MODULE LAUNCHER ENGINE
    const moduleCards = document.querySelectorAll(".module-card");
    moduleCards.forEach(card => {
        card.addEventListener("click", function() {
            const moduleKey = card.getAttribute("data-module");
            if (moduleKey) {
                console.log(`🚀 [MODULE] Engaging: ${moduleKey}`);
                launchModule(moduleKey);
            }
        });
    });

    // 6. EMERGENCY EXIT & REBOOT
    if (btnExit) {
        btnExit.addEventListener("click", function() {
            if (confirm("Are you sure you want to reboot the system? All session progress will be lost.")) {
                console.log("🔄 [REBOOT] Reloading application context...");
                window.location.reload();
            }
        });
    }

    // 7. KEYBOARD LISTENER (SECURITY)
    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.shiftKey && event.key === 'I') {
            event.preventDefault();
            console.warn("🚫 [SECURITY] Inspector tools are restricted.");
        }
    });

    console.log("🦅 [SYSTEM READY] Awaiting user interaction...");
});
                                   
