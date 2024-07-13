'use client'
import { useDarkMode } from '@/hooks/useDarkMode'
import Image from 'next/image'

const iconModel = {
   moonFill: '/Sun_fill.svg',
   moonLight: '/Moon_fill_light.svg',
   sun: '/Moon_fill.svg',
   sunlight: '/Sun_fill_light.svg',
}

interface Props {
   className?: string
}

export const SwitchModo = ({ className }: Props) => {
   const { toggleDarkMode, darkMode } = useDarkMode()
   return (
      <div
         className={`contentSwitch bg-bgSecondary dark:bg-bgSecondaryDark select-none ${className}`} onClick={toggleDarkMode}>
         {
            !darkMode ? (
               <>
                  <Image src={iconModel.moonFill} alt="Moon Fill Icon" width={24} height={24} />
                  <Image src={iconModel.moonLight} alt="Moonlight Icon" width={24} height={24} className="right-0" />
               </>
            ) : (
               <>
                  <Image src={iconModel.sunlight} alt="Moonlight Icon" width={24} height={24} />
                  <Image src={iconModel.sun} alt="Sun Icon" width={24} height={24} className="right-0" />

               </>
            )
         }

         <div className={`switch bg-bgPrimary dark:bg-bgLateralcolumnDark ${darkMode ? 'onSwitch' : ''} `}></div>
      </div>

   )
}
