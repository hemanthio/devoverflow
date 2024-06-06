import { ClerkProvider} from '@clerk/nextjs'
import './globals.css';
import React from 'react';
import {Inter,Space_Grotesk} from 'next/font/google'
import { Metadata } from 'next';
import { Provider } from '@/context/themeProvider';


const inter=Inter({
  subsets:["latin"],
  weight:["400","500","600","700"],
  variable:"--font-inter"
})

const spaceGrotesk=Space_Grotesk({
  subsets:["latin"],
  weight:["400","500","600","700"],
  variable:"--font-grotesk"
})

export const metadata :Metadata = {
  title:"next 14 with clerk",
  description:"next 14 with clerk is a great framework for building websites and web applications with react", 
  icons:{
    icon:'/assests/images/site-logo.svg'
  }  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider 
    appearance={{
elements:{
  formButtonPrimary:"primary-gradient",
  footerActionLink:"priamry-text-gradient hover:text-primary-500" 
}

    }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Provider>
          <main>
          
            
            {children}
            
          </main>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}