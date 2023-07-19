import Image from 'next/image'
import styles from '../../styles/Components.module.css' 
import menu from '../../public/resources/images/icon-menu.svg'
import logo from '../../public/resources/images/logo.svg'
import cart from '../../public/resources/images/icon-cart.svg'
import user from '../../public/resources/images/image-avatar.png'
import { useContext } from 'react'
import { MenuContext } from '../../contexts/menuContext'
import { CartContext } from '../../contexts/cartContext'

const Nav = () => {

    const { menuOn, setMenuOn } = useContext(MenuContext);
    const {navCartVal, setNavCartVal} = useContext(CartContext);
    const {cartOn, setCartOn} = useContext(CartContext);
    const handleCartClick = () => setCartOn((e)=>(!e));
    const handleClick = () => {
        setMenuOn(!menuOn)
    }

    return (
    <div className={styles.navbar}>
        <div className={styles.navbarelements_container}>
            <Image className={styles.menu} onClick={handleClick} src={menu} />
            <Image className={styles.logo} src={logo} />
            <div className={styles.cart_container} onClick={handleCartClick}>
                <div className={styles.cart_tag}>{navCartVal}</div>
                <Image className={styles.cart} src={cart}/>
            </div>
            <Image className={styles.user} src={user} />
        </div>
    </div>
    );
}
 
export default Nav;