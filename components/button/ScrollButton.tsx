// components/ScrollButton.tsx
import { CircleChevronDown } from 'lucide-react';


interface Props {
   targetId: string;
}

export const ScrollButton = ({targetId}:Props) => {
   const handleClick = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
         targetElement.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <button onClick={handleClick} className='transition hover:scale-110'>
         <CircleChevronDown className='w-8 h-8'/>
      </button>
   );
};

