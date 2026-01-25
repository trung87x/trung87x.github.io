"use client";

import { useState, useEffect } from "react";
import { Button } from "./catalyst/button";

const themes = [
  { id: "light", name: "Light" },
  { id: "light-medium-contrast", name: "Light MC" },
  { id: "light-high-contrast", name: "Light HC" },
  { id: "dark", name: "Dark" },
  { id: "dark-medium-contrast", name: "Dark MC" },
  { id: "dark-high-contrast", name: "Dark HC" },
];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    // Check for existing theme classes
    for (const theme of themes) {
      if (
        theme.id !== "light" &&
        document.documentElement.classList.contains(theme.id)
      ) {
        setCurrentTheme(theme.id);
        break;
      }
    }
  }, []);

  const setTheme = (themeId) => {
    // Remove all possible theme classes first
    themes.forEach((t) => {
      if (t.id !== "light") {
        document.documentElement.classList.remove(t.id);
      }
    });

    if (themeId !== "light") {
      document.documentElement.classList.add(themeId);
    }

    setCurrentTheme(themeId);
  };

  return (
    <div className="mx-auto mb-8 flex w-fit flex-wrap justify-center gap-2 rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800">
      {themes.map((t) => (
        <Button
          key={t.id}
          plain={currentTheme !== t.id}
          onClick={() => setTheme(t.id)}
        >
          {t.name}
        </Button>
      ))}
    </div>
  );
}
