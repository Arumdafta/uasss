"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function SignUpPage() {
  const { user, signup } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Pindah redirect ke useEffect biar nggak error
  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user, router]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const result = signup(form);
    if (result.success) {
      router.replace("/");
    } else {
      setError(result.message);
    }
  }

  return (
    <div className="container">
      <h1>Buat Akun Baru</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Nama Lengkap"
          value={form.name}
          onChange={handleChange}
          required
          autoFocus
        />
        <input
          name="phone"
          type="tel"
          placeholder="No. Telepon"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          name="address"
          type="text"
          placeholder="Alamat"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Daftar</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p style={{ marginTop: 20 }}>
        Sudah punya akun? <a href="/login">Masuk di sini</a>
      </p>
    </div>
  );
}
