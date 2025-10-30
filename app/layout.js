import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ProviderWrapper from "@/components/ProviderWrapper";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import NotificationManager from "@/components/NotificationManager";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

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
          <SidebarProvider defaultOpen={false}>
            <Navbar />
            <SidebarInset>
              <NotificationManager />
              {children}
            </SidebarInset>
          </SidebarProvider>
        </ProviderWrapper>
         
      </body>
    </html>
  );
}
