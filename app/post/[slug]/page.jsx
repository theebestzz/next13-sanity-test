import { getPost } from "@/data/post";
import React from "react";
import PortableText from "react-portable-text";

const SinglePost = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <>
      <div className="flex justify-center text-center p-10 font-bold border-b-2">
        <div>
          <h1 className="text-2xl">{post.title}</h1>
        </div>
      </div>
      <div>
        <div>
          <PortableText content={post.body} />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
