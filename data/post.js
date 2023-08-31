import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const data = client;

export async function getAllPost() {
  return data.fetch(
    groq`*[_type == "post"]{
    _id,
    title,
    slug,
    image,
    publishedAt,
    "categories": categories[]->title,
    "name": author->name,
    "avatar": author->avatar
  }`
  );
}

export async function getPost(slug) {
  return data.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    image,
    body,
    publishedAt,
    "categories": categories[]->title,
    "name": author->name,
    "avatar": author->avatar
    }`,
    {
      slug,
    }
  );
}
