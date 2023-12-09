import { Documentation } from "./types";

export const Docs: Documentation[] = [
  {
    title: "Experience",
    endpoint: "experience",
    method: "GET",
    description: `The /experience endpoint is a real-time window into my evolving professional journey.
     It provides a dynamic overview of roles, and achievements, constantly updating to reflect the latest additions to my experience. 
      ensuring you stay informed about my current professional narrative.
      `,
    Params: [
      {
        id: 0,
        title: "Year",
        param: "year",
        description:
          "This param returns the highlight achievement of the year provided ,",
      },
      {
        id: 1,
        title: "Current",
        param: "current",
        enums: ["True", "False"],
        description: "This param returns my current position ",
      },
    ],
    Note: `You can’t provide Current and Year Params at the same time`,
  },
  {
    title: "Education",
    endpoint: "education",
    method: "GET",
    description: `The /education endpoint provides information about my academic journey.
      It offers details about different levels of education, certificates earned, and allows you to filter entries based on specified criteria.
      Stay informed about my educational background through this dynamic endpoint.`,
    Params: [
      {
        id: 0,
        title: "Level",
        param: "Level",
        description:
          "Filter education entries based on the specified academic level.",
      },
      {
        id: 1,
        title: "Certificates",
        param: "Certificates",
        description:
          "Filter education entries based on the presence of certificates.",
      },
      {
        id: 2,
        title: "Latest",
        param: "Latest",
        description: "If provided, returns the most recent education entry.",
      },
    ],
    Note: `You can’t provide Level and Certificates Params at the same time.`,
  },
  {
    title: "About",
    endpoint: "about",
    method: "GET",
    description: `The /about endpoint provides a comprehensive overview of all my personal information.
      Access this endpoint to retrieve a detailed object containing various data about me.
      Additionally, for specific information about my biography, you can navigate to the /about/bio path.`,
    Params: [],
    Note: `For detailed bio information, visit /about/bio.`,
  },
  {
    title: "About - Bio",
    endpoint: "about/bio",
    method: "GET",
    description: `The /about/bio endpoint returns a concise object containing my biography.
      Use this endpoint to specifically access and retrieve information related to my personal and professional background.`,
    Params: [],
    Note: `This endpoint provides only the bio information.`,
  },
  {
    title: "Skills",
    endpoint: "skills",
    method: "GET",
    description: `The /skills endpoint allows you to retrieve information about my skills based on specified criteria.
      You can filter skills by category, proficiency, and domain using relevant query parameters.`,
    Params: [
      {
        id: 0,
        title: "Category",
        param: "Category",
        description: "Filter skills by the specified category.",
        enums: ["ProgrammingLanguage", "Technology", "Software", "Other"],
      },
      {
        id: 1,
        title: "Proficiency",
        param: "Proficiency",
        description: "Filter skills by the specified proficiency level.",
        enums: ["Beginner", "Intermediate", "Advanced"],
      },
      {
        id: 2,
        title: "Domain",
        param: "Domain",
        description: "Filter skills by the specified domain.",
        enums: ["Dev", "Design", "Music"],
      },
    ],
    Note: `You can use any combination of Category, Proficiency, and Domain Params.`,
  },
  {
    title: "Skill Check",
    endpoint: "skills/skillCheck",
    method: "GET",
    description: `The /skillCheck endpoint allows you to search for specific skills.
      Provide a search keyword as a parameter (q) to find and retrieve information about the desired skill.`,
    Params: [
      {
        id: 0,
        title: "q",
        param: "q",
        description: "Specify a keyword to search for a particular skill.",
      },
    ],
    Note: `If no matching skill is found, an error message will be returned with a 404 status.`,
  },
  {
    title: "Projects",
    endpoint: "projects",
    method: "GET",
    description: `The /projects endpoint allows you to retrieve information about projects based on specified criteria.
      You can filter projects by category, year, and technology, and also set the pageSize for the number of results to be returned.`,
    Params: [
      {
        id: 0,
        title: "Category",
        param: "category",
        description: "Filter projects by the specified category.",
      },
      {
        id: 1,
        title: "Year",
        param: "year",
        description: "Filter projects by the specified year.",
      },
      {
        id: 2,
        title: "Technology",
        param: "technology",
        description: "Filter projects by the specified technology.",
      },
      {
        id: 3,
        title: "PageSize",
        param: "pageSize",
        description:
          "Specify the number of results to be returned. If not provided, all results will be returned.",
      },
    ],
    Note: `You can use any combination of Category, Year, and Technology Params. If PageSize is not provided, all results will be returned.`,
  },

  {
    title: "Random Project",
    endpoint: "projects/random",
    method: "GET",
    description: `The /random-project endpoint allows you to retrieve information about a randomly selected project.`,
    Params: [],
    Note: `This endpoint returns a random project from the database.`,
  },
];
