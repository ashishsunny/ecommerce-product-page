import cart from "../../public/resources/images/cart.svg"
import styles from '../../styles/Components.module.css'
import Image from "next/image"
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
const ButtonComp = ({text, cart_logo, is_cart_btn}) => {
    const {setNavCartVal, cartVal} = useContext(CartContext);

    const handleCartInfo = () =>{
        setNavCartVal(cartVal)
    }

    const [btn_style, setBtn_style] = useState({});
    useEffect(() => {
        setBtn_style({
            background: is_cart_btn ? ' #FF7E1B' : (cartVal === 0 ?  "#f39147" : ' #FF7E1B'),
            cursor: cartVal === 0 ? '' : 'pointer',
            pointerEvents: cartVal === 0 ? 'none' : ''
        });
      }, [cartVal, is_cart_btn]);

    return ( 
        <div className={styles.button_component} style={btn_style} onClick={is_cart_btn ? null : handleCartInfo}>
                <div className={styles.button_component_container}>
                    <Image className={styles.button_component_svg} style={{display : cart_logo ? '' : 'none'}} src={cart} alt="button component svg"/>
                    <div className={styles.button_component_text}>{text}</div>
                </div>
        </div>
     );
}
 
export default ButtonComp;