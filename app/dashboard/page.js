"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import products from "@/data/products";



export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div style={{ padding: "48px 36px", minHeight: "100vh", backgroundColor: "#fff0f6", color: "#d6336c", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1>Dashboard Make.uFlow</h1>
        <p>Selamat datang, {user.name}! 🎀</p>
      </header>

      <section style={{ maxWidth: 960, margin: "0 auto" }}>
        <h2 style={{ borderBottom: "2px solid #ffc9d0", paddingBottom: 8, marginBottom: 32 }}>
          Produk Tersedia
        </h2>

        <div style={{ display: "flex", gap: 28, justifyContent: "center", flexWrap: "wrap" }}>
          {products.map((item) => (
            <Link
              key={item.id}
              href={`/produk/${item.id}`}
              style={{
                backgroundColor: "#fff0f4",
                borderRadius: 18,
                padding: 24,
                width: 240,
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(214, 51, 108, 0.2)",
                textDecoration: "none",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", borderRadius: 12, marginBottom: 16 }}
              />
              <h3 style={{ fontWeight: "700", fontSize: 18, marginBottom: 8, color: "#d6336c" }}>{item.name}</h3>
              <p style={{ fontWeight: "600", fontSize: 16, color: "#f783ac" }}>
                Rp{item.price.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
