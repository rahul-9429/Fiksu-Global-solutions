import React from 'react'
import EmailSub from './EmailSub'
import FooterD from './FooterD'

const Footer = () => {
  return (
    <div >
        <EmailSub/>
        <hr className=" mx-auto bg-gradient-to-r from-[#6DDCFF]/20 to-[#7F60F9]/20 h-[2px] border-0 bg-black" />
        <FooterD/>
    </div>
  )
}

export default Footer