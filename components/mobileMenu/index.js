import styles from '../../styles/Components.module.css'
import Image from 'next/image';
import close_icon from '../../public/resources/images/icon-close.svg'
import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
const MobileMenu = () => {
    const { menuOn, setMenuOn } = useContext(MenuContext);
    const styleVal = {left: menuOn ? '0%' : ''};    
    const handleClick = () =>{
        setMenuOn(!menuOn)
    }
    
    return ( 
        <div className={styles.mobile_menu} style={styleVal}>
            <Image className={styles.menu_image} src={close_icon} onClick={handleClick} />
            <div className={styles.menu_items_container}>
                <div className={styles.menu_items}>Collections</div>
                <div className={styles.menu_items}>Men</div>
                <div className={styles.menu_items}>Women</div>
                <div className={styles.menu_items}>About</div>
                <div className={styles.menu_items}>Contact</div>
            </div>
        </div>
     );
}
 
export default MobileMenu;