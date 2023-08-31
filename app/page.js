import Link from "next/link";
import Image from "next/image";
import { getAllPost } from "@/data/post";
import { urlForImage } from "@/sanity/lib/image";

export default async function Home() {
  const post = await getAllPost();
  return (
    <main className="grid grid-row-1 container mx-auto justify-center items-center h-screen p-10 gap-10 lg:grid-cols-2 text-center">
      {/* {Post list} */}
      {post.map((post) => (
        <div key={post._id} className="flex flex-col items-center gap-5">
          {/* {Post title & category} */}
          <Link
            href={"/post/" + post.slug.current}
            className="flex flex-col items-center"
          >
            <h1 className="text-xl font-bold capitalize tracking-wide">
              {post.title}
            </h1>
            <h2 className="text-lg font-bold capitalize">{post.categories}</h2>
          </Link>
          {/* {Post published date & author name } */}
          <div className="flex items-center gap-5">
            <span>
              {new Date(post.publishedAt).toLocaleDateString("tr", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            &mdash;
            <span>{post.name}</span>
          </div>
          {/* {Post author image} */}
          <div>
            <Image
              src={urlForImage(post.avatar).url()}
              alt={post.name}
              title={post.name}
              width={50}
              height={50}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          {/* {Post image} */}
          <div>
            <Link href={"/post/" + post.slug.current}>
              <Image
                src={urlForImage(post.image).url()}
                alt={post.title}
                title={post.title}
                width={1000}
                height={1000}
                className="rounded-lg w-full h-full"
                priority={true}
              />
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}
