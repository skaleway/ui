"use client";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type Product = {
  name: string;
  price: number;
  image: string;
  status: "instock" | "outofstock";
  category: string;
  revenue: number;
  sales: number;
  reviews: {
    rating: number;
    count: number;
  };
  views: number;
};

const products: Product[] = [
  {
    name: "Aether Wireless Headphones",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop",
    status: "instock",
    category: "Electronics",
    revenue: 12499.5,
    sales: 50,
    reviews: { rating: 4.8, count: 128 },
    views: 1200,
  },
  {
    name: "Lumina Smart Watch",
    price: 199.0,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop",
    status: "instock",
    category: "Electronics",
    revenue: 15920.0,
    sales: 80,
    reviews: { rating: 4.5, count: 210 },
    views: 2500,
  },
  {
    name: "Terra Backpack",
    price: 85.0,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop",
    status: "instock",
    category: "Accessories",
    revenue: 3400.0,
    sales: 40,
    reviews: { rating: 4.7, count: 85 },
    views: 900,
  },
  {
    name: "Kinesis Running Shoes",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=150&fit=crop",
    status: "outofstock",
    category: "Footwear",
    revenue: 7200.0,
    sales: 60,
    reviews: { rating: 4.3, count: 150 },
    views: 1800,
  },
  {
    name: "Zenith Coffee Maker",
    price: 159.5,
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=150&h=150&fit=crop",
    status: "instock",
    category: "Home",
    revenue: 4785.0,
    sales: 30,
    reviews: { rating: 4.6, count: 45 },
    views: 650,
  },
  {
    name: "Oasis Desk Lamp",
    price: 45.0,
    image:
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=150&h=150&fit=crop",
    status: "instock",
    category: "Home",
    revenue: 4500.0,
    sales: 100,
    reviews: { rating: 4.9, count: 320 },
    views: 3100,
  },
  {
    name: "Nova Mechanical Keyboard",
    price: 135.0,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=150&h=150&fit=crop",
    status: "instock",
    category: "Electronics",
    revenue: 6750.0,
    sales: 50,
    reviews: { rating: 4.8, count: 92 },
    views: 1400,
  },
  {
    name: "Aura Scented Candle",
    price: 25.0,
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=150&h=150&fit=crop",
    status: "instock",
    category: "Home",
    revenue: 5000.0,
    sales: 200,
    reviews: { rating: 4.4, count: 410 },
    views: 2200,
  },
  {
    name: "Titan Water Bottle",
    price: 35.0,
    image:
      "https://images.unsplash.com/photo-1523362622744-8c138fd83b5e?w=150&h=150&fit=crop",
    status: "instock",
    category: "Accessories",
    revenue: 2625.0,
    sales: 75,
    reviews: { rating: 4.7, count: 115 },
    views: 1100,
  },
  {
    name: "Vertex Gaming Mouse",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150&h=150&fit=crop",
    status: "outofstock",
    category: "Electronics",
    revenue: 3199.6,
    sales: 40,
    reviews: { rating: 4.6, count: 58 },
    views: 850,
  },
  {
    name: "Equinox Yoga Mat",
    price: 60.0,
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=150&h=150&fit=crop",
    status: "instock",
    category: "Fitness",
    revenue: 1800.0,
    sales: 30,
    reviews: { rating: 4.8, count: 64 },
    views: 700,
  },
  {
    name: "Helios Sunglasses",
    price: 110.0,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=150&h=150&fit=crop",
    status: "instock",
    category: "Fashion",
    revenue: 5500.0,
    sales: 50,
    reviews: { rating: 4.5, count: 88 },
    views: 1300,
  },
  {
    name: "Flux Power Bank",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=150&h=150&fit=crop",
    status: "instock",
    category: "Electronics",
    revenue: 5998.8,
    sales: 120,
    reviews: { rating: 4.2, count: 175 },
    views: 2800,
  },
  {
    name: "Summit Messenger Bag",
    price: 95.0,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=150&h=150&fit=crop",
    status: "instock",
    category: "Accessories",
    revenue: 1900.0,
    sales: 20,
    reviews: { rating: 4.9, count: 32 },
    views: 450,
  },
  {
    name: "Drift Skateboard",
    price: 130.0,
    image:
      "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=150&h=150&fit=crop",
    status: "instock",
    category: "Fitness",
    revenue: 1950.0,
    sales: 15,
    reviews: { rating: 4.7, count: 24 },
    views: 520,
  },
  {
    name: "Polar Fleece Jacket",
    price: 75.0,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=150&h=150&fit=crop",
    status: "outofstock",
    category: "Fashion",
    revenue: 3750.0,
    sales: 50,
    reviews: { rating: 4.4, count: 110 },
    views: 1600,
  },
  {
    name: "Nebula Essential Oil Diffuser",
    price: 42.0,
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=150&h=150&fit=crop",
    status: "instock",
    category: "Home",
    revenue: 2730.0,
    sales: 65,
    reviews: { rating: 4.6, count: 95 },
    views: 1100,
  },
  {
    name: "Core Dumbbell Set",
    price: 180.0,
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=150&h=150&fit=crop",
    status: "instock",
    category: "Fitness",
    revenue: 1800.0,
    sales: 10,
    reviews: { rating: 4.8, count: 18 },
    views: 340,
  },
  {
    name: "Pulse Bluetooth Speaker",
    price: 89.0,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop",
    status: "instock",
    category: "Electronics",
    revenue: 7120.0,
    sales: 80,
    reviews: { rating: 4.5, count: 132 },
    views: 1950,
  },
  {
    name: "Vista Binoculars",
    price: 145.0,
    image:
      "https://images.unsplash.com/photo-1511994298241-608e28f14f66?w=150&h=150&fit=crop",
    status: "instock",
    category: "Accessories",
    revenue: 1450.0,
    sales: 10,
    reviews: { rating: 4.7, count: 42 },
    views: 580,
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
      <div className="border-t rounded-xl bg-background overflow-hidden">
        <Table>
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead className="w-75 pl-4">Product</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="">Revenue</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Reviews</TableHead>
              <TableHead>Views</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell className="font-medium pl-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="size-10 rounded-lg object-cover"
                    />
                    <span>{product.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === "instock"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {product.status === "instock" ? "In Stock" : "Out of Stock"}
                  </span>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="">
                  ${product.revenue.toLocaleString()}
                </TableCell>
                <TableCell>{product.sales}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <span> {product.reviews.rating}</span>

                  <span className="text-muted-foreground">
                    ({product.reviews.count})
                  </span>
                </TableCell>
                <TableCell>{product.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
