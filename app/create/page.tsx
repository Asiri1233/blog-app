"use client";
import React, { useState } from "react";
import axios from "axios";
import Footer from "@/components/Footer";

const countWords = (text: any) => {
  const words = text.trim().split(/\s+/);
  return words.length;
};

const CreatePostForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const maxWords = 50; // You can set the maximum number of words here

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/posts", {
        name,
        image,
        title,
        description,
      });

      // Handle successful response here (e.g., show a success message)
      console.log("Response:", response.data);

      // Reset form fields after successful submission
      setName("");
      setImage("");
      setTitle("");
      setDescription("");
    } catch (error) {
      // Handle error here (e.g., show an error message)
      console.error("Error:", error);
    }
  };

  const handleDescriptionChange = (e: any) => {
    const text = e.target.value;
    const wordCount = countWords(text);
    if (wordCount <= maxWords) {
      setDescription(text);
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 w-[50%] p-8 shadow-lg rounded-lg">
        <h1 className="text-white text-center font-bold text-3xl mb-6">
          Create a Blog
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-gray-200"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-700 text-white border border-gray-700 rounded w-full py-2 px-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-bold text-gray-200"
            >
              Image:
            </label>
            <input
              type="text"
              id="image"
              className="bg-gray-700 text-white border border-gray-700 rounded w-full py-2 px-3"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-bold text-gray-200"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-700 text-white border border-gray-700 rounded w-full py-2 px-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-bold text-gray-200"
            >
              Description:
            </label>
            <textarea
              id="description"
              disabled
              className="bg-gray-700 text-white border border-gray-700 rounded w-full py-2 px-3 resize-none h-32 disabled"
              value={description}
              onChange={handleDescriptionChange}
            />
            <p className="text-gray-300 text-sm mt-1">
              {countWords(description)} / {maxWords} words
            </p>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
