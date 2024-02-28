"use client";

// Imports
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

// Interface defining props for the component
interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

// The actual SidebarItem component
export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  // Hook to access the current pathname
  const pathname = usePathname();

  // Hook to access the router object
  const router = useRouter();

  // Function to determine if the item is active (selected, based on path)
  const isActive =
    (pathname === "/" && href === "/") || // Check for root path
    pathname === href || // Check for exact match
    pathname?.startsWith(`${href}/`); // Check if current path starts with item's path

  // Function to handle item click, using router.push()
  const onClick = () => {
    router.push(href);
  };

  // JSX to render the sidebar item
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        // Base styles
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        // Active state styles (conditionally applied)
        isActive &&
          "text-sky-700 bg-sky 200/20 hover:bg-sky-200.20 hover:text-sky-700"
      )}
    >
      {/* Content container */}
      <div className="flex items-center gap-x-2 py-4">
        {/* Icon using LucideIcon component */}
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {/* Label text */}
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
