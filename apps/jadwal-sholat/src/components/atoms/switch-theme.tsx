"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cx } from "~lib/helpers";

export function SwitchTheme({
  flexDir,
  isHidden,
  justifyItems,
  isMarginLeft,
}: {
  flexDir: string;
  isHidden?: boolean;
  justifyItems: string;
  isMarginLeft: boolean;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cx(
        `w-full items-center justify-${justifyItems}`,
        isHidden ? "hidden md:flex" : "flex"
      )}
    >
      <button
        type="button"
        aria-label="switch theme"
        className={cx(
          `flex flex-${flexDir} cursor-pointer items-center justify-center`,
          "px-4 text-gray-500",
          "dark:text-gray-400"
        )}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        <p
          className={cx(
            "hidden text-sm font-bold",
            "md:block",
            isMarginLeft ? "ml-2" : ""
          )}
        >
          {theme === "light" ? "Dark" : "Light"}
        </p>
      </button>
    </div>
  );
}
