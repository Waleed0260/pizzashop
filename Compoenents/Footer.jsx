import React from 'react'
import {GrFacebook} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import Logo from "../images/Logo.png"
import Image from 'next/image'
import css from "../styles/Footer.module.css"


const Footer = () => {
  return (
    <div className={css.container}>
      <p>ALL RIGHTS RESERVED</p>
      <div className={css.icons}>
        <GrFacebook/>
        <BsGithub/>
        <BsInstagram/>
      </div>
      <div className={css.logo}>
      <Image src={Logo} width={50} height={50}/>
      <p>Fudo</p>
      </div>
    </div>
  )
}

export default Footer
