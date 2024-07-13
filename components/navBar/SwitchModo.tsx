'use client'
import { useDarkMode } from '@/hooks/useDarkMode'
import Image from 'next/image'

const iconModel = {
   sun: '/Sun_fill.svg',
   sunLight: '/Sun_fill_light.svg',
   moonFill: '/Moon_fill.svg',
   moonlight: '/Moon_fill_light.svg',
}

interface Props {
   className?: string
}

export const SwitchModo = ({ className }: Props) => {
   const { toggleDarkMode, darkMode } = useDarkMode()
   return (
      <div
         className={`contentSwitch bg-bgSecondary select-none ${className}`} onClick={toggleDarkMode}>
         {
            !darkMode ? (
               <>
                  
                  <Image src={iconModel.moonFill} alt="Moon Fill Icon" width={24} height={24} />
                  <Image src={iconModel.sunLight} alt="Moonlight Icon" width={24} height={24} className="right-0" />
               </>
            ) : (
               <>
                  <Image src={iconModel.moonlight} alt="Moonlight Icon" width={24} height={24} />

                  <Image src={iconModel.sun} alt="Sun Icon" width={24} height={24} className="right-0" />

               </>
            )
         }

         <div className={`switch bg-bgPrimary ${darkMode ? 'onSwitch' : ''} `}></div>
      </div>

   )
}
