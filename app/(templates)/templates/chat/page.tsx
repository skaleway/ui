import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChatSidebar } from "./_components/sidebar";
import { Header } from "./_components/header";
import { Prompt } from "./_components/prompt";

const Page = () => {
  return (
    <SidebarProvider>
      <ChatSidebar />
      <SidebarInset>
        <Header />
        <div className="flex-1 p-6">
          <Prompt />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Page;
