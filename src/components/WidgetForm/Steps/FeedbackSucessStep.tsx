import sucessImageUrl from '../../../assets/sucess.svg';
import { CloseButton } from '../../uiComponents/CloseWidgetButton';

interface FeedbackSucessStepProps {
   onFeedbackRestartRequested: () => void;
}

export function FeedbackSucessStep({ onFeedbackRestartRequested }: FeedbackSucessStepProps) {
   return (
      <>
         <header>
            <CloseButton />
         </header>

         <div className='flex flex-col items-center justify-center py-10 w-[304px]'>
            <img src={sucessImageUrl} alt="Imagem defeedback enviado com sucesso" />
            <span className='text-xl mt-2'>Agradecemos o feedback!</span>
            <button
               type="button"
               onClick={onFeedbackRestartRequested}
               className='py-2 px-6 mt-6 text-sm leading-6 border-transparent bg-zinc-800 hover:bg-zinc-700 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand transition-colors focus:outline-none'
            >
               Quero enviar outro!
            </button>
         </div>
      </>
   )
}

