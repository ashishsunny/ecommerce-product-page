import styles from '../../styles/Components.module.css'
import { useContext, useState, useEffect } from "react";
import { CartContext, AppContext } from '../../contexts/cartContext';
import Image from 'next/image';
import prod1_thumb from '../../public/resources/images/image-product-1-thumbnail.jpg'
import delete_cart from '../../public/resources/images/icon-delete.svg'
import ButtonComp from '../button';
import data from '../../data/data';
const Cart = () => {
    const [val, setValue] = useState(0);
    const {cartOn, setCartOn, navCartVal, cartVal, setNavCartVal} = useContext(CartContext);
    const {imgVal, setImgVal} = useContext(CartContext);
    const TotalCalc = (amt, no) => amt * no;
    useEffect(() => {
    setValue(imgVal)
    }, [imgVal])
    
    const { name, discountedPrice } = data[val];
    
    const CartShell1 = () => {
       return <div className={styles.cart_child2_shell1}>Your Cart is empty</div>
    }

    const handleRemove = () =>{
        setNavCartVal(0)
    }
    const CartShell2 = () => {
       return (
        <div className={styles.cart_child2_shell2}>
                    <div className={styles.cart_child2_text_conatiner}>
                            <div className={styles.cart_thumb_img_container}><Image src={prod1_thumb} className={styles.cart_thumb_img} alt='prod thumbnail' /></div>
                            
                            <div className={styles.cart_child2_text_container_child}>
                                <div className={styles.cart_child2_text_container_child_1}>
                                    <p className={styles.cart_child2_text_container_child_1_text1}>{name}</p>
                                </div>

                                <div className={styles.cart_child2_text_container_child_2}>
                                    <p className={styles.cart_child2_text_container_child_2_text1}>{`$${discountedPrice} x ${navCartVal}`}</p>
                                    <p className={styles.cart_child2_text_container_child_2_text2}>{`$${TotalCalc(discountedPrice, navCartVal)}`}</p>
                                </div>
                            </div>

                            <div  onClick={handleRemove}  className={styles.cart_del_img_container}><Image src={delete_cart} className={styles.cart_del_img} alt='delete img' /></div>
        
                    </div>
                    <ButtonComp text="Checkout" is_cart_btn={true} cart_logo={false} />
                </div>
       )
    }
    return ( 
        <div className={styles.cart_comp} style={{display : cartOn ? '' : 'none'}}>
            <div className={styles.cart_child1}>
                <div className={styles.cart_child1_text}>Cart</div>
            </div>

            <div className={styles.cart_child2}>
                { navCartVal === 0 ?  <CartShell1/> : <CartShell2/>}
            </div>
        </div>
     );
}
 
export default Cart;