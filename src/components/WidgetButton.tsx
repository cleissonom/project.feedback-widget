import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from 'phosphor-react'
import { WidgetForm } from './WidgetForm'

export function WidgetButton() {
   return (
      <Popover data-html2canvas-ignore="true" className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
         <Popover.Panel>
            <WidgetForm />
         </Popover.Panel>

         <Popover.Button className='focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand transition-colors focus:outline-none bg-brand rounded-full p-3 h-12 flex items-center justify-center text-white group'>
            <ChatTeardropDots className='w-6 h-6' weight="regular" color='white' />
            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
               <span className='pl-1'>
                  Feedback
               </span>
            </span>
         </Popover.Button>
      </Popover>
   )
}
