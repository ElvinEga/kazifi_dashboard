import { Button } from "@/components/ui/button";
import MainDashboard from "../components/layout/MainDashboard";

export function DashboardLayout() {
  return (
    <MainDashboard>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
        </div>
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">Board Metrics</h3>
            <p className="text-sm text-muted-foreground">
              If you would like to view your actual job search metrics in a
              dashboard like this, please upgrade to one of our paid plans.
            </p>
            <Button className="mt-4">Upgrade to Pro</Button>
          </div>
        </div>
      </main>
    </MainDashboard>
  );
}
