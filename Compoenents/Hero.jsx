import React from 'react'
import css from "../styles/Hero.module.css"
import Image from 'next/image'
import HeroImage from "../images/HeroImage.png"
import Cherry from "../images/Cherry.png"
import p1 from "../images/p1.jpg"
import {BiPhone} from "react-icons/bi"

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.cherry}>
            <b>More Than Faster</b>
            <Image src={Cherry} height={40} width={40}/>
        </div>
        <div className={css.herotext}>
            <h1>Be The Fatest In Delivering your <span>Pizza</span></h1>
        </div>
        <div className={css.maintext}>
            <p>Our mission is to filling your tummy with delicious food and with fast and free delivery.</p>
        </div>
        <button className={css.btn}>
            Get Started
        </button>
      </div>


      <div className={css.right}>
      <div className={css.contact}>
            <span>Contact Us</span>
            <span><BiPhone/></span>
        </div>
        <div className={css.imagecontainer}>
            <Image src={HeroImage} layout="intrinsic"/>
        </div>
        <div className={css.pizza}>
            <div>
                <Image src={p1} objectFit="cover" layout='intrinsic'/>
            </div>
            <div className={css.details}>
                <b>Italian Pizza</b>
                <p>$7.49</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
