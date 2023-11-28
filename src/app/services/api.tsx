"use server";
const base_url = process.env.API_BASE_URL + "/api";
const api_key = process.env.API_KEY;

export async function getAbout() {
  const res = await fetch(base_url + "/about", { next: { revalidate: 1000 } });
  if (!res.ok) {
    console.log("about----------------", res);

    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getBio() {
  const res = await fetch(base_url + "/about/bio", {
    next: { revalidate: 10000 },
  });
  if (!res.ok) {
    console.log("bio----------------", res);
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getRandomProjects(count: number) {
  const res = await fetch(base_url + `/projects/random?count=${count}`, {
    next: { revalidate: 1000 },
  });
  if (!res.ok) {
    console.log("projectsRand----------------", res);
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function postContact(form: { [key: string]: string }) {
  const res = await fetch(base_url + "/contact", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api_key}`,
    },
  });
  return res.json();
}
