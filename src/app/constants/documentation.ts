import { Documentation } from "./types";

export const EducationDocs: Documentation = {
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
};
