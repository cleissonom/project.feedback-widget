import { useState } from 'react';
import bugImageUrl from '../../assets/bug.svg';
import ideiaImageUrl from '../../assets/ideia.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { CloseButton } from "../CloseButton";
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export const feedbackTypes = {
   BUG: {
      title: "Problema",
      image: {
         url: bugImageUrl,
         alt: "Imagem de um inseto"
      }
   },
   IDEIA: {
      title: "Ideia",
      image: {
         url: ideiaImageUrl,
         alt: "Imagem de um inseto"
      }
   },
   OTHER: {
      title: "Outro",
      image: {
         url: thoughtImageUrl,
         alt: "Imagem de uma nuvem de pensamento"
      }
   },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

   return (
      <div className="flex flex-col items-center mb-4 bg-zinc-900 p-4 relative rounded-2xl shadow-xl w-[calc(100vw-2.75rem)] sm:w-auto">

         {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
         ) : (
            <FeedbackContentStep />
         )}

         <footer className="text-xs text-zinc-400 leading-4">
            Seu feedback é valioso &#x1F31F;
         </footer>
      </div>
   )
}

