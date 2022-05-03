import { ArrowLeft } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
   feedbackType: FeedbackType;
   onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
   feedbackType,
   onFeedbackRestartRequested
}: FeedbackContentStepProps) {
   const feedbackTypeInfo = feedbackTypes[feedbackType];
   const [screenshot, setScreenshot] = useState<string | null>(null);
   console.log(screenshot)

   return (
      <>
         <header>
            <button
               onClick={onFeedbackRestartRequested}
               type="button"
               className="w-6 h-6 top-4 left-4 flex items-center justify-center absolute hover:text-zinc-100 text-zinc-400 focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400 focus:ring-offset-zinc-900 hover:text-zinc-100 focus:outline-none rounded-md"
               title="Voltar a página anterior do feedback">
               <ArrowLeft
                  className='w-4 h-4'
                  weight='bold' />
            </button>
            <span className="text-xl leading-6 flex flex-row gap-2 items-center">
               <img
                  src={feedbackTypeInfo.image.url}
                  alt={feedbackTypeInfo.image.alt}
                  className="w-6 h-6" />
               {feedbackTypeInfo.title}
            </span>
            <CloseButton />
         </header>
         <form className="m-4 w-full">
            <textarea
               className="min-w-[304px] w-full min-h-[112px] text-sm border-1 rounded-md text-zinc-100 bg-transparent focus:border-brand focus:ring-brand focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-600 scrollbar-thin scrollbar-track-transparent border-zinc-600 scrollbar-thumb-rounded"
               placeholder="Digite aqui sua mensagem com bastante detalhes..."
            />
            <footer className="flex flex-row gap-2 mt-2">
               <ScreenshotButton
                  screenshot={screenshot}
                  onScreenshotTook={setScreenshot}
               />
               <button
                  type="submit"
                  className="p-2 leading-6 text-sm bg-brand border-transparent flex-1 flex justify-center items-center hover:bg-brandHover focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand transition-colors"
               >
                  Enviar feedback
               </button>
            </footer>
         </form>
      </>
   )
}

