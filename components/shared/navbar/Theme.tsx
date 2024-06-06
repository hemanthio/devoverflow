// "use client"

// import React from 'react'

// import { UseTheme } from 'next-themes/dist/types';

// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarTrigger,
// } from "@/components/ui/menubar"
// import Image from 'next/image';
// import { themes } from '@/constants';
// import { useTheme } from 'next-themes';

// const Theme = () => {
//   const { mode, setMode } = useTheme();

//   return (
//     <Menubar className="relative border-none bg-transparent shadow-none">
//       <MenubarMenu>
//         <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
//           {mode === 'light' ? (
//             <Image 
//             src="/assets/icons/sun.svg" alt="sun" 
//             width={20} 
//             height={20} className="active-theme" 
//             />
//           ): (
//           <Image 
//           src="/assets/icons/moon.svg" alt="moon"
//            width={20} 
//            height={20} className="active-theme" 
//            />
//            )}
//         </MenubarTrigger>
//         <MenubarContent className="absolute -right-12 mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300"> 
//           {themes.map((item) => (
//             // @ts-ignore
//             <MenubarItem
//               key={item.value}
//               className='flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400'
//               onClick={() => {
//                 setMode(item.value);
//                 if (item.value !== "system") {
//                   localStorage.theme = item.value;
//                 } else {
//                   localStorage.removeItem("theme");
//                 }
//               }}
//             >
//               <Image 
//                 src={item.icon}
//                 alt={item.value}
//                 width={16}
//                 height={16}
//                 className={`${mode === item.value && 'active-theme'}`}
//               />
//               <p className={`body-semibold text-light-500 ${mode === item.value ? 'text-primary-500' : 'text-dark100_light900'}`}>{item.label}</p>
//             </MenubarItem>
//           ))}
//         </MenubarContent>
//       </MenubarMenu>
//     </Menubar>
//   )
// }

// export default Theme


'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  )

  if (resolvedTheme === 'dark') {
    return <FiMoon size={24} onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <FiSun size={24} onClick={() => setTheme('dark')} />
  }

}