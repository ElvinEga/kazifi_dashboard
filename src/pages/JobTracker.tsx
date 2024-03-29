import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomKanban } from "../components/CustomKanban";
import MainDashboard from "@/components/layout/MainDashboard";

export function JobTracker() {
  return (
    <MainDashboard>
      <main className="flex gap-4 overflow-auto w-full">
        <div className="flex flex-col">
          <CardHeader>
            <CardTitle>Job Tracker</CardTitle>
            <CardDescription>Job Search 2024</CardDescription>
          </CardHeader>
          <CustomKanban />
        </div>
      </main>
    </MainDashboard>
  );
}
