"use server";
const base_url = process.env.API_BASE_URL + "/api";
const api_key = process.env.API_KEY;

export async function getAbout() {
  const res = await fetch(base_url + "/about");
  if (!res.ok) {
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
