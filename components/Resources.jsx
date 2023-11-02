import React from "react";
import Link from "next/link";

const Post = () => {
  return (
    <div className="px-1 my-2 overflow-hidden">
      <Link href={`/resources/${slug.current}`}>
        <div className="product-card">
          <img
            src="/images.jpg"
            width={350}
            className="relative block bg-soil"
          />
          <p className="absolute left-24 top-28 p-2 px-2 font-semibold text-3xl">
            {title}
          </p>
          <p className="absolute left-24 top-36 p-2 px-2 text-2xl text-soil">
            {category}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Post;
