import chatdark from "@/public/templates/chat/chat-dark.png";
import chatlight from "@/public/templates/chat/chat-light.png";
import commercedark from "@/public/templates/e-commerce/commerce-dark.png";
import commercelight from "@/public/templates/e-commerce/commerce-light.png";
import commercetablelight from "@/public/templates/e-commerce/commerce-light-table.png";
import commercetabledark from "@/public/templates/e-commerce/commerce-dark-table.png";
import { StaticImageData } from "next/image";

export const templates = [
  {
    name: "Chat",
    href: "/templates/chat",
    date: "2026-15-01",
    images: [chatdark, chatlight],
    image: { dark: chatdark, light: chatlight },
    description:
      "An Open source modern chat interface built with Next.js and shadcn/ui.",
  },
  {
    name: "E-commerce",
    href: "/templates/e-commerce",
    date: "2026-17-01",
    images: [
      commercedark,
      commercelight,
      commercetablelight,
      commercetabledark,
    ],
    image: {
      dark: commercedark,
      light: commercelight,
    },
    description:
      "An Open source modern e-commerce interface built with Next.js and shadcn/ui.",
  },
];

export type Template = {
  name: string;
  href: string;
  date: string;
  images: StaticImageData[];
  description: string;
  image: {
    dark: StaticImageData;
    light: StaticImageData;
  };
};
