import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  return (
    <main className="flex">
      <aside className="w-100">
        <Sidebar />
      </aside>
      <section className="w-full bg-gray-50 min-h-screen">
        <Outlet />
      </section>
    </main>
  );
}
