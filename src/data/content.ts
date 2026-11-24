export const skills = [
  "Power BI",
  "SQL",
  "Python",
  "Microsoft Excel",
  "Data Analysis",
  "Business Analytics",
];

export const focusAreas = [
  {
    number: "01",
    title: "Data analysis",
    description:
      "Explore datasets, identify patterns, and turn information into clear findings for business questions.",
  },
  {
    number: "02",
    title: "Reporting and dashboards",
    description:
      "Organize key metrics into readable reports and dashboards that make performance easier to monitor.",
  },
  {
    number: "03",
    title: "Business insights",
    description:
      "Connect analytical findings to practical questions, priorities, and opportunities for improvement.",
  },
] as const;

export const analysisRecord = [
  { index: "01", field: "dataset", purpose: "the raw material" },
  { index: "02", field: "question", purpose: "what needs answering" },
  { index: "03", field: "pattern", purpose: "what repeats" },
  { index: "04", field: "finding", purpose: "what it means" },
  { index: "05", field: "decision", purpose: "what happens next" },
] as const;

export const sections = {
  about: { id: "about", index: "01", navLabel: "About", railLabel: "About" },
  skills: { id: "skills", index: "02", navLabel: "Skills", railLabel: "Toolkit" },
  focus: { id: "focus", index: "03", navLabel: "Focus", railLabel: "Focus areas" },
} as const;

export const sectionOrder = ["about", "skills", "focus"] as const;
