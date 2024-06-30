// HeroSection.jsx
import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import Navbar from "./NavBar";

const HeroSection = () => {
  useEffect(() => {
    const textRef = document.getElementById("typewriter-text");

    const typewriter = new Typewriter(textRef, {
      loop: true, //
    });

    typewriter
      .changeDelay(50)
      .typeString("Welcome! My portfolio is under development")
      .changeDeleteSpeed(200)
      .changeDelay(200)
      .deleteChars(2)
      .typeString("nt .")
      .deleteChars(1)
      .typeString(",")
      .deleteChars(1)
      .typeString("?")
      .deleteChars(1)
      .typeString("/")
      .deleteChars(1)
      .typeString("!")
      .start();

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <div id="hero" className="bg-backdark h-screen">
      <Navbar />

      <div className="flex items-center justify-center h-full">
        <div className="container mx-auto flex items-center justify-center border rounded-lg">
          <h1
            id="typewriter-text"
            className="text-primary text-4xl text-balance text-center"
          ></h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
