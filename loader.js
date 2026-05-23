/* ==========================================================================
   ⏳ THE SSS3 SILHOUETTE HUB - CORE TERMINAL ANIMATION ENGINE
   ========================================================================== */

const TERMINAL_STRINGS = [
    "📡 Establishing secure handshake with IGS database nodes...",
    "🔑 Bypassing local classroom firewall parameters...",
    "🕵️‍♂️ Anonymity cloak deployment: COMPLETE [100% Invisible]",
    "🧪 Scanning Chemistry Practical formulas... [No expo tracked yet]",
    "🦅 Analyzing Principal sideways sprint velocity... [Bending active]",
    "🔄 Syncing Mr. Faponda's 'O boy turn belle' collection system...",
    "🧮 Initializing Mr. Oriade's teeth-opening high-five matrix...",
    "📱 Scanning local devices... [Poco's iPhone 14 Pro detected]",
    "💧 Dropping water game filters on low tier phone layouts...",
    "⚽ Reviewing IGS vs Orota 90th-minute penalty heartbreak logs...",
    "🎮 Syncing Free Fire ranking data for Demilade and Favour Boy...",
    "📡 Warning: Ayo Girl (Skelebe) has posted 80+ statuses today...",
    "💥 Compiling Will-You-Rather naughty smoke pipelines...",
    "🔥 EXECUTING PREMIUM VAULT ENVIRONMENT..."
];

/**
 * Fires the scrolling terminal text sequence before opening the selected screen view
 */
function runTerminalSequence(callback) {
    const screenLogin = document.getElementById("screen-login");
    const screenLevel = document.getElementById("screen-level");
    const screenDashboard = document.getElementById("screen-dashboard");
    const screenLoading = document.getElementById("screen-loading");
    const logContainer = document.getElementById("terminal-logs");
    const statusText = document.getElementById("loading-status");

    // Hide visible structural layouts and show loading screen
    if (screenLogin) screenLogin.classList.add("hidden");
    if (screenLevel) screenLevel.classList.add("hidden");
    if (screenDashboard) screenDashboard.classList.add("hidden");
    if (screenLoading) screenLoading.classList.remove("hidden");

    // Reset container contents
    logContainer.innerHTML = "";
    let lineIndex = 0;

    function printNextLogLine() {
        if (lineIndex < TERMINAL_STRINGS.length) {
            // Build paragraph block elements dynamically
            const p = document.createElement("p");
            p.style.margin = "6px 0";
            p.style.color = "#00ff3c";
            p.style.fontFamily = "'Courier New', Courier, monospace";
            p.style.fontSize = "13px";
            p.style.opacity = "0";
            p.style.transform = "translateX(-6px)";
            p.style.transition = "all 0.12s ease-out";
            p.innerHTML = `> ${TERMINAL_STRINGS[lineIndex]}`;
            
            logContainer.appendChild(p);
            
            // Auto scroll to keep latest lines in focus
            logContainer.scrollTop = logContainer.scrollHeight;

            // Trigger smooth transition fade-in hook
            setTimeout(() => {
                p.style.opacity = "1";
                p.style.transform = "translateX(0)";
            }, 10);

            // Dynamically alter status message headline text as loading proceeds
            if (lineIndex === Math.floor(TERMINAL_STRINGS.length / 2)) {
                statusText.innerText = "DECRYPTING CORRIDOR Banns & BLOCK SECRETS...";
            } else if (lineIndex === TERMINAL_STRINGS.length - 2) {
                statusText.innerText = "ALL SYSTEMS CHOKE! LAUNCHING INTERFACE MAP...";
            }

            lineIndex++;
            // Randomized delayed speed settings to simulate a processing computing module
            let dynamicDelay = Math.floor(Math.random() * 180) + 120;
            setTimeout(printNextLogLine, dynamicDelay);
        } else {
            // Loading script execution complete. Transfer execution thread back to app engine
            setTimeout(() => {
                screenLoading.classList.add("hidden");
                if (callback) callback();
            }, 500);
        }
    }

    // Initialize line drawing process loop
    printNextLogLine();
      }
      
