"use client";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./pages/DashboardLayout";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { LostPassword } from "./pages/LostPassword";
import { ScannerResults } from "./pages/ScannerResults";
import { JobTracker } from "./pages/JobTracker";
import { ResumeBuilder } from "./pages/ResumeBuilder";
import InterviewPage from "./pages/InterviewPage";
import "react-quill/dist/quill.snow.css";
import { ResumeBuilderProvider } from "./components/context/ResumeBuilderContext";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="lost-password" element={<LostPassword />} />
        <Route
          path="/resume-builder"
          element={
            <ResumeBuilderProvider>
              <ResumeBuilder />
            </ResumeBuilderProvider>
          }
        />
        <Route
          path="/resume-scanner"
          element={
            <ResumeBuilderProvider>
              <ScannerResults />
            </ResumeBuilderProvider>
          }
        />
        <Route path="/job-tracker" element={<JobTracker />} />
        <Route path="/interview" element={<InterviewPage />} />
      </Routes>
    </>
  );
}

export default App;
