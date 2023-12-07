import { getRandomProject } from "../services/api";

export default async function useRandom(slug: string) {
  let randProject;
  do {
    randProject = await getRandomProject();
  } while (randProject.slug === slug);

  return `/work/${randProject.slug}`;
}
