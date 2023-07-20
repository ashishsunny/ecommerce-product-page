import cart from "../../public/resources/images/cart.svg"
import styles from '../../styles/Components.module.css'
import Image from "next/image"
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
const ButtonComp = ({text, cart_logo}) => {
    const {setNavCartVal, cartVal} = useContext(CartContext);

    const handleCartInfo = () =>{
        setNavCartVal(cartVal)
    }

    return ( 
        <div className={styles.button_component}>
                <div className={styles.button_component_container}>
                    <Image className={styles.button_component_svg} style={{display : cart_logo ? '' : 'none'}} src={cart}/>
                    <div className={styles.button_component_text} onClick={handleCartInfo}>{text}</div>
                </div>
        </div>
     );
}
 
export default ButtonComp;