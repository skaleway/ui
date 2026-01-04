import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates",
  description: "Templates",
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
