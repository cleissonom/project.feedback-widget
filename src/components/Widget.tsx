import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
   return (
      <div className='absolute bottom-5 right-5'>
         <button className='bg-brand rounded-full p-3 h-12 flex items-center justify-center text-white group'>
            <ChatTeardropDots className='w-6 h-6' weight="regular" color='white' />
            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out'>
               <span className='pl-1'>
                  Feedback
               </span>
            </span>
         </button>
      </div>
   )
}
