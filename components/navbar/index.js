import Image from 'next/image'
import styles from '../../styles/Components.module.css'
import menu from '../../public/resources/images/icon-menu.svg'
import logo from '../../public/resources/images/logo.svg'
import cart from '../../public/resources/images/icon-cart.svg'
import user from '../../public/resources/images/image-avatar.png'
import { useContext } from 'react'
import { MenuContext } from '../../contexts/menuContext'
import { CartContext } from '../../contexts/cartContext'
import { AppContext } from '../../contexts/appContext'

const Nav = ({ isMobile }) => {
  const { menuOn, setMenuOn } = useContext(MenuContext)
  const { cartList } = useContext(AppContext)
  const { navCartVal, setNavCartVal, itemsno, setItemsno } =
    useContext(CartContext)
  const { cartOn, setCartOn } = useContext(CartContext)
  const handleCartClick = () => setCartOn((e) => !e)
  const handleClick = () => {
    setMenuOn(!menuOn)
  }

  let items_no = 0
  cartList.map((i) => {
    items_no += i.val
  })
  setItemsno(items_no)

  return (
    <div className={styles.navbar}>
      {isMobile ? (
        <div className={styles.navbarelements_container}>
          <Image
            className={styles.menu}
            onClick={handleClick}
            src={menu}
            alt="menu image logo"
          />
          <Image className={styles.logo} src={logo} alt="app logo" />
          <div className={styles.cart_container} onClick={handleCartClick}>
            <div className={styles.cart_tag}>{items_no}</div>
            <Image className={styles.cart} src={cart} alt="cart logo" />
          </div>
          <Image className={styles.user} src={user} alt="user avatar" />
        </div>
      ) : (
        <div className={styles.navbarelements_container}>
        <div className={styles.subcont_1}>
          <Image className={styles.logo} src={logo} alt="app logo" />
          <ul className={styles.menuitemscont}>
            <li className={styles.menu_item}>Collections</li>
            <li className={styles.menu_item}>Men</li>
            <li className={styles.menu_item}>Women</li>
            <li className={styles.menu_item}>About</li>
            <li className={styles.menu_item}>Contact</li>
          </ul>
        </div>
        <div className={styles.subcont_2}>
          <div className={styles.cart_container} onClick={handleCartClick}>
            <div className={styles.cart_tag}>{items_no}</div>
            <Image className={styles.cart} src={cart} alt="cart logo" />
          </div>
          <Image className={styles.user} src={user} alt="user avatar" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Nav
