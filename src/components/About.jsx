import "./About.css";
import React from 'react';
import FadeInSection from './FadeInSection'; 

function About() {
  return (
    <section id="about" className="about" >
      <FadeInSection>
      <h2>Ben Kimim?</h2>
      <p>
        Merhaba, ben Ece. Balıkesir Üniversitesinde 3. sınıf bilgisayar mühendisliği öğrencisiyim.
         Aynı zamanda Anadolu Üniversitesi'nde Web Tasarım ve Kodlama bölümünde 2. sınıf öğrencisiyim.
        Yazılım geliştirme, özellikle web tasarımı ve React
        üzerine çalışıyorum. Kullanıcı dostu, erişilebilir ve şık arayüzler
        oluşturmayı seviyorum. Üniversitede mühendislik eğitimi alıyorum ve aynı
        zamanda kendi projelerim üzerinde çalışıyorum.
      </p>
      </FadeInSection>
    </section>
  );
}

export default About;
