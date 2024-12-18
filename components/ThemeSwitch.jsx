"use client"

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const {setTheme, resolvedTheme} = useTheme()

  useEffect(()=> {
    setMounted(true)
  },[])
  
  if(resolvedTheme === 'dark') {
    return (
        <button onClick={()=>setTheme('light')} className='p-2 transition-colors duration-200 rounded-md hover:bg-gray-800'>
            <SunIcon/>
        </button>
    )
  }

  if(resolvedTheme === 'light') {
    return (
        <button onClick={()=>setTheme('dark')} className='p-2 transition-colors duration-200 rounded-md hover:bg-gray-300'>
            <MoonIcon/>
        </button>
    )
  }
}

export default ThemeSwitch
