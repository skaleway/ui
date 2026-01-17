"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowLeftDoubleIcon,
  ArrowRightDoubleIcon,
  Search02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        className="translate-y-0.5 rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate") ===
            "indeterminate"
        }
        onChange={(value) =>
          table.toggleAllPageRowsSelected(!!value.target.checked)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        className="translate-y-0.5 rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
        checked={row.getIsSelected()}
        onChange={(value) => row.toggleSelected(!!value.target.checked)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Product",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <img
          src={row.original.image}
          alt={row.original.name}
          className="size-10 rounded-lg object-cover"
        />
        <span className="font-medium text-foreground">{row.original.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-full text-[10px] font-medium leading-none ${
          row.original.status === "instock"
            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
        }`}
      >
        {row.original.status === "instock" ? "In Stock" : "Out of Stock"}
      </span>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.original.category}</span>
    ),
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
    cell: ({ row }) => (
      <span className="font-medium text-foreground">
        ${row.original.revenue.toLocaleString()}
      </span>
    ),
  },
  {
    accessorKey: "sales",
    header: "Sales",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.original.sales}</span>
    ),
  },
  {
    id: "reviews",
    header: "Reviews",
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <span className="font-medium">{row.original.reviews.rating}</span>
        <span className="text-muted-foreground text-xs">
          ({row.original.reviews.count})
        </span>
      </div>
    ),
  },
  {
    accessorKey: "views",
    header: "Views",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.original.views}</span>
    ),
  },
];

export const CommerceProducts = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: products,
    columns,
    state: {
      globalFilter,
      pagination,
      rowSelection,
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as string;
      return value.toLowerCase().includes(filterValue.toLowerCase());
    },
  });

  return (
    <div className="border rounded-xl overflow-hidden bg-sidebar/50">
      <div className="flex items-center gap-2 space-y-0 sm:flex-row p-4">
        <h2 className="text-lg font-semibold">Top Products</h2>

        <div className="hidden max-w-sm w-full rounded-lg sm:ml-auto sm:flex relative">
          <HugeiconsIcon
            icon={Search02Icon}
            className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search"
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="pl-8 bg-background border-none ring-1 ring-border focus-visible:ring-2 focus-visible:ring-primary h-9"
          />
        </div>
      </div>
      <div className="border-t bg-background overflow-hidden relative rounded-t-xl">
        <Table>
          <TableHeader className="bg-muted/50 border-b">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header, index) => (
                  <TableHead
                    key={header.id}
                    className={`${index === 0 ? "pl-4" : ""}`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-b last:border-0"
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell
                      key={cell.id}
                      className={`${index === 0 ? "pl-4" : ""}`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t bg-background/50 text-sm">
        <div className="text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="h-8 w-17.5">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-25 items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <HugeiconsIcon icon={ArrowLeftDoubleIcon} className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <HugeiconsIcon icon={ArrowRightDoubleIcon} className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
