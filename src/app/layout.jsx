import { store } from '@/redux/store'
import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import React from 'react'
import Statecom from '@/components/Statecom'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({children,}) {





  return (
    
    <html lang="en">
      <Provider store={store}>
         <body className={inter.className}>{children}<Statecom/></body>
      </Provider>


    </html>
  )
}
