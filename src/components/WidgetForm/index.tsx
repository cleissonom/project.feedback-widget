import { useState } from 'react';
import { FeedbackType, feedbackTypes } from '../../constants/feedbackTypes';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSucessStep } from './Steps/FeedbackSucessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export function WidgetForm() {
   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
   const [feedbackSent, setFeedbackSent] = useState(false)
   function handleRestartFeedback() {
      setFeedbackType(null)
      setFeedbackSent(false)
   }

   return (
      <div className="flex flex-col items-center mb-4 bg-zinc-900 p-4 relative rounded-2xl shadow-xl w-[calc(100vw-2.35rem)] sm:w-auto">

         {feedbackSent ? (
            <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback} />
         ) : (
            <>
               {!feedbackType ? (
                  <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
               ) : (
                  <FeedbackContentStep
                     feedbackType={feedbackType}
                     onFeedbackRestartRequested={handleRestartFeedback}
                     onFeedbackSent={setFeedbackSent}
                  />
               )}
            </>
         )}

         <footer className="text-xs text-zinc-400 leading-4">
            Seu feedback é valioso &#x1F31F;
         </footer>
      </div>
   )
}

