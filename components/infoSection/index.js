import styles from "../../styles/Components.module.css"
import Image from "next/image";
import icon_minus from "../../public/resources/images/icon-minus.svg"
import icon_plus from "../../public/resources/images/icon-plus.svg"
import cart from "../../public/resources/images/cart.svg"
import data from "../../data/data.js"
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
const InfoSection = () => {
    const discount_calc = (x, y) => {
       return x - (x*(y/100))
    }
const {navCartVal, setNavCartVal} = useContext(CartContext);
const [cartVal, setCartVal] = useState(0)

const handleCart = (btn_value) => {
        setCartVal((e)=>{
            return btn_value === 'm' ? (e === 0 ? 0 : e - 1) : e + 1;
        });
    }

const handleCartInfo = () =>{
        setNavCartVal(cartVal)
    }

    return ( 
    <div className={styles.info_section}>
        <div className={styles.info_section_container}>
            <h4 className={styles.heading_sub}>Sneaker Company</h4>
            <h2 className={styles.heading_main}>Fall Limited Edition Sneakers</h2>
            <p className={styles.para_sub}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className={styles.info_section_group_div}>
                <div className={styles.info_section_group_div_left}>
                    <p className={styles.price_heading}>{`$${data[0].originalPrice}`}</p>
                    <div className={styles.price_discount}><p className={styles.price_discount_text}>{`${data[0].discountPercentage}%`}</p></div>
                </div>
                <div className={styles.info_section_group_div_right}>
                    <p className={styles.orig_price}>{`$${discount_calc(data[0].originalPrice, data[0].discountPercentage)}`}</p>
                </div>
            </div>
            <div className={styles.item_num_container}>
                <Image src={icon_minus} className={styles.image_minus} onClick={() => handleCart('m')}/>
                    <p className={styles.item_num}>{cartVal}</p>
                <Image src={icon_plus} className={styles.image_plus} onClick={() => handleCart('p')}/>
            </div>
            <div className={styles.button_component}>
            <div className={styles.button_component_container}>
                <Image className={styles.button_component_svg} src={cart}/>
                <div className={styles.button_component_text} onClick={handleCartInfo}>Add to Cart</div>
            </div>
            </div>
        </div>
    </div> 
    );
}
 
export default InfoSection;