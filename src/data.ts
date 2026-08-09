export interface SpecRow {
  key: string
  value: string
}

export interface Project {
  title: string
  description: string
  link?: string
  linkLabel?: string
  tags: string[]
}

export interface Experience {
  period: string
  role: string
  company: string
  location: string
  description: string
}

export interface Education {
  period: string
  school: string
  location: string
  detail: string
  description: string
}

export interface SkillGroup {
  heading: string
  skills: string[]
}

export interface ContactRow {
  key: string
  value: string
  href?: string
}

export const about = {
  name: "Sean Crawford",
  role: "Web Developer",
  focus: "full stack web, APIs, systems programming",
  stack: "TypeScript, Rust(WIP), PHP, Python",
  based_in: "Ridley Park, PA",
}

export const specRows: SpecRow[] = [
  { key: "name", value: about.name },
  { key: "role", value: about.role },
  { key: "focus", value: about.focus },
  { key: "stack", value: about.stack },
  { key: "based_in", value: about.based_in },
]

export const socials = {
  github: "https://github.com/seancrawford55",
  linkedin: "https://www.linkedin.com/in/sean-crawford-483432195/",
}

export const contactRows: ContactRow[] = [
  { key: "phone", value: "(225) 315-9613", href: "tel:+12253159613" },
  {
    key: "email",
    value: "SPCrawford317@gmail.com",
    href: "mailto:SPCrawford317@gmail.com",
  },
  { key: "location", value: "Ridley Park, PA" },
]

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Multi-page personal portfolio that is built with Vanilla Typescript. Calling Github API to showcase activity and latest repos",
    tags: ["HTML", "CSS", "Typescript"],
  },
  {
    title: "Contact Book",
    description:
      "A rolodex type Command Line interactive program that uses Vector storage to use Structs and Enums in order to hold contact info and access the different aspects of each entry.",
    tags: ["Rust", "CLI"],
  },
]

export const experience: Experience[] = [
  {
    period: "2026 - Present",
    role: "Junior Web Developer",
    company: "Free Rate Update LLC",
    location: "Chadds Fordd, PA",
    description:
      "Using PHP and Javascript to build and improve on features on a proprietary web app. Drove forward a feature to make integrations easier for clients systems for exchanging customer data securely and effectively.",
  },
  {
    period: "2025 - 2026",
    role: "IT Support Specialist",
    company: "Continental Finance Company",
    location: "Wilmington, DE",
    description:
      "Managed support tickets for approximately 400 employees onsite and remote. Organized and executed a company-wide hardware refresh to reduce the company's budget for AWS virtual machines. Optimized menial tasks using BASH and Powershell scripts to reduce repitition for technicians.",
  },
  {
    period: "2023 - 2025",
    role: "IT Specialist",
    company: "Woodlake Addiction Recovery",
    location: "Baton Rouge, LA",
    description:
      "Organized IT inventory and provided helpdesk support to multiple locations across Louisiana. Collaborated with marketing and operations to keep a stable environment. Took over website design, working with marketing to ensure the company's vision was captured and displayed appropriately online.",
  },
  {
    period: "2022 - 2023",
    role: "Lead IT Technician",
    company: "Anytime IT Solutions",
    location: "Baton Rouge, LA",
    description:
      "Handled daily tickets for multiple clients and installed/supported switches, computers, cameras, and phone systems. Performed A/V installations for residential and commercial customers. Substantially improved the organization of the office and the company's fleet of vehicles.",
  },
]

export const education: Education[] = [
  {
    period: "2025",
    school: "UDEMY Full Stack Bootcamp",
    location: "Online",
    detail: "Full Stack Web Development",
    description:
      "Learned full stack development with HTML, CSS, JavaScript, and SQL — starting with web design and moving into functionality.",
  },
  {
    period: "",
    school: "BRCC",
    location: "Baton Rouge, LA",
    detail: "Undergraduate — Computer Science",
    description:
      "Used C++ and Java to learn OOP and the basics of program development, building programs around encapsulation, inheritance, polymorphism, and abstraction.",
  },
]

export const skills: SkillGroup[] = [
  {
    heading: "Professional Skills",
    skills: [
      "Linux",
      "Web Development",
      "Network Development",
      "System troubleshooting",
      "User Interface Design",
    ],
  },
  {
    heading: "Languages",
    skills: ["Typescript", "Rust(WIP)", "PHP"],
  },
]
