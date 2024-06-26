"use client"
import React from 'react'
import Image from 'next/image';
import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
function Header() {
  return (
    <div className='bg-transparent w-full absolute top-0 flex justify-between items-center p-2 text-white h-[70px] z-10'>
    <div>
     <Image
     src='/evm.png'
     alt=''
     height={100}
     width={100}
     />
    </div>
    <div className='w-[500px] h-full flex justify-end items-end'>
      <div>
        <ConnectWallet
         theme={darkTheme({
          colors: {
            accentText: "#f52239",
            accentButtonBg: "#f52239",
            borderColor: "#f52239",
            separatorLine: "#f52239",
            primaryText: "#f52239",
            secondaryButtonText: "#ededef",
            modalBg: "",
            dropdownBg: "",
            secondaryButtonBg: "",
            connectedButtonBg: "#f52239",
            accentButtonText: "white",
            primaryButtonBg: "#f52239",
            primaryButtonText: "white",
          },
        })}
        connectModal={{ size: "compact" }}
      />
      </div>
     
       
     
    </div>
  </div>

  )
}

export default Header