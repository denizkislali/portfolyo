import React from 'react';
import './Skills.css';
import FadeInSection from './FadeInSection'; 

const Skills = () => {
  return (
    <section id="skills" className="skills" >
       <FadeInSection>
      <h2>Neler Yapabilirim?</h2>
      <ul>
        <li>Görüntü işleme algoritmalarını kullanarak görüntüleri işleyebilirim</li>
        <li>HTML, CSS, JavaScript bilgimle modern arayüzler tasarlayabilirim</li>
        <li>SQL kullanarak veritabanı yönetimi yapabilirim</li>
        <li>Mobil uygulamalar geliştirebilirim</li>
        <li>API bağlantıları ile dinamik veri çekme ve işleme yapabilirim</li>
      </ul>
      </FadeInSection>
    </section>
  );
};

export default Skills;
