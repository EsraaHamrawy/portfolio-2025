import plennixLogo from "../assets/plennixLogo.svg";
import blloomLogo from "../assets/blloomLogo.avif";
import uraniumLogo from "../assets/ULogo.png"
const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Plennix Software",
    icon: plennixLogo,
    iconBg: "#efe9f1c7",
    date: "May 2025 - Present",
    points: [
      "Develop and maintain responsive user interfaces for the Odoo ERP platform using modern frontend concepts.",
      "Build interactive, component-based features using React.js principles within the Odoo framework.",
      "Customize and extend Odoo's frontend using OWL (Odoo Web Library), Vanilla JavaScript, and Bootstrap.",
      "Ensure mobile-responsive layouts and cross-browser compatibility across all developed components.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "URANIUM Software",
    icon: uraniumLogo, // replace with your icon if available
    iconBg: "#54a1f3",
    date: "Jan 2023 - Apr 2025",
    points: [
      "Developed and maintained frontend interfaces for internal business systems, including HR and employee management modules.",
      "Built a smart objective tracking system with a multi-stage approval workflow for Directors and HR.",
      "Developed UI/UX features for an intranet portal aligned with SharePoint-style capabilities.",
      "Created a Document Management System interface for organizing, storing, and tracking digital files.",
      "Implemented frontend logic for a workflow-based Violation Management System.",
      "Collaborated closely with backend, QA, and business teams throughout the full project lifecycle.",
    ],
  },
  {
    title: "Frontend Intern",
    company_name: "URANIUM Software",
    icon: uraniumLogo, // replace if needed
    iconBg: "#54a1f3",
    date: "Jan 2022 - Sep 2022",
    points: [
      "Supported senior developers in implementing and maintaining frontend features.",
      "Converted design mockups into responsive user interfaces using HTML, CSS, and JavaScript.",
      "Gained hands-on experience in debugging, UI improvements, and code refactoring.",
    ],
  },
  {
    title: "Freelance UI Developer",
    company_name: "Dead Sea Cosmetics (Bloom)",
    icon: blloomLogo, // optional if you have an icon
    iconBg: "#efe9f1c7",
    date: "Nov 2021 - Dec 2021",
     points: [
    "Developed the frontend of a public-facing e-commerce website.",
    "Built responsive pages with clean UI and optimized layouts for Arabic language (RTL).",
    {
      isLink: true,
      label: "Website:",
      url: "https://bloom.com.jo/ar/",
    }
  ],
  },
];






export {  experiences };
