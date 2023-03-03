import React from 'react'
import css from "../styles/Menu.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/client'



const Menu = ({data}) => {
  return (
    <div className={css.menu}>
        <div className={css.menuheading}>
            <b>OUR MENU</b>
            <h2>Menu that always</h2>
            <h1>Make you fall in love</h1>
        </div>
      <div className={css.pizzas}>
      {data.map((items, i)=>{
        const src = urlFor(items.image).url();
          return (
          <div className={css.pizza} key={i}>
            <Link href={`/pizza/${items.slug.current}`}>
            <div className={css.piimg}>
            <img loader = {()=> src } src={src} alt="" style={{width:"100%", height: "100%", borderRadius: "30px"}}/>
            </div>
            </Link>
            <div className={css.pitext}>
            <h3>{items.name}</h3>
            <h3 className={css.bold}><span style={{color: "var(--themeRed)"}}>$</span> {items.price[1]}</h3>
            </div>
          </div>
      )
        })}
      </div>
    </div>
  )
}

export default Menu

