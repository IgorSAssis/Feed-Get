import { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";

import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshot: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshot
}: ScreenshotButtonProps) {

  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');

    onScreenshot(base64Image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button 
        type="button" 
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180
        }}
        onClick={() => onScreenshot(null)}
        >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="p-2 bg-light-surfacePrimary dark:bg-zinc-800 rounded-md border-transparent hover:bg-light-surfaceSecondary dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ?
        <Loading /> :
        <Camera className="w-6 h-6" />
      }
    </button>
  );
}
