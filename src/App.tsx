import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import CategoryPage from "./pages/CategoryPage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import OrganizerPage from "./pages/OrganizerPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/utforsk" element={<ExplorePage />} />
        <Route path="/kategori/:key" element={<CategoryPage />} />
        <Route path="/stad/:id" element={<PlaceDetailsPage />} />
        <Route path="/arrangor" element={<OrganizerPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}
