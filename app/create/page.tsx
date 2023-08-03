"use client";
import React, { useState } from "react";
import axios from "axios";

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
    <div className="text-white bg-backgroundColor flex items-center justify-center h-[100vh] w-[100%]">
      <div className="w-[50%] h-[50%] border p-4">
        <h1 className="text-center font-bold font-Wsans md:text-3xl text-xl mb-4">
          Create a Blog
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="border border-gray-400 rounded w-full py-2 px-3 text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              id="image"
              className="border border-gray-400 rounded w-full py-2 px-3 text-black"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title">Description:</label>
            <input
              type="text"
              id="title"
              className="border border-gray-400 rounded w-full py-2 px-3 text-black"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description">Title: `-' No Need</label>
            <input
              type="text"
              id="description"
              className="border border-gray-400 rounded w-full py-2 px-3 text-black"
              value={description}
              onChange={handleDescriptionChange}
            />
            <p>
              {countWords(description)} / {maxWords} words
            </p>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
