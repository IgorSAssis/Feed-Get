import { Moon, Sun } from "phosphor-react";

import logoImage from "../assets/logo.svg";
import useTheme from "../hooks/useTheme";

export function Header() {
  const [theme, setTheme] = useTheme();

  return (
    <header 
      className="fixed top-0 left-0 w-full h-14 flex items-center justify-center bg-light-header-bg border-b-2 border-b-light-header-border dark:bg-surfaceSecondary dark:border-none"
    >
      <div className="flex items-center gap-2">
        <img src={logoImage} alt="logo" className="w-11 h-11" />
        <span className="font-ubuntu font-bold text-2xl">Feed-Get</span>
      </div>
      <div className="absolute right-12 flex items-center gap-4 bg-whiteWithOpacity p-1 rounded-3xl">
        <button className="bg-transparent" onClick={() => setTheme("dark")}>
          <Moon
            size={28}
            color="#FFF"
            className="bg-black w-8 h-8 p-[5px] rounded-full dark:bg-inherit"
          />
        </button>
        <button onClick={() => setTheme("light")}>
          <Sun
            size={28}
            color="#000"
            className="bg-inherit w-8 h-8 p-[5px] rounded-full dark:bg-white"
          />
        </button>
      </div>
    </header>
  );
}
