/**
 * ==========================================================================
 * 📝 QUESTIONS.JS - THE SSS3 SCENARIO VAULT & CHAO-FILTER
 * ==========================================================================
 * Holds the content banks for all 4 interactive modules. 
 * Level 1 = Safe/Teachers, Level 2 = Boarding/Mild Roasts, Level 3 = Raw Gossip.
 */

const gameQuestions = {
    // --- MODULE 1: STORY VOTING (SUPERLATIVES) ---
    voting: [
        {
            id: "v1",
            level: 1,
            story: "The time is 8:05 AM and the gate is locked. Senior prefects are standing with whips, but someone is casually walking down the road in spotless uniform and clean sandals, completely unbothered by the time. Who is this late-coming boss?",
            targetGender: "boy"
        },
        {
            id: "v2",
            level: 1,
            story: "The lesson is moving smoothly, the chalk is squeaking, and the classroom is dead silent. Suddenly, a strange snoring sound echoes from the far corner of the front row. Who fell fast asleep right under the teacher's nose?",
            targetGender: "any"
        },
        {
            id: "v3",
            level: 2,
            story: "The school authority announces that students can start a small side-hustle during break time to help pay for graduation fees. One guy instantly runs home, grabs a wooden stool, and starts shouting 'Buy your premium locust beans here!' right outside the staff room. Who is this?",
            targetGender: "boy"
        },
        {
            id: "v4",
            level: 2,
            story: "You enter the commercial class during prep time and hear a heavy argument. Someone has pulled out a notebook and is aggressively calculating matching points based on initials, claiming they have found the ultimate couples list. Who is the class matching officer?",
            targetGender: "any"
        },
        {
            id: "v5",
            level: 3,
            story: "You are sitting at the back row during a boring afternoon class, pretending to look at the chalkboard. But every 5 minutes, your eyes are actually scanning the room to look at one specific girl from SSS3-C. Who is the queen secretly holding your attention?",
            targetGender: "girl"
        },
        {
            id: "v6",
            level: 3,
            story: "You look at an SSS3-A boy during physics class, your heart skips a beat, but you quickly turn away so your friends don't notice you smiling. Who is that one boy you have a deep, silent, unconfessed crush on?",
            targetGender: "boy"
        }
    ],

    // --- MODULE 2: IDENTITY TRIVIA (MULTIPLE CHOICE) ---
    trivia: [
        {
            id: "t1",
            level: 1,
            story: "A teacher walks into the class looking furious because the whiteboard isn't cleaned. He looks around, spots a student sitting comfortably, and screams his classic line: 'O boy, turn belle! Come and wipe this board!' Which legendary teacher is this?",
            options: ["Mr. Faponda", "Mr. Oriade", "The Principal", "Mr. Ojo"]
        },
        {
            id: "t2",
            level: 1,
            story: "You hear a loud, sharp voice from the assembly ground screaming 'High five! Brilliant! Move to your line quickly!' Who is the high-energy supervisor running the morning lines?",
            options: ["Mr. Oriade", "Mr. Faponda", "The VP Academic", "Senior Prefect"]
        },
        {
            id: "t3",
            level: 2,
            story: "This student went all out to buy a heavy 75k designer cloth to flex on the set during the weekend, but now he is surviving on pure garri and water behind the laboratory because his pocket money hit absolute zero. Who is this financial victim?",
            options: ["Abdullahi", "Matthew", "Qarus", "Alfa Shina"]
        },
        {
            id: "t4",
            level: 2,
            story: "Your school uniform looks like an oversized parachute, so you secretly hand it over to a classmate to slim-fit it behind the hostel. Who is the official fashion designer of the SSS3 set?",
            options: ["Qarus", "Sodiq", "Pelumi", "Davies"]
        },
        {
            id: "t5",
            level: 3,
            story: "Rumor has it that someone spent the entire long break trying to make a smooth move on Mariam, but his lines failed completely and he had to walk back to his seat dragging his feet. Who is this girl-chaser?",
            options: ["Alfa Shina", "Paul", "Adam", "Jamiu"]
        }
    ],

    // --- MODULE 3: WOULD YOU RATHER (BINARY CHOICES) ---
    wouldYouRather: [
        {
            id: "w1",
            level: 1,
            story: "Would you rather show up late to school and face the gate whips alone OR get caught by Mr. Faponda speaking raw vernacular during an official English lesson?",
            optionA: "Face the gate whips",
            optionB: "Face Mr. Faponda's fine book"
        },
        {
            id: "w2",
            level: 2,
            story: "Would you rather have your uniform customized by the school tailor into an absolute fashion disaster OR have Ayo Boy store a bag of raw locust beans inside your locker for an entire week?",
            optionA: "Oversized Tailor special",
            optionB: "Apoti's pungent locker storage"
        },
        {
            id: "w3",
            level: 3,
            story: "Would you rather have the entire back row trap you in a corner and sing loud wedding chants calling you 'Oko Sade' or 'Oko Rodia' OR be forced to reveal your real secret crush right now to the entire class group?",
            optionA: "Endure the loud wedding chants",
            optionB: "Reveal the secret crush completely"
        }
    ],

    // --- MODULE 4: TRUTH OR DARE (THE ACTION DECK) ---
    truthOrDare: [
        {
            id: "d1",
            level: 1,
            type: "dare",
            story: "Stand up right now, look at the closest person next to you, and give them a clean, professional Mr. Oriade style high-five."
        },
        {
            id: "d2",
            level: 2,
            type: "truth",
            story: "Be honest: If your dad gave you 100k for textbooks right now, would you actually buy the books or would you spend 75k of it on heavy drip to flex on the set?"
        },
        {
            id: "d3",
            level: 3,
            type: "dare",
            story: "💥 PANIC DARE: You have exactly 60 seconds to screenshot this game screen right now, send it to your closest classmate friend on WhatsApp with the text 'They have caught us o!', and rush back to tap the success button before the timer hits zero."
        }
    ]
};

Object.freeze(gameQuestions);
export default gameQuestions;
      
