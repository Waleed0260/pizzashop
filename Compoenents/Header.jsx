import React from 'react'
import css from "../styles/Header.module.css"
import Image from 'next/image'
import Logo from "../images/Logo.png"
import {BiShoppingBag} from "react-icons/bi"


const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.image}>
        <Image src={Logo} width={50} height={50}/>
        <b>FUDO</b>
      </div>

        <ul className={css.list}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      <div className={css.cart}>
      <BiShoppingBag style={{height: "28px", width: "28px"}}/>
      <div className={css.badge}>1</div>
      </div>
    </div>
  )
}

export default Header
