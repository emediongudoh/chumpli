"use client";

import * as React from "react";
import { CircleHalf } from "phosphor-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      {resolvedTheme === "dark" ? (
        <CircleHalf
          size={30}
          onClick={() => setTheme("light")}
          className="hover:bg-muted rounded-md p-1 transition-all"
        />
      ) : (
        <CircleHalf
          size={30}
          onClick={() => setTheme("dark")}
          className="hover:bg-muted rounded-md p-1 transition-all"
        />
      )}
    </>
  );
}
