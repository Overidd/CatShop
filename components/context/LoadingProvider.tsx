'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import React from 'react';

export const LoadingProvider = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
   return (
      <>
         {children}
         <ProgressBar
            height="2px"
            color="#fffd00"
            options={{ showSpinner: false }}
            shallowRouting
         />
      </>
   )
}
