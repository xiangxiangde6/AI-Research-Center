export type QuickFact = { label: string; value: string };
export type Publication = { title: string; venue: string; year: string };
export type TeamMember = { name: string; role: string };

export type Project = {
  slug: string;
  theme: string;
  title: string;
  blurb: string;
  detail: {
    overview: string;
    quickFacts: QuickFact[];
    results: string[];
    publications: Publication[];
    team: TeamMember[];
  };
};

export const projects: Project[] = [
  {
    slug: "human-robot-collaboration-for-rehabilitation",
    theme: "Robotics",
    title: "Human–Robot collaboration for Rehabilitation",
    blurb: "Safe, adaptive robotic assistants for personalised therapy with real-time biomechanical feedback.",
    detail: {
      overview: "We investigate collaborative control strategies enabling a lightweight robotic arm to assist patients during rehabilitation exercises. We combine computer vision for pose-estimation, EMG sensing, and model-based controllers to deliver adaptive assistance while maintaining safety and transparency.",
      quickFacts: [
        { label: "Duration", value: "Jan 2024 – Dec 2026" },
        { label: "Partners", value: "AUT Health, Auckland Hospital" },
        { label: "Team", value: "8 researchers" },
        { label: "Location", value: "Auckland, New Zealand" },
        { label: "Tags", value: "Robotics, Rehab, HRI, Safety" },
      ],
      results: [
        "30% improvement in task completion time with adaptive assistance",
        "Safety envelope maintained under unexpected perturbations",
        "Positive user acceptance across 20‑participant pilot study",
      ],
      publications: [
        { title: "Shared Autonomy for Upper‑Limb Rehab", venue: "ICRA", year: "2025" },
        { title: "Vision‑based Intention Recognition for HRI", venue: "IROS", year: "2024" },
      ],
      team: [
        { name: "Dr. A. Smith", role: "PI, Robotics" },
        { name: "Prof. J. Lee", role: "Clinical Partner" },
        { name: "R. Chen", role: "PhD, Perception" },
      ],
    },
  },
  { slug: "assistive-robotics-for-rehab", theme: "Robotics", title: "Assistive Robotics for Rehab", blurb: "Shared autonomy & intent recognition to assist upper‑limb therapy.", detail: { overview: "Placeholder overview.", quickFacts: [], results: [], publications: [], team: [] } },
  { slug: "explainable-medical-imaging", theme: "Computer Vision", title: "Explainable Medical Imaging", blurb: "Interpretable vision models for clinical imaging with uncertainty estimates.", detail: { overview: "Placeholder overview.", quickFacts: [], results: [], publications: [], team: [] } },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
