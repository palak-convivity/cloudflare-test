import React from "react";

const page = async () => {
  let data = { id: 1, name: "student", class: 5 };
  return <div>{JSON.stringify(data)}</div>;
};

export default page;
