import React, { useState } from 'react'
import css from "../styles/Header.module.css"
import Image from 'next/image'
import Logo from "../images/Logo.png"
import {BiShoppingBag} from "react-icons/bi"
import { useStore } from '../store/store'
import Link from 'next/link'


const Header = () => {
  const state = useStore((state)=> state)
  console.log(state)
  const items = useStore((state)=> state.cart.pizzas.length);
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
        <Link href='/cart'>
      <div className={css.cart}>
      <BiShoppingBag style={{height: "28px", width: "28px"}}/>
      <div className={css.badge}>{items}</div>
      </div>
      </Link>
    </div>
  )
}

export default Header
