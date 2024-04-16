import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';


export const HeroSection = () => {
  useEffect(() => {
    const textRef = document.getElementById('typewriter-text');

    const typewriter = new Typewriter(textRef, {
      loop: true, // Fazer o efeito de digitação em loop
    });

    typewriter
      .changeDelay(50)
      .typeString("Sorry for the mess! My portfolio is under construction")
      .changeDeleteSpeed(200)
      .changeDelay(200)
      .deleteChars(2)
      .typeString("on .")
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
    <div className="bg-black">
      <h1 id="typewriter-text" className="text-white text-4xl text-balance text-center"></h1>
    </div>
  );
};

export default HeroSection;