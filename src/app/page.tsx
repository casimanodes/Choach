"use client";

import Image from "next/image";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ContentSections from "@/components/content";
import TextInput from "@/components/textinput";
// import ImageUpload from "@/components/imgupload";

export default function home() {
  return (
    <div className="min-h-screen">

      <div className="pt-20 pb-12 px-4 bg-gradient-to-b from-orange-400 to-blue-500 via-orange-400 via-50%">
        <div className="container mx-auto relative">
          <h1 className="text-5xl font-bold text-white text-center shadow-text mb-8">
            COACH CASH ALLER ART
          </h1>
          <Image
            className="w-[80%] mx-auto rounded-lg shadow-2xl max-h-screen object-cover"
            src="/cassiowurf.jpg"
            alt="Heroooo"
            width={1000}
            height={600}
            priority
          />
          <div className="text-center mt-8">
          </div>
          <TextInput />
          {/* <ImageUpload /> */}
          {/* <ContentSections /> */}
        </div>
      </div>


    </div>
  );
}
