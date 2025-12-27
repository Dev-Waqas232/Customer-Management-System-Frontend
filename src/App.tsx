import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import NotFoundPage from "./pages/404";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
