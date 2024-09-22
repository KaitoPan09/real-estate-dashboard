import { Outlet } from "react-router-dom";

export default function AppShell() {
  return (
    <div className="relative h-full overflow-hidden bg-background">
      <main
        className="overflow-x-hidden pt-0 transition-[margin] md:overflow-y-hidden h-full"
      >
        <Outlet />
      </main>
    </div>
  );
}
