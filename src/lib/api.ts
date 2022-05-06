import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;

interface sendFeedbackAPIProps {
   type: string;
   comment: string;
   screenshot: string | null;
}

export async function sendFeedbackAPI({ type, comment, screenshot }: sendFeedbackAPIProps) {
   try {
      const response = await axios.post(`${baseURL}/feedbacks`, {
         type,
         comment,
         screenshot
      });
      return (await response.statusText);
   } catch (error) {
      return error
   }

}