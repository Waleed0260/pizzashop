import React from 'react'
import css from "../styles/Service.module.css"
import Image from 'next/image'
import s1 from "../images/s1.png"
import s2 from "../images/s2.png"
import s3 from "../images/s3.png"

const Service = () => {
  return (
    <div className={css.services}>
      <div className={css.serviceheading}>
        <span>What we serve</span>
        <h1>Your Favourtite Food</h1>
        <h2>Delivery Partner</h2>
      </div>
      <div className={css.features}>
        <div className={css.feature}>
          <div className={css.imageWrapper}>
            <Image src={s1} objectFit="cover" layout="intrinsic"/>
          </div>
          <h3>Easy to order</h3>
          <p>You only need a few step in food ordering</p>
        </div>
        
        <div className={css.feature}>
          <div className={css.imageWrapper}>
            <Image src={s2} objectFit="cover" layout="intrinsic"/>
          </div>
          <h3>Easy to order</h3>
          <p>Delivery that is always on time even faster</p>
        </div>


        <div className={css.feature}>
          <div className={css.imageWrapper}>
            <Image src={s3} objectFit="cover" layout="intrinsic"/>
          </div>
          <h3>Easy to order</h3>
          <p>Not only fast for us quality is also number one.</p>
        </div>
      </div>
    </div>
  )
}

export default Service
