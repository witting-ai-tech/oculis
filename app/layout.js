import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ProviderWrapper from "@/components/ProviderWrapper";
import NotificationManager from "@/components/NotificationManager";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/navbar/app-sidebar";
import Breadcrumbs from "@/components/navbar/breadcrumbs";
import { Separator } from "@/components/ui/separator";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oculis",
  description: "AI based Surveillance Dashboard",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} antialiased `}>
        <ProviderWrapper>
          <SidebarProvider style={{
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            }}
          >
            <AppSidebar variant="inset"/>
            <SidebarInset>
              <header className="bg-white sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1"/>
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumbs />
              </header>
              <NotificationManager />
              {children}
            </SidebarInset>
            
          </SidebarProvider>
        </ProviderWrapper>
      </body>
    </html>
  );
}
