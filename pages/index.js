import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/navbar'
import MobileMenu from '../components/mobileMenu'
import { MenuContext } from '../contexts/menuContext'
import { useState, useEffect } from 'react'
import { CartContext } from '../contexts/cartContext'
import { AppContext } from '../contexts/appContext'
import Main from '../sections/main'

export default function Home() {
  const [menuOn, setMenuOn] = useState(false)
  const [navCartVal, setNavCartVal] = useState(0)
  const [cartOn, setCartOn] = useState(false)
  const [cartVal, setCartVal] = useState(0)
  const [imgVal, setImgVal] = useState(1);
  const [cartList, setCartList] = useState([]) 
  const [currentI, setCurrentI] = useState("")
  const [clickCount, setClickCount] = useState(0)
  const [itemsno, setItemsno] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const storedCartList = sessionStorage.getItem('myData');
    if (storedCartList) {
      setCartList(JSON.parse(storedCartList));
    }
  }, []);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewportWidth(window.innerWidth);
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const isMobVal = viewportWidth > 1024 ? false : true;

  return (
    <AppContext.Provider value={{imgVal, setImgVal, currentI, cartList, setCartList, setCurrentI, isMobVal}}>
    <MenuContext.Provider value={{menuOn, setMenuOn}}>
    <CartContext.Provider value={{navCartVal, setNavCartVal, cartOn, setCartOn, cartVal, setCartVal, clickCount, setClickCount, itemsno, setItemsno}}>
    <div className='home'>
      <Nav isMobile={isMobVal}/>
      <MobileMenu/>
      <Main/>
    </div>
    </CartContext.Provider>
    </MenuContext.Provider>
    </AppContext.Provider>
  )
}
