import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | RMD Accounting & Tax Services",
  description:
    "Get in touch with RMD Accounting & Tax Services for professional accounting and tax services. Located in Los Angeles, CA.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
