import { getRandomProject } from "../services/api";

export default async function useRandom(slug?: string) {
  const randProject = await getRandomProject();
  return `/work/${randProject.slug}`;
}
