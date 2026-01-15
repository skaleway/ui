import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { ModelSelector } from "./model-selector";

export const Header = () => {
  return (
    <header className="h-16 flex items-center px-6 justify-between">
      <ModelSelector />
      <div className="flex items-center gap-2">
        <ModeToggle className="border-none bg-background! hover:bg-accent! hover:text-accent-foreground dark:hover:bg-accent/50! size-8!" />
        <Button
          variant="outline"
          className="h-8! px-4! border  text-xs flex items-center justify-center"
        >
          feedback
        </Button>
      </div>
    </header>
  );
};
