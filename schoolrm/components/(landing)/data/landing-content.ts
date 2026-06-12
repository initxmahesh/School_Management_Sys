export const aboutValues = [
  {
    title: "Academic Excellence",
    description:
      "Cambridge-aligned curriculum with rigorous standards and personalised learning paths.",
    icon: "academic",
  },
  {
    title: "Holistic Development",
    description:
      "Arts, sports, and leadership programmes that nurture confident, well-rounded students.",
    icon: "holistic",
  },
  {
    title: "Global Community",
    description:
      "A diverse, inclusive environment where every child feels seen, supported, and inspired.",
    icon: "community",
  },
];

export const programs = [
  {
    title: "Early Years",
    ages: "Ages 3–5",
    description:
      "Play-based learning that builds curiosity, language skills, and social confidence.",
    highlight: "Foundation stage",
  },
  {
    title: "Primary School",
    ages: "Ages 6–11",
    description:
      "Core subjects, critical thinking, and creativity through project-based learning.",
    highlight: "Key Stages 1–2",
  },
  {
    title: "Secondary School",
    ages: "Ages 12–16",
    description:
      "IGCSE preparation with specialist teachers and dedicated pastoral care.",
    highlight: "Key Stages 3–4",
  },
  {
    title: "Sixth Form",
    ages: "Ages 17–18",
    description:
      "A-Level pathways, university counselling, and leadership opportunities.",
    highlight: "A-Levels",
  },
  {
    title: "Extra-Curricular",
    ages: "All ages",
    description:
      "Music, drama, debate, robotics, and competitive sports after school.",
    highlight: "50+ clubs",
  },
  {
    title: "Language Support",
    ages: "All ages",
    description:
      "EAL programmes and IELTS/TOEFL preparation for international students.",
    highlight: "IELTS & TOEFL",
  },
];

export const admissionSteps = [
  {
    step: "01",
    title: "Submit enquiry",
    description:
      "Complete our online form or visit campus. Our admissions team will guide you.",
  },
  {
    step: "02",
    title: "Assessment & interview",
    description:
      "Age-appropriate assessments and a friendly family meeting with our staff.",
  },
  {
    step: "03",
    title: "Offer & enrolment",
    description:
      "Receive your offer, confirm placement, and join our welcoming community.",
  },
];

export const admissionDates = [
  { label: "Applications open", date: "September 2026" },
  { label: "Early decision deadline", date: "15 January 2027" },
  { label: "Academic year begins", date: "April 2027" },
];

export const staffMembers = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Head of School",
    bio: "20+ years in international education. Cambridge examiner and pastoral lead.",
    initials: "SM",
  },
  {
    name: "James Okafor",
    role: "Deputy Head — Academics",
    bio: "Specialist in curriculum design and student outcomes across Key Stages.",
    initials: "JO",
  },
  {
    name: "Priya Sharma",
    role: "Head of Primary",
    bio: "Passionate about early literacy and inquiry-based primary education.",
    initials: "PS",
  },
  {
    name: "Michael Chen",
    role: "Head of Secondary",
    bio: "IGCSE and A-Level specialist with a focus on STEM excellence.",
    initials: "MC",
  },
];

export const newsItems = [
  {
    category: "Event",
    date: "12 Jun 2026",
    title: "Annual Sports Day 2026",
    excerpt:
      "Students from all year groups compete in athletics, team sports, and house challenges.",
  },
  {
    category: "News",
    date: "5 Jun 2026",
    title: "Cambridge Outstanding Learner Awards",
    excerpt:
      "Six of our students recognised globally for exceptional IGCSE performance.",
  },
  {
    category: "Event",
    date: "28 May 2026",
    title: "Open Day — Campus Tours",
    excerpt:
      "Families invited to explore our facilities, meet teachers, and ask admissions questions.",
  },
];

export type GalleryCategory =
  | "Campus"
  | "Academics"
  | "Sports"
  | "Creative"
  | "Events";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  year: number;
  image: string;
};

export const galleryCategories = [
  "All",
  "Campus",
  "Academics",
  "Sports",
  "Creative",
  "Events",
] as const;

export const galleryYears = ["All", 2026, 2025, 2024] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Modern classrooms",
    category: "Campus",
    year: 2026,
    image: "/images/landing/gallery/classroom.jpg",
  },
  {
    id: "g2",
    title: "Science laboratory",
    category: "Academics",
    year: 2026,
    image: "/images/landing/gallery/science-lab.jpg",
  },
  {
    id: "g3",
    title: "Sports day champions",
    category: "Sports",
    year: 2026,
    image: "/images/landing/gallery/sports.jpg",
  },
  {
    id: "g4",
    title: "Arts & music studio",
    category: "Creative",
    year: 2025,
    image: "/images/landing/gallery/arts.jpg",
  },
  {
    id: "g5",
    title: "Graduation ceremony",
    category: "Events",
    year: 2026,
    image: "/images/landing/gallery/graduation.jpg",
  },
  {
    id: "g6",
    title: "Library & learning hub",
    category: "Campus",
    year: 2025,
    image: "/images/landing/gallery/library.jpg",
  },
  {
    id: "g7",
    title: "Annual campus fair",
    category: "Events",
    year: 2025,
    image: "/images/landing/gallery/campus-event.jpg",
  },
  {
    id: "g8",
    title: "Student life",
    category: "Campus",
    year: 2024,
    image: "/images/landing/gallery/students.jpg",
  },
  {
    id: "g9",
    title: "Inter-house debate finals",
    category: "Academics",
    year: 2024,
    image: "/images/landing/gallery/classroom.jpg",
  },
  {
    id: "g10",
    title: "Football tournament",
    category: "Sports",
    year: 2025,
    image: "/images/landing/gallery/sports.jpg",
  },
  {
    id: "g11",
    title: "Drama night performance",
    category: "Creative",
    year: 2026,
    image: "/images/landing/gallery/arts.jpg",
  },
  {
    id: "g12",
    title: "Founders day celebration",
    category: "Events",
    year: 2024,
    image: "/images/landing/gallery/graduation.jpg",
  },
];
