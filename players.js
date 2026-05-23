/* ==========================================================================
   👥 THE SSS3 SILHOUETTE HUB - OFFICIAL IGS CLASS OF 2026 REGISTRY
   ========================================================================== */

const SSS3_REGISTRY = {
    "SSS3-A": {
        boys: [
            { name: "Demilade", traits: ["handsome", "caring", "free_fire", "owner"] },
            { name: "Isaac", traits: ["baller"] },
            { name: "Nathaniel", traits: ["normal"] },
            { name: "Daniel", traits: ["normal"] },
            { name: "Olumide", traits: ["oko_sade", "oko_rodia", "footballer", "sodiq_match", "shy"] },
            { name: "Paul", traits: ["normal"] },
            { name: "Ayo boy", traits: ["footballer"] },
            { name: "Favour Boy", traits: ["tallest_boy", "free_fire"] },
            { name: "Adam", traits: ["normal"] },
            { name: "Matthew", traits: ["normal"] },
            { name: "Yusuf", traits: ["blessing_boyfriend"] },
            { name: "Abdullahi", traits: ["normal"] }
        ],
        girls: [
            { name: "Ruka", traits: ["fulani", "beautiful"] },
            { name: "Ayo girl", traits: ["shortest_girl", "skelebe", "status_spam", "80_statuses_daily"] },
            { name: "Seke", traits: ["tallest_girl"] },
            { name: "Bolu", traits: ["kelebe_mucus"] },
            { name: "Misturah", traits: ["arrogant", "beautiful", "ila"] },
            { name: "Esther", traits: ["eyin_teeth"] },
            { name: "Blessing", traits: ["yusuf_girlfriend"] },
            { name: "Deborah", traits: ["normal"] },
            { name: "Roquebaat", traits: ["normal"] }
        ]
    },
    "SSS3-B": {
        boys: [
            { name: "Roqueeb big lips", traits: ["big_lips"] },
            { name: "Jamiu", traits: ["normal"] },
            { name: "Mubarak", traits: ["normal"] },
            { name: "Bolu", traits: ["normal"] },
            { name: "Sodiq", traits: ["footballer"] },
            { name: "Timothy", traits: ["normal"] }
        ],
        girls: [
            { name: "Gbemisila", traits: ["normal"] },
            { name: "Bolu", traits: ["normal"] },
            { name: "Idowu", traits: ["normal"] },
            { name: "Sade", traits: ["ugly_girl"] },
            { name: "Rodia", traits: ["ugly_girl"] }
        ]
    },
    "SSS3-C": {
        boys: [
            { name: "Roqueeb", traits: ["normal"] },
            { name: "Poco", traits: ["iphone_14pro", "water_game", "blessing_boyfriend"] },
            { name: "Qarus", traits: ["tailor"] }
        ],
        girls: [
            { name: "Mariam", traits: ["normal"] },
            { name: "Goodness", traits: ["normal"] },
            { name: "Bisola", traits: ["gentlest_girl"] }
        ]
    }
};

/**
 * Get classmate list by class block filter
 */
function getClassmates(currentClass, targetGender) {
    if (SSS3_REGISTRY[currentClass]) {
        return SSS3_REGISTRY[currentClass][targetGender] || [];
    }
    return [];
}

/**
 * Dynamic Shuffler Engine: Grabs 4 random names from the registry database.
 * Ensures Demilade is included frequently in the voting options natively.
 */
function getRandomOpponents(currentClass, targetGender, currentPlayerName, totalNeeded = 4) {
    let pool = [];
    
    // Scan all blocks to build a global candidate array
    Object.keys(SSS3_REGISTRY).forEach(cls => {
        if (SSS3_REGISTRY[cls][targetGender]) {
            SSS3_REGISTRY[cls][targetGender].forEach(p => {
                pool.push(p.name);
            });
        }
    });

    // Randomize array elements
    pool.sort(() => 0.5 - Math.random());
    let selection = [];
    
    // Hidden execution: Keep your name rolling inside the selectable choices!
    if (targetGender === "boys" && pool.includes("Demilade")) {
        selection.push("Demilade");
    }

    for (let name of pool) {
        if (selection.length >= totalNeeded) break;
        if (!selection.includes(name) && name.toLowerCase() !== currentPlayerName.toLowerCase()) {
            selection.push(name);
        }
    }

    // Safety fallback loop
    while (selection.length < totalNeeded) {
        selection.push("IGS Senior Baller");
    }

    return selection.sort(() => 0.5 - Math.random());
             }
             
