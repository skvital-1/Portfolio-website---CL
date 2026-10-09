// Edit this file to update the whole site.
export const profile = {
  name: "Princess Ama Boatemaa",
  firstName: "Princess",
  role: "UI/UX designer",
  lead: "Design human-centered digital experiences by combining user research, interaction design, and technology.",
  email: "princessboat14bla2@gmail.com", // replace
  location: "Accra, Ghana",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/princess-boatemaa-57ba81339" },
    { label: "GitHub", href: "https://github.com/MrsAmaSanders" },
    { label: "Figma", href: "https://www.figma.com/@sheisboatemaa" },
  ],
  photo: "/profile.jpg", // add your image to /public (e.g. "/profile.jpg") and set the path here
  bio: [
    "I'm Princess Ama Boatemaa, a UI/UX designer based in Accra, Ghana, with a background in Computer Science and a strong interest in Human-Computer Interaction (HCI)." 
    "I design digital experiences that help people navigate complex problems through clear, accessible, and intuitive interfaces. My approach combines user research, interaction design, and technical understanding to create solutions grounded in real user needs." ,
  ],
  tools: ["Figma", "React", "Notion", "FigJam", "Webflow", "HTML and CSS"],
  resumeHref: "#contact", // replace with "/resume.pdf" after adding the file to /public
};

export type Project = {
  id: string; title: string; meta: string; type: "mobile" | "web"; tags: string[]; gradient: string;
  problem: string; role: string; constraints: string; process: string; impact: string; next: string;
  prototype?: string;
};

export const projects: Project[] = [
  {
    id: "MOBIFIN", title: "MOBIFIN, financial services for MOMO users", meta: "Fintech, 2026 · Lead designer on a team of 3.", type: "mobile",
    tags: ["Mobile", "Research", "Prototype"], gradient: "from-[#4332D9] to-[#FF7AA8]",
    problem: "Financial inclusion gaps for mobile users under time pressure.",
    role: "Team Lead · UX/UI Designer · UX Research · User Flows · Wireframes · UI Design Figma · FigJam · React",
    constraints: "48-hours build, 3-person team, Limited research, testing time and Functional MVP required.",
    process: "Research → Define → User Flows → Wireframes → UI → Prototype",
    impact: "1st Place in the HACKS4 Fintech Hackathon.",
    next: "Expand usability testing, Improve accessibility, and Explore personalized financial insights.",
    prototype: "https://mobifin-ai.pages.dev/",
  },
  {
    id: "VERDIS", title: "VERDIS, designing digital tools for agricultural communities", meta: "AgriTech · Community Project.", type: "web",
    tags: ["Web", "Accessibility", "Design system"], gradient: "from-[#0E7C66] to-[#FFD84D]",
    problem: "Farmers face challenges with managing information and accessing digital tools in low-connectivity environments.",
    role: "UX Researcher · UI/UX Designer · User Research · Stakeholder Interviews · User Flows · UI Design · Figma",
    constraints: "Limited connectivity,	Accessibility, Localization,	Different levels of digital literacy.",
    process: "Stakeholder Interviews → Research Insights → User Flows → Interface Design.",
    impact: "Translated real stakeholder insights into a more accessible, context-aware farm management concept.",
    next: "Test with more farmers,	Validate workflows in real environments, Explore offline-first functionality.",
     prototype: "https://verdis-farm.vercel.app/", 
  },
  {
    id: "MOMO BUDGET", title: "MOMO BUDGET, Making MOMO budgeting simpler", meta: "Fintech · Personal Project.", type: "mobile",
    tags: ["Mobile", "Finance", "Budgeting"], gradient: "from-[#4332D9] to-[#FF7AA8]",
    problem: "Users struggle to manage their finances effectively due to complex interfaces and lack of personalized insights.",
    role: "Product Designer · UX Researcher · User Flows · Wireframes · UI Design Figma · FigJam",
    constraints: "48-hours build, 3-person team, Limited research, testing time and Functional MVP required.",
    process: "Research → Define → User Flows → Wireframes → UI → Prototype",
    impact: "Turned user research into a functional budgeting web prototype focused on clearer financial decision-making.",
    next: "Conduct broader usability testing, Explore automatic transaction categorization,	Investigate personalized financial insights.",
    prototype: "https://momo-saver-gh-main.vercel.app/",
  },
];

export const steps = [
  { title: "Discover", text: "Interviews and observation to learn what people really do." },
  { title: "Define", text: "One clear problem statement and measurable goals." },
  { title: "Design", text: "Flows, wireframes, then high-fidelity prototypes." },
  { title: "Test", text: "Real users, quick fixes, and a clear handoff." },
];

export const stats = [
  { value: "1.5+", label: "years designing digital products" },
  { value: "10+", label: "products shipped with engineering teams" },
  { value: "100+", label: "users interviewed or tested" },
];
