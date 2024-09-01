import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./src/components/Layout/Layout.jsx";

import "./App.css";

const HomePage = lazy(() => import("./src/pages/HomePage/HomePage.jsx"));
const CampersPage = lazy(() => import("./src/pages/CampersPage/CampersPage.jsx"));
const CamperDetailsPage = lazy(() => import("./src/pages/CamperDetailsPage/CamperDetailsPage.jsx"));
const Features = lazy(() => import("./src/components/Features/Features.jsx"));
const Reviews = lazy(() => import("./src/components/Reviews/Reviews.jsx"));
const NotFoundPage = lazy(() => import("./src/pages/NotFoundPage/NotFoundPage.jsx"));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CampersPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />}>
          <Route index element={<Navigate to="features" replace />} />
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
