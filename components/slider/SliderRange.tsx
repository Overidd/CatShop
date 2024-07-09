// /components/RangeSlider.tsx
'use client'
import { useState, useEffect, useRef } from 'react';
import './rangeSlider.css';

interface Props {
   minRange?: number;
   maxRange?: number;
   minPrice: number;
   maxPrice: number;
   className?: string;
   onParamPushRange: (minRange: number, maxRange: number) => void;
}

const RangeSlider = ({ minRange: min = 1, maxRange: max = 100, minPrice, maxPrice, className, onParamPushRange }: Props) => {
   const [leftValue, setLeftValue] = useState(minPrice);
   const [rightValue, setRightValue] = useState(maxPrice);

   const pulseLeft = useRef<HTMLDivElement>(null);
   const pulseRight = useRef<HTMLDivElement>(null);
   const range = useRef<HTMLDivElement>(null);

   const setLeftPosition = () => {
      const percent = ((leftValue - min) / (max - min)) * 100;
      if (pulseLeft.current && range.current) {
         pulseLeft.current.style.left = percent + 4 + '%';
         range.current.style.left = percent + '%';
      }
   };

   const setRightPosition = () => {
      const percent = ((rightValue - min) / (max - min)) * 100;
      if (pulseRight.current && range.current) {
         pulseRight.current.style.right = 104 - percent + '%';
         range.current.style.right = 100 - percent + '%';
      }
   };

   const handleLeftInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.min(Number(e.target.value), rightValue - 1);
      setLeftValue(value);
   };

   const handleRightInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.max(Number(e.target.value), leftValue + 1);
      setRightValue(value);
   };

   useEffect(() => {
      setLeftPosition();
      setRightPosition();
      onParamPushRange(leftValue, rightValue);
   }, [leftValue, rightValue]);


   return (
      <div className={`containerRange ${className}`}>
         <div className='multiRangeSlider'>
            <input
               type="range"
               min={min}
               max={max}
               value={leftValue}
               onChange={handleLeftInput}
               className='inputRange left cursor-pointer'
            />
            <input
               type="range"
               min={min}
               max={max}
               value={rightValue}
               onChange={handleRightInput}
               className='inputRange right cursor-pointer'
            />
            <div className='slider'>
               <div className='track bg-white'></div>
               <div ref={range} className='range bg-bgPrimary'></div>
               <div ref={pulseLeft} className='thumb left bg-bgPrimary'></div>
               <div ref={pulseRight} className='thumb right bg-bgPrimary'></div>
            </div>

            <p className={'px-0 py-2'}>
               <span >${leftValue}</span> - <span>${rightValue}</span>
            </p>
         </div>
      </div>
   );
};

export default RangeSlider;
