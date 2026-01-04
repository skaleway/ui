import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col  justify-between py-32 px-8 md:px-16 bg-background sm:items-start border-x">
        <Icons.logoLight />

        <div className="flex flex-col items-center gap-6 text-start">
          <h1 className="max-w-xl md:text-3xl text-2xl font-mono font-semibold leading-10 tracking-tight">
            Beautiful, fast, and responsive UI Templates.
          </h1>
          <p className="max-w-xl md:text-lg text-base leading-8 text-muted-foreground">
            Looking for a starting point for your next project? Browse our
            collection of open-source{" "}
            <Link
              href="/templates"
              className="font-medium text-foreground font-mono"
            >
              Templates
            </Link>{" "}
            or let us build it for you at{" "}
            <Link
              href={siteConfig.author.url}
              target="_blank"
              className="font-medium text-foreground font-mono"
            >
              {siteConfig.author.name}
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row text-muted-foreground">
          Let us help you build your next project{" "}
          <Link
            href={siteConfig.author.url}
            target="_blank"
            className="font-medium text-foreground font-mono"
          >
            @{siteConfig.author.name}
          </Link>
        </div>
      </main>
    </div>
  );
}
