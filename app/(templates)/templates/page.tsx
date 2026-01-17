import Container from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Template, templates } from "@/lib/const";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

export default function TemplatesPage() {
  return (
    <Container className="max-w-6xl font-mono">
      <Header />
      <div className="grid grid-cols-1 gap-4">
        {templates.map((template, idx) => (
          <ProjectCard key={idx} template={template} idx={idx} />
        ))}
      </div>
      <Footer />
    </Container>
  );
}

export const ProjectCard = ({
  template,
  idx,
}: {
  template: Template;
  idx: number;
}) => {
  return (
    <div className="bg-muted/50 p-4 pb-0 border flex flex-col md:flex-row gap-4 md:h-125 w-full">
      <div className="flex-1 flex pb-4 flex-col justify-between">
        <Link
          href={template.href}
          className="font-medium font-mono uppercase flex items-center gap-2 group"
        >
          <span>
            {idx + 1}.{template.name}
          </span>
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            className="size-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
        </Link>
        <div>
          <p className="text-sm text-muted-foreground/80"></p>
          <p className="font-mono text-sm">{template.description}</p>
        </div>
      </div>
      <div className="flex-2  pt-10">
        <div className="size-full border border-b-0 aspect-video relative">
          <Image
            src={template.image.dark}
            alt={template.name}
            fill
            blurDataURL={template.image.dark.blurDataURL}
            placeholder="blur"
            className="hidden dark:block"
          />
          <Image
            src={template.image.light}
            alt={template.name}
            fill
            blurDataURL={template.image.light.blurDataURL}
            placeholder="blur"
            className="block dark:hidden"
          />
        </div>
      </div>
    </div>
  );
};
