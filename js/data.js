/**
 * =========================================================
 * ONYX | THE ARCHIVE DATABASE (ENCRYPTED ASSETS)
 * Version: 1.0.4
 * Description: Curated member profiles with verified metadata.
 * =========================================================
 */

const ARCHIVE_PROFILES = [
    {
        id: "ONYX-001",
        name: "Amara",
        age: 23,
        location: "Maitama, Abuja",
        bio: "A connoisseur of contemporary African art and high-fashion editorial. Amara seeks intellectual synergy and high-vibration social circles.",
        image: "pics/img1.png",
        verified: true,
        membershipTier: "Gold",
        interests: ["Art Curation", "Wine Tasting", "Yachting"],
        vettingDate: "Jan 2026",
        compatibilityScore: 94
    },
    {
        id: "ONYX-002",
        name: "Chioma",
        age: 25,
        location: "Ikoyi, Lagos",
        bio: "Architectural designer with a focus on sustainable luxury. Her lifestyle is defined by global travel and a preference for understated elegance.",
        image: "pics/img2.png",
        verified: true,
        membershipTier: "Platinum",
        interests: ["Architecture", "Global Travel", "Investment"],
        vettingDate: "Feb 2026",
        compatibilityScore: 89
    },
    {
        id: "ONYX-003",
        name: "Zainab",
        age: 22,
        location: "Asokoro, Abuja",
        bio: "Specializing in digital asset management and philanthropy. Zainab values privacy, discretion, and curated evening experiences.",
        image: "pics/img3.png",
        verified: true,
        membershipTier: "Gold",
        interests: ["Tech", "Philanthropy", "Polo"],
        vettingDate: "March 2026",
        compatibilityScore: 91
    },
    {
        id: "ONYX-004",
        name: "Kemi",
        age: 24,
        location: "Victoria Island, Lagos",
        bio: "Public relations strategist for international luxury brands. Kemi navigates the intersection of business and high-society networking.",
        image: "pics/img4.png",
        verified: true,
        membershipTier: "Diamond",
        interests: ["Marketing", "Fashion", "Fine Dining"],
        vettingDate: "March 2026",
        compatibilityScore: 97
    },
    {
        id: "ONYX-005",
        name: "Tega",
        age: 26,
        location: "Lekki Phase 1, Lagos",
        bio: "An independent film producer with a passion for storytelling and cinematic aesthetics. Seeking a partnership built on creative ambition.",
        image: "pics/img5.png",
        verified: true,
        membershipTier: "Gold",
        interests: ["Cinema", "Photography", "Golf"],
        vettingDate: "April 2026",
        compatibilityScore: 85
    },
    {
        id: "ONYX-006",
        name: "Ify",
        age: 23,
        location: "Jabi, Abuja",
        bio: "Master’s student in International Relations. Ify balances academic rigour with an appreciation for the city's most exclusive lounges.",
        image: "pics/img6.png",
        verified: true,
        membershipTier: "Platinum",
        interests: ["Diplomacy", "Tennis", "Opera"],
        vettingDate: "April 2026",
        compatibilityScore: 92
    },
    {
        id: "ONYX-007",
        name: "Nneka",
        age: 27,
        location: "Gra, Port Harcourt",
        bio: "Energy sector consultant. Nneka’s presence is commanding yet refined, focusing on long-term legacy and lifestyle optimization.",
        image: "pics/img7.png",
        verified: true,
        membershipTier: "Diamond",
        interests: ["Energy", "Equestrian", "Real Estate"],
        vettingDate: "April 2026",
        compatibilityScore: 98
    },
    {
        id: "ONYX-008",
        name: "Sade",
        age: 21,
        location: "Ikeja, Lagos",
        bio: "Emerging fashion model and wellness advocate. Sade represents the new era of Lagosian beauty—vibrant, healthy, and focused.",
        image: "pics/img8.png",
        verified: true,
        membershipTier: "Gold",
        interests: ["Fitness", "Modeling", "Skincare"],
        vettingDate: "May 2026",
        compatibilityScore: 88
    },
    {
        id: "ONYX-009",
        name: "Halima",
        age: 24,
        location: "Kano / Abuja",
        bio: "Heritage-focused entrepreneur. Halima combines traditional values with a modern business mindset, seeking a balance of both worlds.",
        image: "pics/img9.png",
        verified: true,
        membershipTier: "Platinum",
        interests: ["Textiles", "History", "Business"],
        vettingDate: "May 2026",
        compatibilityScore: 93
    },
    {
        id: "ONYX-010",
        name: "Ese",
        age: 25,
        location: "Benin City / Lagos",
        bio: "A legal mind with a penchant for high-stakes negotiation. Ese enjoys the finer things in life, from bespoke tailoring to private tastings.",
        image: "pics/img10.png",
        verified: true,
        membershipTier: "Diamond",
        interests: ["Law", "Bespoke Fashion", "Jazz"],
        vettingDate: "May 2026",
        compatibilityScore: 96
    }
];

/**
 * --- DATABASE UTILITIES ---
 * These functions allow the app to interact with the archive
 */

const ArchiveManager = {
    // Fetches all profiles
    getAllMembers: () => ARCHIVE_PROFILES,
    
    // Fetches a single member by their ID
    getMemberById: (id) => ARCHIVE_PROFILES.find(member => member.id === id),
    
    // Simulates a "Matching Algorithm" based on the user's name or city
    getTopMatches: () => {
        // Returns the Diamond tier members first (for premium feel)
        return [...ARCHIVE_PROFILES].sort((a, b) => b.compatibilityScore - a.compatibilityScore);
    }
};

// Prevent the data from being accidentally modified by other scripts
Object.freeze(ARCHIVE_PROFILES);

