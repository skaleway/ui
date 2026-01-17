import { cn } from "@/lib/utils";
import {
  ArrowDown02Icon,
  ArrowUp02Icon,
  BankIcon,
  CreditCardIcon,
  ShoppingBag02Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

const data = [
  {
    title: "Total Income",
    value: 875420,
    icon: BankIcon,
    stats: {
      increased: true,
      by: 8,
      when: "last month",
      percent: true,
    },
  },
  {
    title: "Total Expenses",
    value: 342180,
    icon: CreditCardIcon,
    stats: {
      increased: false,
      by: 2,
      when: "last month",
      percent: true,
    },
  },
  {
    title: "Total Sales",
    value: 1530,
    icon: ShoppingBag02Icon,
    stats: {
      increased: true,
      by: 230,
      when: "new orders",
      percent: false,
    },
  },
  {
    title: "Total Customers",
    value: 980,
    icon: UserGroupIcon,
    stats: {
      increased: true,
      by: 1,
      when: "new sign-ups",
      percent: true,
    },
  },
];

export const CommerceCards = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 divide-y md:divide-x md:divide-y-0 border rounded-xl">
      {data.map((item) => (
        <div key={item.title} className="p-4 bg-sidebar/50 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-muted-foreground text-sm flex items-center gap-2 justify-between">
              {item.title}
              <HugeiconsIcon icon={item.icon} className="size-4" />
            </h2>
            <p className="text-3xl font-semibold ">
              {item.value.toLocaleString("en-US")}
            </p>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span
              className={cn(
                "flex items-center",
                item.stats.increased ? "text-green-500" : "text-red-500"
              )}
            >
              {item.stats.increased ? "+" : "-"} {item.stats.by}
              <span>{item.stats.percent ? "%" : ""}</span>
              <HugeiconsIcon
                icon={item.stats.increased ? ArrowUp02Icon : ArrowDown02Icon}
                className="size-4"
              />
            </span>
            <span>{item.stats.when}</span>
          </p>
        </div>
      ))}
    </div>
  );
};
