import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../uiComponents/CloseWidgetButton";

interface FeedbackTypeStepProps {
   onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
   return (
      <>
         <header>
            <span className="text-xl leading-6">Deixe seu feedback</span>
            <CloseButton />
         </header>
         <section className="flex py-8 flex-row items-center gap-2 w-full">
            {Object.entries(feedbackTypes).map(([key, value]) => {
               return (
                  <button
                     className='bg-zinc-800 rounded-lg w-24 h-28 flex-1 py-5 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand focus:outline-none focus:border-brand'
                     key={key}
                     onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                     type="button"
                  >
                     <img src={value.image.url} alt={value.image.alt} />
                     <span className="text-xl leading-6">{value.title}</span>
                  </button>
               )
            })}
         </section>
      </>
   )
}

