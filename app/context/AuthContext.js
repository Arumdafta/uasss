"use client";

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Admin default
  const adminUser = { username: "admin", role: "admin" };

  // List user pembeli
  const [users, setUsers] = useState([]);

  function login(username, password) {
    if (username === adminUser.username && password === "admin") {
      setUser(adminUser);
      return { success: true };
    }

    const existingUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (existingUser) {
      setUser(existingUser);
      return { success: true };
    }

    return { success: false, message: "Username atau password salah." };
  }

  function logout() {
    setUser(null);
  }

  function signup({ name, phone, address, username, password }) {
    if (users.some((u) => u.username === username) || username === "admin") {
      return { success: false, message: "Username sudah digunakan." };
    }

    const newUser = {
      name,
      phone,
      address,
      username,
      password,
      role: "user",
    };

    setUsers([...users, newUser]);
    setUser(newUser);
    return { success: true };
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
