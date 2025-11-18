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
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="bg-white sticky top-0 flex items-center pt-6 pb-4 z-50 shrink-0 gap-2 px-6">
                <SidebarTrigger className="-ml-1 text-[#717680] focus:outline-none focus:ring-none"/>
                <Separator orientation="vertical" className="mr-2 !h-3 w-[1.33px] !bg-[#A4A7AE]" />
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
