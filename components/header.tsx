import { Icons } from "./icons";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

// nothing

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full">
      <Icons.logoDark className="hidden dark:block" />
      <Icons.logoLight className="block dark:hidden" />

      <div className="flex items-center gap-4">
        <Link href="/templates">Templates</Link>
        <ModeToggle />
      </div>
    </header>
  );
};
