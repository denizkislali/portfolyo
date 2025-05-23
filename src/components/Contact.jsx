import React, { useState } from "react";
import "./Contact.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import FadeInSection from "./FadeInSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🧪 Gönder butonuna basıldı."); 

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });
      console.log("✅ Firestore'a eklendi:", docRef.id);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ HATA:", error);
    }
    try {
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Mesaj gönderilirken hata oluştu:", error);
    }
  };

  return (
    <section id="contact" className="contact">
      <FadeInSection>
        <h2>İletişim</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ad Soyad"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Mail Adresiniz"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Mesajınız"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Gönder</button>
        </form>

        {success && (
          <p style={{ marginTop: "1rem", color: "#00b894" }}>
            Mesajınız başarıyla gönderildi!
          </p>
        )}

        <div className="social-links">
          <a
            href="https://www.twitter.com/denizkislali1"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            href="https://github.com/denizkislali"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/denizkislali"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;
