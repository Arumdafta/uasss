"use client";

import { useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function UserDashboard() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace("/");
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Hai, {user.username}!</h1>
        <p className="text-gray-600">Selamat datang di Make.uFlow. Ayo mulai belanja produk kecantikan Flower Knows kesukaanmu!</p>
      </div>
    </div>
  );
}