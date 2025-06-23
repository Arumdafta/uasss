"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { isAdmin, login } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Redirect jika sudah login admin, jalankan di useEffect
  useEffect(() => {
    if (isAdmin) {
      router.replace("/dashboard");
    }
  }, [isAdmin, router]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const result = login(form.username, form.password);
    if (!result.success) {
      setError(result.message);
    }
  }

  return (
    <div className="container">
      <h1>Login Make.uFlow</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          autoFocus
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Masuk</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p style={{ marginTop: 20 }}>
        Belum punya akun? <a href="/signup">Daftar di sini</a>
      </p>
    </div>
  );
}
