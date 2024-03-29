import Navbar from "../dashboard/NavBar";
import { Toaster } from "@/components/ui/toaster";

type contentProps = {
  children: JSX.Element;
};

const MainDashboard = ({ children }: contentProps) => {
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Navbar />
        {/* ========== MAIN CONTENT ========== */}
        {/* Content */}
        {children}
        {/* End Content */}
        {/* ========== END MAIN CONTENT ========== */}
        <Toaster />
      </div>
    </>
  );
};

export default MainDashboard;
