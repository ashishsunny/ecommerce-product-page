import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/navbar'
import Carousel from '../components/carousel'
import InfoSection from '../components/infoSection'
import MobileMenu from '../components/mobileMenu'
import { MenuContext } from '../contexts/menuContext'
import { useState } from 'react'
import { CartContext } from '../contexts/cartContext'

export default function Home() {
  const [menuOn, setMenuOn] = useState(false)
  const [navCartVal, setNavCartVal] = useState(0)
  const [cartOn, setCartOn] = useState(false)
  return (
    <MenuContext.Provider value={{menuOn, setMenuOn}}>
    <CartContext.Provider value={{navCartVal, setNavCartVal, cartOn, setCartOn}}>
    <div className='home'>
      <Nav/>
      <Carousel/>
      <InfoSection/>
      <MobileMenu/>
    </div>
    </CartContext.Provider>
    </MenuContext.Provider>
  )
}
