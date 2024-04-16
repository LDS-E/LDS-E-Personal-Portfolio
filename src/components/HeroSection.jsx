// HeroSection.jsx
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const HeroSection = () => {
  useEffect(() => {
    const textRef = document.getElementById('typewriter-text');

    const typewriter = new Typewriter(textRef, {
      loop: true, // Fazer o efeito de digitação em loop
    });

    typewriter
      .changeDelay(50)
      .typeString("Sorry for the mess! My portfolio is under development")
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
      typewriter.stop(); // Garantir que o efeito do Typewriter seja limpo quando o componente for desmontado
    };
  }, []);

  return (
    <div id="hero" className="bg-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto border rounded-lg">
        <h1 id="typewriter-text" className="text-white text-4xl text-balance text-center"></h1>
      </div>
    </div>
  );
};

export default HeroSection;