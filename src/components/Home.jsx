import React, { useEffect, useState } from "react";
import "./Home.css";
import FadeInSection from "./FadeInSection";

const Home = () => {
  const texts = ["Merhaba, ben Ece", "Bilgisayar Mühendisliği öğrencisiyim"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);         
  const [charIndex, setCharIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 100);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <section id="home" className="home">
      <FadeInSection>
        <h1 className="typewriter">{text}</h1>
        <p className="fade-in-sub">
          Web geliştirme ve tasarım konularında tutkuluyum.
        </p>
      </FadeInSection>
    </section>
  );
};

export default Home;
