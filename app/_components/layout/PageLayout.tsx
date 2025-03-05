import { Metadata } from "next";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  metadata?: Metadata;
}

export function PageLayout({ children, metadata }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 flex flex-col">{children}</main>
      <Footer />
    </>
  );
}
