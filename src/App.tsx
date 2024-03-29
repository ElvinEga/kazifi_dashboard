"use client";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./pages/DashboardLayout";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { LostPassword } from "./pages/LostPassword";
import { ResumeScanner } from "./pages/ResumeScanner";
import { JobTracker } from "./pages/JobTracker";
import { ResumeBuilder } from "./pages/ResumeBuilder";
import InterviewPage from "./pages/InterviewPage";
import "react-quill/dist/quill.snow.css";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="lost-password" element={<LostPassword />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/resume-scanner" element={<ResumeScanner />} />
        <Route path="/job-tracker" element={<JobTracker />} />
        <Route path="/interview" element={<InterviewPage />} />
      </Routes>
    </>
  );
}

export default App;
