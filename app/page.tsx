import Container from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="max-w-6xl w-full">
      <div className="max-w-3xl justify-between flex-1 w-full gap-20 flex flex-col mx-auto">
        <Header />
        <div className="flex flex-col gap-6 ">
          <h1 className="md:text-3xl text-2xl font-mono font-semibold leading-10 tracking-tight">
            Beautiful, fast, and responsive UI Templates.
          </h1>
          <p className="md:text-lg text-base leading-8 text-muted-foreground ">
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
        <Footer />
      </div>
    </Container>
  );
}
