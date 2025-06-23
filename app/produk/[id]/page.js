"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import products from "@/data/products"; // pastikan kamu punya jsconfig.json

export default function DetailProduk() {
  const { id } = useParams();
  const router = useRouter();

  const produk = products.find((item) => item.id === id);

  if (!produk) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Produk tidak ditemukan 😥</h2>
        <button onClick={() => router.back()}>Kembali</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
      <img src={produk.image} alt={produk.name} style={{ width: "100%", borderRadius: 20, marginBottom: 20 }} />
      <h1>{produk.name}</h1>
      <p>{produk.description}</p>
      <p style={{ fontWeight: "bold" }}>Rp{produk.price.toLocaleString()}</p>

      <Link href="/dashboard" style={{ display: "inline-block", marginTop: 20 }}>
        ← Kembali ke Dashboard
      </Link>
    </div>
  );
}
