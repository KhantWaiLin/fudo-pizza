import css from '../styles/Header.module.css'
import logo from '../assets/Logo.png'
import Image from 'next/image'
import {UilShoppingBag,UilReceipt} from '@iconscout/react-unicons'
import { useStore } from '../store/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    
    //state terminal printing
    const [order,setOrder] = useState("");
    const state = useStore((state)=>state);
    
    const items = useStore((state)=>state.cart.pizzas.length);

    useEffect(()=>{
        setOrder(localStorage.getItem("order"));
    })

    return(
        <div className={css.header}>
            <div className= {css.logo}>
                {/* logoImage */}
                <Image src={logo} alt="" width={50} height={50}/>
                <span>Fudo</span>

            </div>
            {/* Menu */}
            <ul className={css.menu}>
                <li>
                    <Link href={'../'}> Home</Link>
                </li>
                <li><Link href={'#menu'}>Menu</Link></li>
                <li>Content</li>

            </ul>
            {/* Right Side */}
            <div className={css.rightSide}>
                {/* cart Side */}
                <Link href='/cart'>
                <div className={css.cart}>

                    <UilShoppingBag size={35} color='#2E2E2E' />
                    <div className={css.badge}>
                        {items}
                    </div>
                </div>
                </Link>
                {order && (
                    <Link href={`/order/${order}`}>
                        <div className={css.cart}>
                            <UilReceipt size={35} color='#2E2E2E'/>
                            {order!=="" && (
                                <div className={css.badge}>
                                    1
                                </div>
                            )}

                        </div>
                    
                    </Link>
                )}
            </div>



        </div>
    )
}