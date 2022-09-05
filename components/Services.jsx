import React from 'react'
import css from '../styles/Services.module.css'
import Image from 'next/image'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'

const services = () => {
  return (
    <>
    <div className={css.heading}>
        <span>What We Serve</span>
        <span>Your Favourite</span>
        <span>Delivery Partner</span>
    </div>
    

    {/* Features */}
    <div className={css.services}>
        <div className={css.feature}>
            <div className={css.ImageWrapper}>
                <Image src={s1} alt="" objectFit='cover'
                 layout='intrinsic'/>
            </div>
            <span>Easy to Order</span>
            <span>You only need a few steps in Food Ordering</span>

        </div>

        <div className={css.feature}>
            <div className={css.ImageWrapper}>
                <Image src={s2} alt="" objectFit='cover'
                 layout='intrinsic'/>
           </div>
           <span>Easy to Order</span>
            <span>Delivering is always on time Even Faster</span>
        </div>

        <div className={css.feature}>
            <div className={css.ImageWrapper}>
                <Image src={s3} alt="" objectFit='cover'
                 layout='intrinsic'/>
            </div>
            <span>Easy to Order</span>
            <span>Not only fast for us, quality is also 
                number one
            </span>

        </div>
    </div>
    </>
  )
}

export default services