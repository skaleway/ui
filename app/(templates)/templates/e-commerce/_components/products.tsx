"use client";

import { Input } from "@/components/ui/input";
import { Search02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const CommerceChart = () => {
  return (
    <div className="border rounded-xl">
      <div className="flex items-center gap-2 space-y-0 sm:flex-row bg-sidebar/50 p-4">
        <h2 className="text-lg font-semibold">Top Products</h2>

        <div className="">
          <HugeiconsIcon icon={Search02Icon} className="size-4" />
          <Input placeholder="Search" />
        </div>
      </div>
      <div className="border-t rounded-xl"></div>
    </div>
  );
};
