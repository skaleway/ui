import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { CommerceDashboard } from "./_components/dashboard";
import { CommerceHeader } from "./_components/header";
import { CommerceSidebar } from "./_components/sidebar";

const ECommercePage = () => {
  return (
    <SidebarProvider>
      <CommerceSidebar />
      <SidebarInset>
        <CommerceHeader />
        <CommerceDashboard />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default ECommercePage;
