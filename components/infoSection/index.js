import styles from "../../styles/Components.module.css"
import Image from "next/image";
import icon_minus from "../../public/resources/images/icon-minus.svg"
import icon_plus from "../../public/resources/images/icon-plus.svg"
import cart from "../../public/resources/images/cart.svg"
import data from "../../data/data.js"
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import ButtonComp from "../button";
const InfoSection = () => {
    const discount_calc = (x, y) => {
       return (y - (x*100)/y)
    }

const {cartVal, setCartVal} = useContext(CartContext);


const handleCart = (btn_value) => {
        setCartVal((e)=>{
            return btn_value === 'm' ? (e === 0 ? 0 : e - 1) : e + 1;
        });
    }

    return ( 
    <div className={styles.info_section}>
        <div className={styles.info_section_container}>
            <h4 className={styles.heading_sub}>Sneaker Company</h4>
            <h2 className={styles.heading_main}>{data[0].name}</h2>
            <p className={styles.para_sub}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className={styles.info_section_group_div}>
                <div className={styles.info_section_group_div_left}>
                    <p className={styles.price_heading}>{`$${data[0].discountedPrice}`}</p>
                    <div className={styles.price_discount}><p className={styles.price_discount_text}>{`${discount_calc(data[0].discountedPrice,data[0].originalPrice)}%`}</p></div>
                </div>
                <div className={styles.info_section_group_div_right}>
                    <p className={styles.orig_price}>{`$${data[0].originalPrice}`}</p>
                </div>
            </div>
            <div className={styles.item_num_container}>
                <Image src={icon_minus} className={styles.image_minus} onClick={() => handleCart('m')}/>
                    <p className={styles.item_num}>{cartVal}</p>
                <Image src={icon_plus} className={styles.image_plus} onClick={() => handleCart('p')}/>
            </div>
            <ButtonComp text="Add to Cart" cart_logo={true}/>
        </div>
    </div> 
    );
}
 
export default InfoSection;