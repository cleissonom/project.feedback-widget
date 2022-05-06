import bugImageUrl from '../assets/bug.svg';
import ideiaImageUrl from '../assets/ideia.svg';
import thoughtImageUrl from '../assets/thought.svg';

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