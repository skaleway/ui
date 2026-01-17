"use client";

import { Input } from "@/components/ui/input";
import { Search02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const products = [
  {
    name: "Product 1",
    price: 100,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 2",
    price: 200,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 3",
    price: 300,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 4",
    price: 400,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 5",
    price: 500,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 6",
    price: 600,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 7",
    price: 700,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 8",
    price: 800,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 9",
    price: 900,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 10",
    price: 1000,
    image: "https://via.placeholder.com/150",
  },
];

export const CommerceProducts = () => {
  return (
    <div className="border rounded-xl overflow-hidden bg-sidebar/50">
      <div className="flex items-center gap-2 space-y-0 sm:flex-row p-4">
        <h2 className="text-lg font-semibold">Top Products</h2>

        <div className="hidden max-w-sm w-full rounded-lg sm:ml-auto sm:flex relative">
          <HugeiconsIcon
            icon={Search02Icon}
            className="size-4 absolute left-2 top-1/2 -translate-y-1/2"
          />
          <Input placeholder="Search" className="pl-8" />
        </div>
      </div>
      <div className="border-t rounded-xl bg-background"></div>
    </div>
  );
};
