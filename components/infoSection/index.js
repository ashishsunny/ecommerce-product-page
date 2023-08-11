import styles from "../../styles/Components.module.css"
import Image from "next/image";
import icon_minus from "../../public/resources/images/icon-minus.svg"
import icon_plus from "../../public/resources/images/icon-plus.svg"
import cart from "../../public/resources/images/cart.svg"
import data from "../../data/data.js"
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { AppContext } from "../../contexts/appContext";
import ButtonComp from "../button";
const InfoSection = () => {
    const discount_calc = (x, y) => {
       return Math.round((y - x)/y*100)
    }

const {cartVal, setCartVal, navCartValue} = useContext(CartContext);
const {imgVal, currentI, setCartList, cartList} = useContext(AppContext);
const [item, setItem] = useState();

useEffect(() => {
  setItem(currentI)
}, [currentI])

const handleCart = (btn_value) => {
        setCartVal((e)=>{
        return btn_value === 'm' ? (e === 0 ? 0 : e - 1) : e + 1;
        });
    }

    
    const handleItems = () => {
        setCartList((e)=> [...e, item])
      }
 
      console.log(cartList)

    return ( 
    <div className={styles.info_section}>
        <div className={styles.info_section_container}>
            <h4 className={styles.heading_sub}>{data[imgVal-1].brand}</h4>
            <h2 className={styles.heading_main}>{data[imgVal-1].name}</h2>
            <p className={styles.para_sub}>{data[imgVal-1].description}</p>
            <div className={styles.info_section_group_div}>
                <div className={styles.info_section_group_div_left}>
                    <p className={styles.price_heading}>{`$${data[imgVal-1].discountedPrice}`}</p>
                    <div className={styles.price_discount}><p className={styles.price_discount_text}>{`${discount_calc(data[imgVal-1].discountedPrice,data[imgVal-1].originalPrice)}%`}</p></div>
                </div>
                <div className={styles.info_section_group_div_right}>
                    <p className={styles.orig_price}>{`$${data[imgVal-1].originalPrice}`}</p>
                </div>
            </div>
            <div className={styles.item_num_container}>
                <Image  src={icon_minus} className={styles.image_minus} onClick={() => handleCart('m') } alt="logo image minus"/>
                    <p className={styles.item_num}>{cartVal}</p>
                <Image src={icon_plus} className={styles.image_plus} onClick={() => handleCart('p')} alt="logo image plus"/>
            </div>
            <ButtonComp text="Add to Cart" is_cart_btn={false} cart_logo={true} onClick={handleItems}/>
        </div>
    </div> 
    );
}
 
export default InfoSection;