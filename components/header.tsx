import { Icons } from "./icons";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full">
      <Icons.logoDark className="hidden dark:block" />
      <Icons.logoLight className="block dark:hidden" />

      <ModeToggle />
    </header>
  );
};
