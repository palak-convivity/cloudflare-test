export const dynamicParams = false;

import React from "react";

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );
  return posts.map((post: { id: any }) => ({
    slug: post.id.toString(),
  }));
}

const page = async ({ params }: any) => {
  let { slug } = params;
  let getdata = async () => {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${slug}`
    );
    return response.json();
  };
  console.log(getdata());
  return <div>{JSON.stringify(await getdata())}</div>;
};

export default page;
