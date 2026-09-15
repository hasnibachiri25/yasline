import { CycleStep, Pillar, ValueItem, ReflectionOption } from '../types/manifesto';

export const MANIFESTO_HERO = {
  brand: "YASLINE",
  title: "WORTH LIVING",
  subtitle: "Build a life worth living. Together.",
  vision: "We believe life is not something we should postpone until we have enough money, enough success, enough time, or enough certainty.",
  taglineBold: "Life is something we build.",
  heroSummary: "We are creating a living model for a better way to work, live, connect, create, share, and grow — without allowing work, consumption, or constant pressure to become the purpose of life itself."
};

export const PHILOSOPHY_SECTION = {
  headline: "WHAT IF WE BUILT LIFE ON PURPOSE?",
  intro: "Modern life has given us more choices, more technology, more products, more information, and more ways to connect.",
  problemStatements: [
    "Busy and overwhelmed",
    "Disconnected despite digital noise",
    "Isolated in hyper-connected cities",
    "Overstimulated and uncertain",
    "Without enough time for what truly matters"
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
    examples: ["Artisan craftsmanship", "Shared dining space", "Useful digital tool", "Meaningful venture"]
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
