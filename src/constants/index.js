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
      "Own the frontend implementation of Odoo ERP interfaces, translating product requirements into clear, maintainable user experiences.",
      "Build reusable, component-based features with OWL, Vanilla JavaScript, and Bootstrap to support faster delivery across the platform.",
      "Collaborate with product and backend teams to align UI behavior with business workflows and integration constraints.",
      "Deliver responsive, cross-browser interfaces that improve usability for day-to-day ERP operations.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "URANIUM Software",
    icon: uraniumLogo, // replace with your icon if available
    iconBg: "#54a1f3",
    date: "Jan 2023 - Apr 2025",
    points: [
      "Owned frontend delivery for internal business systems, including HR, employee management, and workflow-driven modules.",
      "Built a smart objective tracking flow with multi-stage approvals for Directors and HR, improving visibility into ownership and status.",
      "Designed and implemented intranet, document management, and violation management interfaces tailored to day-to-day operational needs.",
      "Partnered with backend, QA, and business stakeholders throughout the lifecycle to refine requirements, validate behavior, and ship stable releases.",
    ],
  },
  {
    title: "Frontend Intern",
    company_name: "URANIUM Software",
    icon: uraniumLogo, // replace if needed
    iconBg: "#54a1f3",
    date: "Jan 2022 - Sep 2022",
    points: [
      "Supported senior developers by implementing frontend features and fixing UI issues across active development work.",
      "Converted design mockups into responsive interfaces using HTML, CSS, and JavaScript with attention to consistency and usability.",
      "Contributed to debugging, UI refinements, and code cleanup to improve the quality of delivered screens.",
    ],
  },
  {
    title: "Freelance UI Developer",
    company_name: "Dead Sea Cosmetics (Bloom)",
    icon: blloomLogo, // optional if you have an icon
    iconBg: "#efe9f1c7",
    date: "Nov 2021 - Dec 2021",
     points: [
    "Built the frontend for a public-facing e-commerce website, focusing on a polished customer experience.",
    "Delivered responsive Arabic RTL pages with clean layouts to support the brand and local language requirements.",
    {
      isLink: true,
      label: "Website:",
      url: "https://bloom.com.jo/ar/",
    }
  ],
  },
];






export {  experiences };
