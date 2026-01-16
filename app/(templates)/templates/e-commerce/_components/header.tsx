import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Notification01Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const CommerceHeader = () => {
  return (
    <header className="flex items-center justify-between h-14 border-b px-6">
      <div className="h-9 max-w-sm w-full relative">
        <HugeiconsIcon
          icon={Search01Icon}
          className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
        />
        <Input placeholder="Search" className="px-8" />
        <KbdGroup className="absolute right-2 top-1/2 -translate-y-1/2">
          <Kbd>Ctrl</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="relative">
          <HugeiconsIcon icon={Notification01Icon} />
          <span className="absolute right-1 top-1 size-2 rounded-full bg-destructive" />
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};
