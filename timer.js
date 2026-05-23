/* ==========================================================================
   ⏱️ THE SSS3 SILHOUETTE HUB - NEON COUNTDOWN TIMER ENGINE
   ========================================================================== */

let GAME_TIMER_INTERVAL = null;
let TIME_REMAINING = 0;
const MAX_ROUND_TIME = 20; // 20 seconds per question so they decide sharp sharp!

/**
 * Starts the shrinking countdown bar layout
 * @param {Function} onTimeOutCallback - Function to call when timer hits zero
 */
function startGameplayTimer(onTimeOutCallback) {
    const timerBar = document.getElementById("game-timer-bar");
    if (!timerBar) return;

    // Reset old timer lines
    clearInterval(GAME_TIMER_INTERVAL);
    TIME_REMAINING = MAX_ROUND_TIME;
    
    // Reset visual bar styling to 100% full
    timerBar.style.width = "100%";
    timerBar.style.backgroundColor = "var(--neon-green)";

    // Start processing cycle every 100ms for smooth fluid movement
    const tickRate = 100; 
    const totalTicks = (MAX_ROUND_TIME * 1000) / tickRate;
    let currentTick = 0;

    GAME_TIMER_INTERVAL = setInterval(() => {
        currentTick++;
        let percentage = ((totalTicks - currentTick) / totalTicks) * 100;
        
        // Update bar width on screen
        timerBar.style.width = `${percentage}%`;

        // Shift color from clean green to dangerous red near completion
        if (percentage < 35) {
            timerBar.style.backgroundColor = "var(--accent-red)";
        } else if (percentage < 65) {
            timerBar.style.backgroundColor = "var(--neon-gold)";
        }

        // Timer reaches zero condition
        if (currentTick >= totalTicks) {
            clearInterval(GAME_TIMER_INTERVAL);
            if (onTimeOutCallback) {
                onTimeOutCallback();
            }
        }
    }, tickRate);
}

/**
 * Instantly kills the ticking interval thread
 */
function stopGameplayTimer() {
    if (GAME_TIMER_INTERVAL) {
        clearInterval(GAME_TIMER_INTERVAL);
    }
}

