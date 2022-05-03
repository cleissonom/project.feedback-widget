import { useState } from 'react';
import bugImageUrl from '../assets/bug.svg';
import ideiaImageUrl from '../assets/ideia.svg';
import thoughtImageUrl from '../assets/thought.svg';
import { CloseButton } from "./CloseButton";

const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

   return (
      <div className="flex flex-col items-center mb-4 bg-zinc-900 p-4 relative rounded-2xl shadow-xl w-[calc(100vw-2.75rem)] sm:w-auto">
         <header>
            <span className="text-xl leading-6">Deixe seu feedback</span>
            <CloseButton />
         </header>

         {!feedbackType ? (
            <section className="flex py-8 flex-row items-center gap-2 w-full">
               {Object.entries(feedbackTypes).map(([key, value]) => {
                  return (
                     <button
                        className='bg-zinc-800 rounded-lg w-24 h-28 flex-1 py-5 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand focus:outline-none focus:border-brand'
                        key={key}
                        onClick={() => setFeedbackType(key as FeedbackType)}
                        type="button"
                     >
                        <img src={value.image.url} alt={value.image.alt} />
                        <span className="text-xl leading-6">{value.title}</span>
                     </button>
                  )
               })}
            </section>
         ) : (
            <p>Hello World!</p>
         )}

         <footer className="text-xs text-zinc-400 leading-4">
            Seu feedback é valioso &#x1F31F;
         </footer>
      </div>
   )
}

