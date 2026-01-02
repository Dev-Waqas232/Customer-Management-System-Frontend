import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import NotFoundPage from "./pages/404";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthContext";
import Layout from "./components/Layout";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
}
