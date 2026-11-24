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
      "Explore datasets, identify patterns, and turn information into clear findings for business decisions.",
  },
  {
    number: "02",
    title: "Reporting and dashboards",
    description:
      "Organize key metrics into readable reports and dashboards that help people understand performance.",
  },
  {
    number: "03",
    title: "Business insights",
    description:
      "Connect analytical findings to practical questions, priorities, and opportunities for improvement.",
  },
];

/**
 * Structural outline of the analysis process. Describes the discipline only —
 * it intentionally contains no metrics, outcomes, or claims about past work.
 */
export const analysisRecord = [
  { index: "01", field: "dataset", purpose: "the raw material" },
  { index: "02", field: "question", purpose: "what needs answering" },
  { index: "03", field: "pattern", purpose: "what repeats" },
  { index: "04", field: "finding", purpose: "what it means" },
  { index: "05", field: "decision", purpose: "what happens next" },
];

export const sections = {
  about: { id: "about", index: "01", navLabel: "About", railLabel: "About" },
  skills: { id: "skills", index: "02", navLabel: "Skills", railLabel: "Toolkit" },
  focus: { id: "focus", index: "03", navLabel: "Focus areas", railLabel: "Focus areas" },
} as const;

/** Reading order of the in-page sections, used by the nav and the scroll spy. */
export const sectionOrder = ["about", "skills", "focus"] as const;
