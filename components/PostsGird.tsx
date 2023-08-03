"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Link from "next/link";

const PostsGird = () => {
  const [cardData, setCardData] = useState([]);

  const getCardData = async () => {
    const reponse = await axios.get("/api/posts");
    setCardData(reponse.data);
  };

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <div className="mt-24">
      <div className="mb-4">
        <h2 className="font-Wsans font-semibold md:text-3xl text-2xl ml-5 text-center">
          Latest Post
        </h2>
      </div>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-[100%]">
        {cardData.map((data) => (
          <div className="">
            <Card key={data} data={data} />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <Link href="/create" target="_blank">
          <button className="text-white rounded-md bg-black p-2 mb-2">
            Create Blog Article
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostsGird;
