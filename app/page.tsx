import AdSlot from "@/components/AdSlot";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PostsGird from "@/components/PostsGird";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <div>
        <Navbar />
      </div> */}
      <HeroSection />
      <div>
        <AdSlot />
      </div>
      <div>
        <PostsGird />
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default page;
