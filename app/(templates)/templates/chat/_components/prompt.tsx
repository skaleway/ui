import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Album02Icon,
  ArrowUp02Icon,
  PlusSignIcon,
  QuillWrite01Icon,
  SourceCodeIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ModelSelector } from "./model-selector";

const options = [
  { icon: Album02Icon, label: "Create image" },
  { icon: Album02Icon, label: "Analyze image" },
  { icon: SourceCodeIcon, label: "Code" },
  { icon: QuillWrite01Icon, label: "Write" },
];

export const Prompt = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-10">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-xl font-medium">
          Hello Zenith, what&apos;s on your mind?
        </h1>
        <div className="mt-4 max-w-2xl w-full bg-muted rounded-lg p-1">
          <div className="bg-background border border-primary/10 flex flex-col gap-1 rounded-md">
            <Textarea
              placeholder="Type your message here."
              className="bg-transparent! border-none h-20 shadow-none"
            />
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <Button className="size-8!" variant="ghost">
                  <HugeiconsIcon icon={PlusSignIcon} className="size-4" />
                </Button>
                <ModelSelector />
              </div>
              <Button className="size-8!" variant="ghost">
                <HugeiconsIcon icon={ArrowUp02Icon} className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {options.map((option) => (
          <div
            key={option.label}
            className="flex items-center gap-2 border border-dashed py-1 px-3 rounded-full bg-accent/50 hover:bg-accent/70 cursor-pointer transition-colors"
          >
            <HugeiconsIcon icon={option.icon} className="size-4" />
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
