/**
 * ==========================================================================
 * 🗂️ CLASSMATES.JS - THE OFFICIAL SSS3 REGISTRY & NICKNAME VAULT
 * ==========================================================================
 * This file serves as the single source of truth for all student profiles.
 * It maps names, genders, and local sub-context tags for dynamic game generation.
 */

const classmatesDatabase = [
    // ==========================================
    // 🏫 SSS3-A CLASS REGISTRY (The Elite Set)
    // ==========================================
    { 
        id: 1, 
        name: "Davies Demilade", 
        nickname: "Davies Brown / Aparo", 
        class: "SSS3-A", 
        gender: "boy" 
    },
    { 
        id: 2, 
        name: "Matthew", 
        nickname: "Lexus / Oribobi", 
        class: "SSS3-A", 
        gender: "boy" 
    },
    { 
        id: 3, 
        name: "Ayo Boy", 
        nickname: "Apoti", 
        class: "SSS3-A", 
        gender: "boy" 
    },
    { 
        id: 4, 
        name: "Adam", 
        nickname: "Langer", 
        class: "SSS3-A", 
        gender: "boy" 
    },
    { 
        id: 5, 
        name: "Pelumi", 
        nickname: "Poco", 
        class: "SSS3-A", 
        gender: "boy" 
    },
    { 
        id: 6, 
        name: "Olumide", 
        nickname: "Oko Sade", 
        class: "SSS3-A", 
        gender: "boy" 
    },
    { 
        id: 7, 
        name: "Daniel", 
        nickname: "Oko Rodia", 
        class: "SSS3-A", 
        gender: "boy" 
    },
    { 
        id: 8, 
        name: "Favour Boy", 
        nickname: "Agoro", 
        class: "SSS3-A", 
        gender: "boy" 
    },
    { 
        id: 9, 
        name: "Paul", 
        nickname: "Paulo", 
        class: "SSS3-A", 
        gender: "boy" 
    },
    { 
        id: 10, 
        name: "Ayo Girl", 
        nickname: "Skelebe", 
        class: "SSS3-A", 
        gender: "girl" 
    },
    { 
        id: 11, 
        name: "Misturah", 
        nickname: "Ila Okra", 
        class: "SSS3-A", 
        gender: "girl" 
    },
    { 
        id: 12, 
        name: "Bolu", 
        nickname: "Kelebe Mucus", 
        class: "SSS3-A", 
        gender: "girl" 
    },
    { 
        id: 13, 
        name: "Esther", 
        nickname: "Eyin Teeth", 
        class: "SSS3-A", 
        gender: "girl" 
    },
    { 
        id: 14, 
        name: "Deborah", 
        nickname: "Newcomer", 
        class: "SSS3-A", 
        gender: "girl" 
    },

    // ==========================================
    // 🏫 SSS3-B CLASS REGISTRY (The Tailor Crew)
    // ==========================================
    { 
        id: 15, 
        name: "Qarus", 
        nickname: "The Tailor", 
        class: "SSS3-B", 
        gender: "boy" 
    },
    { 
        id: 16, 
        name: "Sodiq", 
        nickname: "Football Baller", 
        class: "SSS3-B", 
        gender: "boy" 
    },
    { 
        id: 17, 
        name: "Jamiu", 
        nickname: "DLS Addict", 
        class: "SSS3-B", 
        gender: "boy" 
    },
    { 
        id: 18, 
        name: "Mubarak", 
        nickname: "Late Crew Leader", 
        class: "SSS3-B", 
        gender: "boy" 
    },
    { 
        id: 19, 
        name: "Timothy", 
        nickname: "Midfield Baller", 
        class: "SSS3-B", 
        gender: "boy" 
    },
    { 
        id: 20, 
        name: "Ruka", 
        nickname: "The Fulani Girl", 
        class: "SSS3-B", 
        gender: "girl" 
    },
    { 
        id: 21, 
        name: "Sade", 
        nickname: "Chant Victim A", 
        class: "SSS3-B", 
        gender: "girl" 
    },
    { 
        id: 22, 
        name: "Rodia", 
        nickname: "Chant Victim B", 
        class: "SSS3-B", 
        gender: "girl" 
    },

    // ==========================================
    // 🏫 SSS3-C CLASS REGISTRY (The Royalty Set)
    // ==========================================
    { 
        id: 23, 
        name: "Bisola", 
        nickname: "Gentle Soul", 
        class: "SSS3-C", 
        gender: "girl" 
    },
    { 
        id: 24, 
        name: "Mariam", 
        nickname: "School Royalty", 
        class: "SSS3-C", 
        gender: "girl" 
    },
    { 
        id: 25, 
        name: "Goodness", 
        nickname: "C Class Star", 
        class: "SSS3-C", 
        gender: "girl" 
    },
    { 
        id: 26, 
        name: "Abdullahi", 
        nickname: "75k Garri Boy", 
        class: "SSS3-C", 
        gender: "boy" 
    },
    { 
        id: 27, 
        name: "Alfa Shina", 
        nickname: "Girl Chaser", 
        class: "SSS3-C", 
        gender: "boy" 
    }
];

// Frozen encapsulation lock to prevent accidental run-time manipulation
Object.freeze(classmatesDatabase);

export default classmatesDatabase;
      
