export interface CycleStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  examples: string[];
}

export interface Pillar {
  id: string;
  title: string;
  tagline: string;
  quote: string;
  points: string[];
  image: string;
  icon: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface ReflectionOption {
  id: string;
  title: string;
  category: string;
  description: string;
}

export interface DiscoverItem {
  id: string;
  type: 'build' | 'idea' | 'perspective' | 'question' | 'experiment' | 'experience' | 'story' | 'project';
  title: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    location: string;
  };
  summary: string;
  image?: string;
  details?: {
    why?: string;
    how?: string;
    cost?: string;
    learned?: string;
    rebuildNotice?: string;
    rules?: string[];
    duration?: string;
    metrics?: string;
  };
  perspectivesCount?: number;
  experimentsCount?: number;
}

export interface QuestionThread {
  id: string;
  question: string;
  category: string;
  perspectives: {
    author: string;
    role: string;
    quote: string;
    tagline: string;
  }[];
}

export interface LifeExperiment {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  rules: string[];
  testing: string;
  measuring: string;
  result: string;
  learned: string;
  participantsCount: number;
}

export interface ProfileCard {
  name: string;
  role: string;
  location: string;
  building: string;
  believes: string;
  exploring: string;
  learned: string;
}

export const MANIFESTO_HERO = {
  brand: "YASLINE",
  title: "WORTH LIVING",
  subtitle: "Build a life worth living. Together.",
  vision: "WORTH LIVING is a place where people build, share, explore, and exchange ideas about living.",
  taglineBold: "A better life isn't something we simply find. It is something we build.",
  heroSummary: "It is not about showing perfect lives. It is about discovering how people actually live, what they believe, what they are building, and what they are learning along the way."
};

export const PHILOSOPHY_SECTION = {
  headline: "WHAT IF WE BUILT LIFE ON PURPOSE?",
  intro: "Modern life has given us more choices, more technology, more products, more information, and more ways to connect.",
  problemStatements: [
    "Busy and overwhelmed by artificial noise",
    "Disconnected despite endless social feeds",
    "Isolated in hyper-connected modern cities",
    "Overstimulated and uncertain about true priorities",
    "Without enough unhurried time for what truly matters"
  ],
  thesis: "We don't believe the answer is to escape modern life. We believe the answer is to redesign the way we live inside it.",
  redefinitions: [
    { label: "A Life", desc: "where work supports life, rather than consumes it." },
    { label: "A Home", desc: "that is more than a place to sleep." },
    { label: "A Community", desc: "that is more than follower counts." },
    { label: "A Business", desc: "that creates value without destroying everything around it." },
    { label: "Success", desc: "measured by what we experience, create, share, and give." }
  ]
};

export const PROGRESSION_STEPS = [
  { step: "01", title: "Couple", desc: "Two people choosing to build a life together. Shared work, shared responsibility, shared dreams." },
  { step: "02", title: "Family", desc: "A home anchor. A foundation of safety, belonging, care, and intergenerational wisdom." },
  { step: "03", title: "Friends", desc: "Deep trust, real presence, shared meals, honest conversations, mutual support." },
  { step: "04", title: "Community", desc: "Neighborhoods and networks of contribution where people know and help one another." },
  { step: "05", title: "Society", desc: "A living example that makes people ask: 'Could we live differently too?'" }
];

export const CYCLE_STEPS: CycleStep[] = [
  {
    id: "create",
    title: "CREATE",
    subtitle: "Make something meaningful",
    description: "Something that did not exist before — a product, a service, a meal, a place, an experience, an idea, a relationship, or an opportunity.",
    iconName: "Sparkles",
    examples: ["Artisan timber craftsmanship", "Shared community dining space", "Useful open-source tool", "Meaningful venture"]
  },
  {
    id: "share",
    title: "SHARE",
    subtitle: "Reach another human life",
    description: "Value becomes meaningful when it touches another life. We share ideas, experiences, knowledge, spaces, skills, resources, and doors.",
    iconName: "Share2",
    examples: ["Mentorship & guidance", "Open studio hours", "Resource pooling", "Collective gathering"]
  },
  {
    id: "exchange",
    title: "EXCHANGE",
    subtitle: "Fair, life-positive exchange",
    description: "Sometimes the exchange is money. Sometimes it is time, knowledge, trust, collaboration, or opening a new door.",
    iconName: "Repeat",
    examples: ["Fair monetary reward", "Skill trading", "Collaborative equity", "Knowledge exchange"]
  },
  {
    id: "sustain",
    title: "SUSTAIN",
    subtitle: "Enough to continue",
    description: "Creation must be sustainable. We keep enough value to pay people, maintain places, support families, invest, and keep creating. Not maximum extraction.",
    iconName: "ShieldCheck",
    examples: ["Fair wages", "Place maintenance", "Reinvestment fund", "Work-life balance"]
  },
  {
    id: "give",
    title: "GIVE",
    subtitle: "Return value to the world",
    description: "When we become stronger, we return value to the ecosystem through time, space, tools, mentorship, opportunities, or capital.",
    iconName: "HeartHandshake",
    examples: ["Community grants", "Free workspace access", "Mentoring youth", "Civic contribution"]
  },
  {
    id: "again",
    title: "CREATE AGAIN",
    subtitle: "Foundation for the next cycle",
    description: "What we learn, earn, build, and receive becomes the foundation for the next creation. Each cycle leaves more capability behind.",
    iconName: "RotateCw",
    examples: ["Compounding impact", "New ventures", "Ecosystem growth", "Legacy building"]
  }
];

export const PILLARS: Pillar[] = [
  {
    id: "home",
    title: "HOME",
    tagline: "A place where life happens.",
    quote: "A home should be more than private infrastructure. It should be a place to belong.",
    image: "/assets/home.jpg",
    icon: "Home",
    points: [
      "A place to rest and recharge deeply",
      "A place to create and express potential",
      "A place to eat together and welcome guests",
      "A place to raise children with presence",
      "A place to work without being consumed by work"
    ]
  },
  {
    id: "community",
    title: "COMMUNITY",
    tagline: "People need people.",
    quote: "A digital connection is not a human connection. A community is not a follower count.",
    image: "/assets/community.jpg",
    icon: "Users",
    points: [
      "Real presence over screen interaction",
      "Deep mutual trust and active contribution",
      "Gatherings for meals, learning, and play",
      "Helping each other build and grow",
      "Belonging to something real"
    ]
  },
  {
    id: "experiences",
    title: "EXPERIENCES",
    tagline: "Don't just consume life. Experience it.",
    quote: "A meaningful life is not measured only by what happened on paper, but by what we actually experienced together.",
    image: "/assets/experience.jpg",
    icon: "Compass",
    points: [
      "Shared meals and slow, unhurried days",
      "Creative workshops and outdoors exploration",
      "Family rituals and local discoveries",
      "Conversations that spark new directions",
      "Simple moments that turn into lifelong memories"
    ]
  },
  {
    id: "build",
    title: "BUILD",
    tagline: "Give potential somewhere to begin.",
    quote: "People don't need another lecture. They need a starting point, a tool, a door opened.",
    image: "/assets/build.jpg",
    icon: "Hammer",
    points: [
      "Providing accessible spaces and tools",
      "Connecting first customers and mentors",
      "Granting time and confidence to test ideas",
      "Unlocking hidden human potential",
      "Making it friction-free to begin"
    ]
  },
  {
    id: "give",
    title: "GIVE",
    tagline: "Everyone has something to contribute.",
    quote: "Not everyone can give the same thing. Everyone can give something.",
    image: "/assets/cycle.jpg",
    icon: "Gift",
    points: [
      "One free afternoon or a useful skill",
      "An unused room or rare equipment",
      "Ten years of accumulated experience",
      "A warm professional introduction",
      "A chance for someone to prove themselves"
    ]
  }
];

export const VALUES_LIST: ValueItem[] = [
  { title: "Time", description: "The non-renewable gift of unhurried presence.", icon: "Clock" },
  { title: "Knowledge", description: "Wisdom shared to save others years of trial.", icon: "BookOpen" },
  { title: "Skill", description: "Mastery applied with care and precision.", icon: "Wrench" },
  { title: "Care", description: "Attention to human wellbeing and dignity.", icon: "Heart" },
  { title: "Trust", description: "The invisible foundation of all collaboration.", icon: "Shield" },
  { title: "Beauty", description: "Aesthetic harmony that uplifts the human spirit.", icon: "Sparkles" },
  { title: "Connection", description: "Real human bonds that alleviate isolation.", icon: "Link" },
  { title: "Opportunity", description: "Opening doors for potential to express itself.", icon: "Key" }
];

export const REFLECTION_OPTIONS: ReflectionOption[] = [
  {
    id: "meal",
    category: "Relationship & Home",
    title: "Host or Share a Meaningful Meal",
    description: "Put away all devices, prepare simple food, and invite someone over for unhurried conversation."
  },
  {
    id: "simplify",
    category: "Less, But Better",
    title: "Remove One Unnecessary Thing",
    description: "Cancel a mind-numbing subscription or clear out physical clutter to make room for presence."
  },
  {
    id: "give_time",
    category: "Contribution",
    title: "Offer One Hour of Skill or Mentorship",
    description: "Share 10 years of your hard-earned experience with someone trying to take their first step."
  },
  {
    id: "experience",
    category: "Life Experience",
    title: "Choose an Outdoor Experience Over Consumption",
    description: "Spend a slow afternoon in nature or exploring local culture instead of passive shopping."
  },
  {
    id: "build_item",
    category: "Creation",
    title: "Start Building a Small Project with Purpose",
    description: "Take the first tangible step toward a project that serves human life rather than just profit."
  }
];

export const MEASUREMENT_COMPARISON = [
  {
    standard: "More Money at any cost",
    yasline: "Financial sustainability that preserves freedom"
  },
  {
    standard: "More Followers & Digital Impressions",
    yasline: "Deep, trusted real-world relationships"
  },
  {
    standard: "More Possessions & Upgrades",
    yasline: "Fewer, higher-quality things built to last"
  },
  {
    standard: "More Work & Constant Burnout",
    yasline: "Time created to actually live the life we build"
  }
];

export const DISCOVER_ITEMS: DiscoverItem[] = [
  {
    id: "build-1",
    type: "build",
    title: "Off-Grid Timber Cabin & Workspace",
    author: {
      name: "Julian Vance",
      role: "Architect & Woodworker",
      avatar: "JV",
      location: "Muscat Hills"
    },
    summary: "Built a 40sqm energy-independent timber studio using local stone and reclaimed oak.",
    image: "/assets/home.jpg",
    details: {
      why: "To create an unhurried work sanctuary separate from household noise.",
      how: "Modular timber frame constructed over 4 months with two friends using local timber and stone.",
      cost: "$18,500 total materials",
      learned: "Solar battery sizing was undersized initially; needed 30% more capacity for winter.",
      rebuildNotice: "Anyone can rebuild this modular blueprint using local softwood and basic joinery."
    },
    perspectivesCount: 14,
    experimentsCount: 6
  },
  {
    id: "experiment-1",
    type: "experiment",
    title: "30 Days Without Unnecessary Purchases",
    author: {
      name: "Amara Lin",
      role: "Industrial Designer",
      avatar: "AL",
      location: "Lisbon"
    },
    summary: "Testing life with zero non-essential consumption to measure mental clarity and time saved.",
    image: "/assets/exp-no-purchases.svg",
    details: {
      why: "To break the subconscious reflex of buying new things whenever bored or stressed.",
      how: "Paused all online shopping apps, unlinked credit cards, and established a 48-hour cooling period.",
      cost: "$0 (Saved $1,200)",
      duration: "30 Days",
      rules: ["Only spend on essential food, rent, and utilities", "No online shopping", "Borrow tools if needed"],
      metrics: "Saved $1,200 and gained 12 hours of weekly free time.",
      learned: "90% of online shopping desires disappear after 48 hours of waiting.",
      rebuildNotice: "Try this 30-day challenge with a friend to keep each other accountable."
    },
    perspectivesCount: 32,
    experimentsCount: 114
  },
  {
    id: "perspective-1",
    type: "perspective",
    title: "“I would rather earn less and have more unhurried time.”",
    author: {
      name: "Tariq Mansoor",
      role: "Writer & Craftsman",
      avatar: "TM",
      location: "Algiers"
    },
    summary: "Transitioned from 60-hour corporate weeks to 4-day consulting to spend mornings with my children.",
    image: "/assets/community.jpg",
    details: {
      why: "Realized that extra income was being spent on stress-relief purchases rather than life.",
      how: "Negotiated 32-hour work weeks with existing clients.",
      cost: "20% drop in revenue, offset by 35% reduction in lifestyle expenses.",
      learned: "Children remember unhurried Friday mornings far more than expensive gifts.",
      rebuildNotice: "Audit your last 3 months of expenses to see how much income actually supports living."
    },
    perspectivesCount: 28
  },
  {
    id: "question-1",
    type: "question",
    title: "What is enough?",
    author: {
      name: "Sophia Rossi",
      role: "Ecosystem Builder",
      avatar: "SR",
      location: "Dubai"
    },
    summary: "When do we stop reaching for more possessions and start expanding human experiences?",
    image: "/assets/question-home.svg",
    details: {
      why: "Modern culture assumes 'more' is always better without defining the finish line.",
      how: "Framed as an open discussion prompt for families and working teams.",
      learned: "Defining 'enough' eliminates 80% of financial anxiety.",
      rebuildNotice: "Write down your personal definition of 'enough' across time, money, and space."
    },
    perspectivesCount: 45
  },
  {
    id: "project-1",
    type: "project",
    title: "Neighborhood Tool & Equipment Exchange",
    author: {
      name: "Kaelen & Maya",
      role: "Community Founders",
      avatar: "KM",
      location: "Muscat"
    },
    summary: "Pooling high-end woodworking and gardening tools so neighbors don't buy redundant equipment.",
    image: "/assets/exp-toolshed.svg",
    details: {
      why: "Most power tools are used for less than 15 minutes in their total lifetime.",
      how: "Converted a shared garden shed into a digital inventory lockers system.",
      cost: "$400 for digital locks and weatherproofing",
      learned: "Trust built through sharing tools led to weekly neighborhood garden dinners.",
      rebuildNotice: "Free open-source locker software available for any neighborhood group."
    },
    perspectivesCount: 19,
    experimentsCount: 8
  },
  {
    id: "story-1",
    type: "story",
    title: "Leaving Corporate Life to Build a Family Garden",
    author: {
      name: "Hannah & David",
      role: "Permaculturists",
      avatar: "HD",
      location: "Lisbon"
    },
    summary: "What happened when we left city apartments to cultivate a self-sustaining food forest.",
    image: "/assets/cycle.jpg",
    details: {
      why: "To give our children daily contact with soil, seasonal growth, and natural cycles.",
      how: "Purchased 1 acre of neglected land and planted 60 fruit trees using permaculture principles.",
      cost: "$12,000 land improvement",
      learned: "The first year was physically exhausting, but our children's curiosity tripled.",
      rebuildNotice: "Start small with 3 raised garden beds before expanding to an entire orchard."
    },
    perspectivesCount: 37
  },
  {
    id: "build-2",
    type: "build",
    title: "Solar-Powered Community Craft Studio",
    author: {
      name: "Liam O'Connor",
      role: "Solar Engineer & Woodworker",
      avatar: "LO",
      location: "Dublin"
    },
    summary: "Converted an old stone barn into a shared 100% solar woodworking and pottery workshop.",
    image: "/assets/build.jpg",
    details: {
      why: "To provide local creators with access to industrial equipment without high overhead costs.",
      how: "Installed 8kW roof solar array and repurposed reclaimed timber workbenches.",
      cost: "$14,200 hardware & paneling",
      learned: "Dust extraction consumes more power than tools; optimized run-times to peak sun hours.",
      rebuildNotice: "Schematics available for downloading solar battery layouts."
    },
    perspectivesCount: 22,
    experimentsCount: 9
  },
  {
    id: "experiment-2",
    type: "experiment",
    title: "Analog Mornings — No Screens Before 10 AM",
    author: {
      name: "Elena Rostova",
      role: "Writer & Pianist",
      avatar: "ER",
      location: "Prague"
    },
    summary: "Replacing phone checking with reading, journaling, and sunlight exposure for 14 straight days.",
    image: "/assets/exp-analog.svg",
    details: {
      why: "To start mornings proactively rather than reactively responding to digital noise.",
      how: "Placed phone in a wooden box outside the bedroom at 10 PM each evening.",
      cost: "$0",
      duration: "14 Days",
      rules: ["No phone or email before 10 AM", "Morning walk or reading first", "Paper journaling only"],
      metrics: "Morning anxiety reduced by 70%, deep writing time increased by 90 minutes daily.",
      learned: "Nothing urgent actually breaks when responding at 10:01 AM instead of 7:00 AM.",
      rebuildNotice: "Try using an analog wind-up alarm clock to remove phone presence from the bedside."
    },
    perspectivesCount: 54,
    experimentsCount: 210
  }
];

export const QUESTION_THREADS: QuestionThread[] = [
  {
    id: "q-1",
    question: "What is enough?",
    category: "LIVING WITH PURPOSE",
    perspectives: [
      {
        author: "Julian Vance",
        role: "Architect",
        quote: "Enough is when your physical space supports your growth without requiring your constant worry to pay for it.",
        tagline: "Freedom over expansion"
      },
      {
        author: "Amara Lin",
        role: "Industrial Designer",
        quote: "Enough is having enough unhurried time that you don't feel rushed when a friend needs to talk.",
        tagline: "Time as the metric"
      },
      {
        author: "Tariq Mansoor",
        role: "Craftsman",
        quote: "Enough is when you can look at what you own and know every item has a purpose or a story.",
        tagline: "Intention over volume"
      }
    ]
  },
  {
    id: "q-2",
    question: "What makes a house feel like home?",
    category: "HOME & BELONGING",
    perspectives: [
      {
        author: "Hannah & David",
        role: "Family Permaculturists",
        quote: "A house becomes a home when it welcomes people in for shared meals without needing to look perfect.",
        tagline: "Presence over perfection"
      },
      {
        author: "Sophia Rossi",
        role: "Ecosystem Builder",
        quote: "A home is where you can rest deeply, create freely, and work without being consumed by work.",
        tagline: "Sanctuary for life"
      },
      {
        author: "Liam O'Connor",
        role: "Solar Craftsman",
        quote: "A home is alive when it generates warmth, energy, and memories rather than just consuming utility bills.",
        tagline: "Living sanctuary"
      }
    ]
  },
  {
    id: "q-3",
    question: "What would you build if you knew nobody was watching?",
    category: "CREATIVE FREEDOM",
    perspectives: [
      {
        author: "Kaelen & Maya",
        role: "Inventors",
        quote: "I would build simple solid wood furniture for local schools instead of chasing social media metrics.",
        tagline: "Quiet contribution"
      },
      {
        author: "Elena Rostova",
        role: "Pianist",
        quote: "I would compose music for quiet morning walks rather than optimizing for streaming algorithms.",
        tagline: "Pure artistic expression"
      }
    ]
  },
  {
    id: "q-4",
    question: "How can work support life rather than consume it?",
    category: "WORK & SUSTAINABILITY",
    perspectives: [
      {
        author: "Tariq Mansoor",
        role: "Writer",
        quote: "By setting firm boundaries: work is what funds the art of living, not the center around which living revolves.",
        tagline: "Life-centered economics"
      },
      {
        author: "Fatima Al-Hassan",
        role: "Historian",
        quote: "Work becomes sustainable when it leaves enough energy at 5 PM for family, community, and personal craft.",
        tagline: "Preserving vitality"
      }
    ]
  },
  {
    id: "q-5",
    question: "What does real community look like in a digital age?",
    category: "COMMUNITY & TRUST",
    perspectives: [
      {
        author: "Zayd & Layla",
        role: "Community Organizers",
        quote: "Real community is when someone drops off homemade soup when you're ill without needing a group chat reminder.",
        tagline: "Spontaneous mutual care"
      },
      {
        author: "Amara Lin",
        role: "Designer",
        quote: "It is shared physical spaces — tool sheds, garden beds, and dining tables — where people meet eye to eye.",
        tagline: "Physical presence"
      }
    ]
  }
];

export const LIFE_EXPERIMENTS: LifeExperiment[] = [
  {
    id: "exp-1",
    title: "30 Days Without Unnecessary Purchases",
    tagline: "Test consumption with intention.",
    duration: "30 Days",
    rules: [
      "Only buy essential groceries, medicine, and utilities.",
      "Pause all online shopping and subscription signups.",
      "Repair broken items or borrow tools before buying new."
    ],
    testing: "Whether reducing consumption increases mental peace and free time.",
    measuring: "Money saved, impulse desires passed, free hours gained.",
    result: "Average savings of $850 per participant and 10 hours of gained weekly focus.",
    learned: "Desire for new objects drops by 80% after waiting 48 hours.",
    participantsCount: 340
  },
  {
    id: "exp-2",
    title: "Four-Day Work Week Trial",
    tagline: "Reclaiming one full day for living.",
    duration: "60 Days",
    rules: [
      "Compress 36 work hours into Monday–Thursday.",
      "Dedicate Friday to family, health, creation, or learning.",
      "No work emails or notifications on Friday."
    ],
    testing: "Can focused output equal or exceed 5-day traditional schedules?",
    measuring: "Project completion rate, stress levels, family time.",
    result: "Output remained 100% while participant satisfaction rose by 40%.",
    learned: "Eliminating 2 unproductive meetings frees up an entire day.",
    participantsCount: 128
  },
  {
    id: "exp-3",
    title: "Cook Every Meal At Home",
    tagline: "Nourishment as a shared daily ritual.",
    duration: "21 Days",
    rules: [
      "Zero food delivery or restaurant dining.",
      "Prepare all meals from raw ingredients.",
      "Eat together around a table without screens."
    ],
    testing: "Reconnecting family dining and wholesome eating.",
    measuring: "Food budget saved, health markers, hours spent together.",
    result: "Food spending decreased by 55% while family conversation doubled.",
    learned: "Meal prep becomes a relaxing evening ritual when shared.",
    participantsCount: 512
  },
  {
    id: "exp-4",
    title: "Analog Mornings (No Screens Before 10 AM)",
    tagline: "Protecting morning clarity and presence.",
    duration: "14 Days",
    rules: [
      "Keep smartphones outside the bedroom overnight.",
      "No checking email, news, or messages until 10 AM.",
      "Begin mornings with outdoor walks, reading, or paper journaling."
    ],
    testing: "Does starting without digital input improve deep focus?",
    measuring: "Morning stress levels, creative output, mental presence.",
    result: "70% drop in morning anxiety, 1.5 extra hours of creative work.",
    learned: "Digital quiet allows genuine priorities to surface naturally.",
    participantsCount: 210
  },
  {
    id: "exp-5",
    title: "Shared Neighborhood Tool Shed",
    tagline: "Pooling resources for collective capability.",
    duration: "90 Days",
    rules: [
      "Each household contributes 2 underutilized power tools.",
      "Store tools in a secure weather-proof shared locker.",
      "Log borrowing and returns via shared digital ledger."
    ],
    testing: "Can resource sharing replace individual purchasing?",
    measuring: "Tools borrowed, money saved per home, neighbor connections.",
    result: "Saved $4,500 across 12 participating families; 45 tool uses logged.",
    learned: "Shared tools foster conversations and joint home repair projects.",
    participantsCount: 84
  },
  {
    id: "exp-6",
    title: "Zero Single-Use Plastic Week",
    tagline: "Eliminating disposable waste from daily life.",
    duration: "7 Days",
    rules: [
      "Carry reusable glass containers and cloth bags for all shopping.",
      "Refuse single-use coffee cups, bottles, and food wrap.",
      "Audit all trash produced at the end of 7 days."
    ],
    testing: "How feasible is zero single-use plastic living in modern cities?",
    measuring: "Plastic items avoided, grocery habit shifts.",
    result: "Participants eliminated over 40 plastic packages per person per week.",
    learned: "Shopping local markets makes plastic-free living 80% easier.",
    participantsCount: 460
  }
];

export const PROFILES: ProfileCard[] = [
  {
    name: "Julian Vance",
    role: "Architect & Woodworker",
    location: "Muscat",
    building: "Off-grid timber studio and modular community solar battery.",
    believes: "Architecture should serve human dignity, not status.",
    exploring: "Rammed earth construction and local stone masonry.",
    learned: "Simple natural materials age gracefully without maintenance."
  },
  {
    name: "Amara Lin",
    role: "Industrial Designer",
    location: "Lisbon",
    building: "Repairable household tools and open-source furniture.",
    believes: "Buy for living, not for filling. Repair before replacing.",
    exploring: "Zero-waste natural dye techniques.",
    learned: "Unfinished prototypes spark better community feedback."
  },
  {
    name: "Tariq Mansoor",
    role: "Craftsman & Writer",
    location: "Algiers",
    building: "Family tradition archives and neighborhood tool library.",
    believes: "Time is the ultimate non-renewable resource.",
    exploring: "Intergenerational storytelling for youth.",
    learned: "One free afternoon shared with a neighbor creates lasting trust."
  }
];

export const THOUGHT_TO_REALITY_STEPS = [
  { step: "01", title: "IDEA", desc: "Someone imagines something that could make life better." },
  { step: "02", title: "PERSPECTIVE", desc: "Different people look at it through their own lived experiences." },
  { step: "03", title: "DISCUSSION", desc: "Honest conversation enriches the idea without argument." },
  { step: "04", title: "EXPERIMENT", desc: "Someone decides to test it in real life for 30 days." },
  { step: "05", title: "BUILD", desc: "The tested idea becomes a physical or living reality." },
  { step: "06", title: "EXPERIENCE", desc: "People actually live it, eat it, or work inside it." },
  { step: "07", title: "STORY", desc: "They document what worked, what failed, and what cost." },
  { step: "08", title: "SHARE", desc: "Others discover the blueprint and lessons learned." },
  { step: "09", title: "NEW IDEA", desc: "Someone else builds upon it. The cycle continues." }
];

export const PLATFORM_DIFFERENCE = [
  {
    aspect: "Core Question",
    socialMedia: "What are you doing?",
    worthLiving: "What are you building?"
  },
  {
    aspect: "Success Metric",
    socialMedia: "How many people liked this?",
    worthLiving: "Did this make someone think, try, build, or live differently?"
  },
  {
    aspect: "Reward System",
    socialMedia: "Attention & Viral Popularity",
    worthLiving: "Contribution, Curiosity, Creation & Shared Value"
  },
  {
    aspect: "Focus",
    socialMedia: "Polished final result / Highlight reel",
    worthLiving: "Honest building process, failures & lessons learned"
  },
  {
    aspect: "Discovery",
    socialMedia: "Endless scrolling algorithm",
    worthLiving: "Intentional exploration of real human attempts"
  }
];
