import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout/Layout.jsx";

import "./App.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CampersPage = lazy(() => import("../../pages/CampersPage/CampersPage.jsx"));
const CamperDetailsPage = lazy(() => import("../../pages/CamperDetailsPage/CamperDetailsPage.jsx"));
const Features = lazy(() => import("../Features/Features.jsx"));
const Reviews = lazy(() => import("../Reviews/Reviews.jsx"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage.jsx"));

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
