import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../uiComponents/Loading";

interface ScreenshotButtonProps {
   onScreenshotTook: (screenshot: string | null) => void;
   screenshot: string | null;
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {
   const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
   async function handleTakeScreenshot() {
      setIsTakingScreenshot(true);

      const canvas = await html2canvas(document.querySelector('html')!);
      const base64image = canvas.toDataURL("image/png");

      onScreenshotTook(base64image);
      setIsTakingScreenshot(false);
   }

   if (screenshot) {
      return (
         <button
            type="button"
            onClick={() => onScreenshotTook(null)}
            className="p-1 w-10 h-10 rounded-md border-1 border-zinc-300 flex items-end justify-end text-zinc-400 hover:text-zinc-100 transition-colors"
            style={{
               backgroundImage: `url(${screenshot})`
            }}
         >
            <Trash weight="fill" />
         </button>
      );
   }

   return (
      <button
         type="button"
         title="Tire uma Screenshot da tela onde se encontra o problema"
         onClick={handleTakeScreenshot}
         className="h-10 p-2 rounded-md border-transparent bg-zinc-800 hover:bg-zinc-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand transition-colors focus:outline-none"
      >
         {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" />}
      </button>
   );
}