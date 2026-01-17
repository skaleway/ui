import Container from "@/components/container";
import { Icons } from "@/components/icons";
import { Template, templates } from "@/lib/const";
import Image from "next/image";

export default function TemplatesPage() {
  return (
    <Container className="max-w-6xl font-mono">
      <Icons.logoDark className="hidden dark:block" />
      <Icons.logoLight className="block dark:hidden" />

      <div className="grid grid-cols-1 gap-4">
        {templates.map((template, idx) => (
          <ProjectCard key={idx} template={template} idx={idx} />
        ))}
      </div>
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
        <h1 className="font-medium font-mono uppercase">
          {idx + 1}.{template.name}
        </h1>
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
