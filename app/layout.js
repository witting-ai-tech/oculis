import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ProviderWrapper from "@/components/ProviderWrapper";
import Header from "@/components/Header";
import NotificationManager from "@/components/NotificationManager";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/navbar/app-sidebar";
import Breadcrumbs from "@/components/navbar/breadcrumbs";

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
              <Breadcrumbs />
              <NotificationManager />
              {children}
            </SidebarInset>
            
          </SidebarProvider>
        </ProviderWrapper>
      </body>
    </html>
  );
}
