"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    let data = async () => {
      setLoading(true);
      let res = await fetch("/api/student");
      setData(await res.json());
      setLoading(false);
    };
    data();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
};

export default Page;
