/* ==========================================================================
   🧬 THE SSS3 SILHOUETTE HUB - EXTRA-LONG EASY-READ QUESTION MATRIX ENGINE
   ========================================================================== */

const VAULT_QUESTIONS = {
    // 🗳️ MODULE 1: ANONYMOUS VOTING POOLS (Shuffled Class Names)
    voting: [
        {
            id: "v1",
            text: "Who be the person wey standardly dey sleep for class when teacher dey write on board? 😴",
            type: "shuffle_all"
        },
        {
            id: "v2",
            text: "If exam condition block up, who dey most likely copy another person expo clean? 👀",
            type: "shuffle_all"
        },
        {
            id: "v3",
            text: "Who go read book pass everybody for night but go tell class say 'Omo, I no read anything'? 📚",
            type: "shuffle_all"
        },
        {
            id: "v4",
            text: "Among all the SSS3 boys, who you think say dey most handsome, caring, and clean? ✨",
            type: "shuffle_boys"
        },
        {
            id: "v5",
            text: "Who get the ultimate 'Late Comer' crown wey never enter IGS school gate early before? 🏃‍♂️",
            type: "shuffle_all"
        },
        {
            id: "v6",
            text: "Who be the most quiet and gentlest girl across the whole SSS3 block? 😇",
            type: "shuffle_girls"
        },
        {
            id: "v7",
            text: "Who be the chief arguer wey fit shout and argue with teacher until lesson period finish? 🗣️",
            type: "shuffle_all"
        },
        {
            id: "v8",
            text: "Who be the person wey dey always hide candy and chin-chin inside bag but go say he stingy? 🍪",
            type: "shuffle_all"
        },
        {
            id: "v9",
            text: "If argument click up for corridor, who be the first person to start shouting 'No cap!'? 🚂",
            type: "shuffle_all"
        },
        {
            id: "v10",
            text: "Who be the fashionista wey dey adjust school uniform make e look like runway cloth? 👔",
            type: "shuffle_all"
        }
    ],

    // 🧠 MODULE 2: TRIVIA DESTRUCTION (IGS Teacher Legends & Slangs)
    trivia: [
        {
            id: "t1",
            text: "What be Mr. Faponda's signature slang whenever he catches you looking back row? 🗣️",
            options: ["'O boy turn belly!' 🔄", "'Lie down there!' 🪎", "'Pay my school fees!' 💸", "'Are you getting dat?!' 📊"]
        },
        {
            id: "t2",
            text: "What does Mr. Faponda do instantly if he hears you speaking Yoruba inside the class block? 🪙",
            options: ["He go collect fine money from you sharp sharp! 💰", "He go tell you to double your velocity 🏃‍♂️", "He go give you high five 🖐️", "Nothing go happen 🤫"]
        },
        {
            id: "t3",
            text: "What is the Physics teacher always saying every two seconds when he is teaching? 🌌",
            options: ["'Are you getting dat?!' 📊", "'You pay to who?' 💳", "'O boy turn belly!' 🔄", "'High five!' 🖐️"]
        },
        {
            id: "t4",
            text: "Our Mathematics teacher Mr. Oriade go open all his teeth like madman and scream what? 🧮",
            options: ["'High five!' 🖐️", "'Pay my school fees!' 💵", "'Turn your belly!' 🔄", "'Water game!' 📱"]
        },
        {
            id: "t5",
            text: "Which teacher do students call 'You pay to who' across the school corridors? 🛑",
            options: ["The Physics Teacher ⚡", "Mr. Faponda 🔄", "Mr. Oriade 🧮", "The Sideways Principal 🦅"]
        },
        {
            id: "t6",
            text: "How our Principal dey waka when he is rushing with speed to catch late comers? 🏃‍♂️",
            options: ["He go waka while bending his side 🦅", "He dey run straight like rocket 🚀", "He dey waka backward style 🕺", "He dey fly over lab roof 🏢"]
        },
        {
            id: "t7",
            text: "What does our Principal always shout when your school fees never complete? 💵",
            options: ["'Pay my school fees!' 💵", "'Is this a marketplace?!' 🏪", "'High five!' 🖐️", "'O boy turn belly!' 🔄"]
        }
    ],

    // ⚽ MODULE 3: THE FOOTBALL LOUNGE (IGS Glory & Phone Roasts)
    football: [
        {
            id: "f1",
            text: "Why did Orota match beat IGS team last time when 90 minutes had already ended? ⚽",
            options: ["Because of cheat penalty at the last second! 😭", "Because our team went to sleep 😴", "Because ball burst 🎈", "Orota players carry juju 🧙‍♂️"]
        },
        {
            id: "f2",
            text: "When football banter start for class, which player can play and run rough like Sodiq match? 🏃‍♂️",
            options: ["Olumide ⚽", "Poco 📱", "Isaac 🦅", "Qarus 🧵"]
        },
        {
            id: "f3",
            text: "If Poco look your phone screen, laugh out loud, and call am 'Water Game', what mean? 📱",
            options: ["Your phone be local panel button water game! 💧", "You are using iPhone 14 Pro 📱", "Your device too choke ✨", "Your screen clean 🕶️"]
        },
        {
            id: "f4",
            text: "Who be the real football Kings wey no other school fit face for open field? 👑",
            options: ["IGS Boys! No school beats us! 🏆", "Orota penalty merchants 📉", "The teachers crew 🛑", "The backrow fans 🤫"]
        },
        {
            id: "f5",
            text: "Which club fan base inside our classroom dey always get high blood pressure pass? 📈",
            options: ["Man United Stress Department 💔", "Arsenal Next Year Believers 🛠️", "Chelsea Emergency Ward 🚑", "Real Madrid Over-Confident Crew 🏆"]
        }
    ],

    // 🤫 MODULE 4: THE CRUSH VAULT (Confession Gateways - Users Type Answers)
    crush: [
        {
            id: "c1",
            text: "Who be that your special classmate wey your mind dey skip anytime he/she waka pass your desk? 💕",
            type: "confession_input"
        },
        {
            id: "c2",
            text: "If you want to send anonymous love letter to one person in SSS3, type her/his real name here: 💌",
            type: "confession_input"
        },
        {
            id: "c3",
            text: "Type the name of the classmate you think say go marry early pass everybody for this school: 💍",
            type: "confession_input"
        },
        {
            id: "c4",
            text: "Who be the person you dey secretly admire from far but you dey too shy to talk to? Type name: 🤫",
            type: "confession_input"
        },
        {
            id: "c5",
            text: "If you could go to graduation dinner party with one person, who would it be? Type name: 🥂",
            type: "confession_input"
        }
    ],

    // 📊 MODULE 5: WILL YOU RATHER (Simple Street Choices)
    wyr: [
        {
            id: "w1",
            text: "WOULD YOU RATHER stay in dark corner behind lab with arrogant Misturah (Ila)... OR sit next to Sade for class? 💀",
            options: ["Misturah Arrogant Corner 👑", "Sade Sitting Layout 🪑"]
        },
        {
            id: "w2",
            text: "WOULD YOU RATHER lock hands with Rodia for the set photo... OR let Mr. Faponda catch you with heavy expo? 📸",
            options: ["Rodia Hand-Holding Nightmare 🤝", "Faponda's Classroom Smoke 🪵"]
        },
        {
            id: "w3",
            text: "WOULD YOU RATHER make Qarus tailor your graduation cloth and it tear on stage... OR let your phone ring inside exam hall? 🧵",
            options: ["Qarus Wardrobe Malfunction 🪡", "Ringtone Disgrace Matrix 📱"]
        },
        {
            id: "w4",
            text: "WOULD YOU RATHER open your mouth and show Esther's 'Eyin teeth' smile... OR have Bolu's 'Kelebe mucus' nose for one day? 👃",
            options: ["Esther Teeth Style 😁", "Bolu Mucus Setup 👃"]
        },
        {
            id: "w5",
            text: "WOULD YOU RATHER join squad with Demilade and Favour Boy to push rank on Free Fire... OR get automatic score for Chemistry? 🎮",
            options: ["Free Fire Squad Grind 🎮", "Chemistry Score Injection 🧪"]
        },
        {
            id: "w6",
            text: "WOULD YOU RATHER get caught by the Principal walking sideways... OR pay Mr. Faponda 500 naira for Yoruba language? 💸",
            options: ["Principal Sideways Chase 🦅", "Faponda Fine Cashout 💰"]
        },
        {
            id: "w7",
            text: "WOULD YOU RATHER have your secret crush revealed to the class group chat... OR become Olumide's match tackle target for field? ⚽",
            options: ["Crush Leak Explosion 📡", "Olumide Tackle Bootcamp 🪵"]
        }
    ],

    // 💥 MODULE 6: TRUTH OR DARE TERMINAL (Confession Text Inputs & Choices Mixed)
    truth_dare: [
        {
            id: "td1",
            text: "CONFESSION TRUTH: Type the name of the person you dey secretly avoid pass for your whole class block! 🤫",
            type: "confession_input"
        },
        {
            id: "td2",
            text: "DARE: Look at the person sitting closest to you right now. Call their device 'Water game' out loud like Poco and walk away! 📱",
            options: ["Execution logged successfully ✅", "I chickened out (Too scared) 🐔"]
        },
        {
            id: "td3",
            text: "CONFESSION TRUTH: Who be the classmate wey you lowkey know say he/she dey carry expo pass for exam hall? Type name: 📝",
            type: "confession_input"
        },
        {
            id: "td4",
            text: "DARE: Go straight to Ayo Girl (Skelebe)'s WhatsApp chat right now and tell her to stop posting 80 statuses and videos in one day! 🤐",
            options: ["Text deployed successfully 🚀", "I lack the clearance level 🥶"]
        },
        {
            id: "td5",
            text: "CONFESSION TRUTH: If you get power to delete one arrogant person from the graduation dinner list, who be that? Type name: 💀",
            type: "confession_input"
        },
        {
            id: "td6",
            text: "DARE: Stand up or tap your desk right now, look at your teacher, and do lowkey celebration without getting caught! 🕺",
            options: ["Mission accomplished ✅", "Too much risk 🥶"]
        },
        {
            id: "td7",
            text: "CONFESSION TRUTH: Type out the biggest secret lie you have told a teacher in this school to escape getting flogged! 🙊",
            type: "confession_input"
        },
        {
            id: "td8",
            text: "CONFESSION TRUTH: Who be the person wey match choice pairing setup say her relationship with Poco too choke? Type name: 💑",
            type: "confession_input"
        }
    ]
};

function getQuestionsByModule(moduleKey) {
    return VAULT_QUESTIONS[moduleKey] || [];
}

