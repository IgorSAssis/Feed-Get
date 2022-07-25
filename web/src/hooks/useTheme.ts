import { useEffect, useState } from "react";

type ThemeOptions = "light" | "dark";

export default function useTheme(): [ThemeOptions, (string: ThemeOptions) => void] {

  const [theme, setTheme] = useState<ThemeOptions>("light");

  useEffect(() => {

    const rootElement = window.document.documentElement;

    rootElement.className = "";
    rootElement.classList.add(theme);

  }, [theme]);

  return [theme, setTheme];
}