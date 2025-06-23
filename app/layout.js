import "./global.css";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "Make.uFlow - Toko Kosmetik",
  description: "E-commerce MakeUp terbaik untuk kamu!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
