"use client";

import { useAuth } from "./context/AuthContext";
import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  const { user } = useAuth();

  useEffect(() => {
    // Tambahkan style langsung ke head saat komponen dimuat
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #fff0f4;
        color: #ff5c8d;
      }

      .hero-background {
        background-image: url("/images/banner.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        position: relative;
      }

      .hero-overlay {
        background-color: rgba(255, 240, 244, 0.9);
        padding: 2.5rem 3rem;
        border-radius: 24px;
        text-align: center;
        box-shadow: 0 8px 30px rgba(255, 92, 141, 0.2);
        max-width: 700px;
        width: 100%;
      }

      .hero-overlay h1 {
        font-size: 2.4rem;
        margin-bottom: 0.8rem;
        color: #ff5c8d;
      }

      .slogan {
        font-size: 1.2rem;
        color: #ff7fa4;
        margin-bottom: 1.2rem;
      }

      .highlight {
        color: #ff69b4;
      }

      a {
        color: #ff5c8d;
        text-decoration: none;
        font-weight: 600;
      }
      a:hover {
        text-decoration: underline;
      }
    `;
    document.head.appendChild(style);

    // Cleanup ketika komponen di-unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="hero-background">
      <div className="hero-overlay">
        <h1>
          Selamat datang di <span className="highlight">Make.uFlow</span>
        </h1>
        <p className="slogan">
          Temukan kecantikan alami dengan sentuhan pastel yang menawan 💄✨
        </p>
        {user ? (
          <p>Hai {user.role === "admin" ? "Admin" : user.name}, selamat datang kembali!</p>
        ) : (
          <p>
            <Link href="/login">Masuk</Link> atau <Link href="/signup">Daftar</Link> untuk mulai belanja!
          </p>
        )}
      </div>
    </section>
  );
}
