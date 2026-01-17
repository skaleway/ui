import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { Icons } from "./icons";

const footerRoutes = [
  {
    name: "Twitter",
    link: siteConfig.socials.twitter,
    icon: Icons.x,
  },
  {
    name: "GitHub",
    link: siteConfig.socials.github,
    icon: Icons.github,
  },
  {
    name: "LinkedIn",
    link: siteConfig.socials.linkedin,
    icon: Icons.linkedin,
  },
];

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between">
      <div>
        <p>
          Built with ❤️ by{" "}
          <Link
            href={siteConfig.author.url}
            target="_blank"
            className="font-mono"
          >
            {siteConfig.author.name}
          </Link>
        </p>
      </div>

      <ul className="flex items-center gap-4">
        {footerRoutes.map((route) => (
          <li key={route.name}>
            <a href={route.link} target="_blank" rel="noopener noreferrer">
              <route.icon className="size-4 text-primary fill-primary" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
