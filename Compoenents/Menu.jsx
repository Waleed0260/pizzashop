import React from 'react'
import css from "../styles/Menu.module.css"
import Image from 'next/image'
import Link from 'next/link'



const Menu = ({data}) => {
  return (
    <div className={css.menu}>
        <div className={css.menuheading}>
            <b>OUR MENU</b>
            <h2>Menu that always</h2>
            <h1>Make you fall in love</h1>
        </div>
      <div className={css.pizzas}>
      {data.map((items)=>{
          return (
          <div className={css.pizza} key={items.id}>
            <Link href={`/pizza/`+ items.id}>
            <div className={css.piimg}>
            <img src={items.image} alt="" style={{width:"100%", height: "100%", borderRadius: "30px"}}/>
            </div>
            </Link>
            <div className={css.pitext}>
            <h3>{items.name}</h3>
            <h3 className={css.bold}><span style={{color: "var(--themeRed)"}}>$</span> {items.price}</h3>
            </div>
          </div>
      )
        })}
      </div>
    </div>
  )
}

export default Menu

