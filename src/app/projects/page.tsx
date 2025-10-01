// src/app/projects/page.tsx
import { projects } from "@/data/projects";
import ProjectsClient from "./ProjectsClient";

export default function ProjectsPage() {
  return <ProjectsClient allProjects={projects} />;
}
