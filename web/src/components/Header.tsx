import { Moon, Sun } from "phosphor-react";

import logoImage from "../assets/logo.svg";

export function Header() {
  return (
    <header className="dark fixed w-full h-14 flex items-center justify-center bg-surfaceSecondary">
      <div className="flex items-center gap-2">
        <img src={logoImage} alt="logo" className="w-11 h-11" />
        <span className="font-ubuntu font-bold text-2xl">Feed-Get</span>
      </div>
      <div className="absolute right-12 flex items-center gap-4 bg-whiteWithOpacity p-1 rounded-3xl">
        <button className="bg-transparent">
          <Moon 
            size={28} 
            color="#FFF" 
            className="w-8 h-8 p-[5px] rounded-full"
          />
        </button>
        <button>
          <Sun 
            size={28} 
            color="#000"
            className="bg-white w-8 h-8 p-[5px] rounded-full"
          />
        </button>
      </div>
    </header>
  );
}
