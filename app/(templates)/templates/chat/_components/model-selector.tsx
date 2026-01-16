"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDownIcon,
  ArrowRight01Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

const models = ["gpt-4o", "gpt-4o-mini", "sonnet-2"];

export const ModelSelector = () => {
  const [selected, setSelected] = useState<string>(models[0]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="focus-within:scale-98">
        <Button variant="ghost" className="h-8!">
          {selected}
          <HugeiconsIcon icon={ArrowDownIcon} className="ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Models</DropdownMenuLabel>
        {models.map((model) => (
          <DropdownMenuItem key={model} onClick={() => setSelected(model)}>
            {model}
            {selected === model && (
              <HugeiconsIcon icon={Tick01Icon} className="ml-auto" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
