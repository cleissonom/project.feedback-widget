import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton() {
   return (
      <Popover.Button className="w-6 h-6 top-4 right-4 flex items-center justify-center absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulário de feedback">
         <X className='w-4 h-4' weight='bold' />
      </Popover.Button>
   );
}