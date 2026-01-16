import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Notification01Icon } from "@hugeicons/core-free-icons";
import React from "react";

export const CommerceHeader = () => {
  return (
    <header className="flex items-center justify-between h-14 border-b px-6">
      <div>CommerceHeader</div>
      <Button variant="outline" size="icon" className="relative">
        <HugeiconsIcon icon={Notification01Icon} />
        <span className="absolute right-1 top-1 size-2 rounded-full bg-destructive" />
      </Button>
    </header>
  );
};
