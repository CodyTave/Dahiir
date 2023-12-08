"use server";

import { notFound } from "next/navigation";

const base_url = process.env.API_BASE_URL + "/api";
const api_key = process.env.API_KEY;

export async function getAbout() {
  const res = await fetch(base_url + "/about", { cache: "no-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getBio() {
  const res = await fetch(base_url + "/about/bio", { cache: "no-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function getProjects(limit?: number) {
  const res = await fetch(
    base_url + (limit ? `/projects?pageSize=${limit}` : "/projects"),
    { cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function getProject(slug: string) {
  const res = await fetch(base_url + `/projects/${slug}`, {
    cache: "no-cache",
  });
  if (res.status === 404) {
    return notFound();
  }
  return res.json();
}
export async function getRandomProject() {
  const res = await fetch(base_url + `/projects/random`, {
    cache: "no-cache",
  });
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

export async function getBaseUrl() {
  const baseUrl = process.env.API_BASE_URL;
  return baseUrl;
}

export async function getAnything(url: string) {
  const res = await fetch(base_url + url);
  return res.json();
}
