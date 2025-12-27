import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex">
      <aside className="w-100">
        <Sidebar />
      </aside>
      <section className="w-full bg-gray-50 min-h-screen">{children}</section>
    </main>
  );
}
