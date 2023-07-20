import styles from '../../styles/Components.module.css'
import { useContext } from "react";
import { CartContext } from '../../contexts/cartContext';
import Image from 'next/image';
import prod1_thumb from '../../public/resources/images/image-product-1-thumbnail.jpg'
import delete_cart from '../../public/resources/images/icon-delete.svg'
import ButtonComp from '../button';
import data from '../../data/data';
const Cart = () => {
    const {cartOn, setCartOn, navCartVal, cartVal} = useContext(CartContext);
    const TotalCalc = (amt, no) => amt * no;
    return ( 
        <div className={styles.cart_comp} style={{display : cartOn ? '' : 'none'}}>
            <div className={styles.cart_child1}>
                <div className={styles.cart_child1_text}>Cart</div>
            </div>

            <div className={styles.cart_child2}>
                {/* <div className={styles.cart_child2_text}>Your Cart is empty</div> */}
                <div className={styles.cart_child2_shell}>
                    <div className={styles.cart_child2_text_conatiner}>
                            <div className={styles.cart_thumb_img_container}><Image src={prod1_thumb} className={styles.cart_thumb_img} /></div>
                            
                            <div className={styles.cart_child2_text_container_child}>
                                <div className={styles.cart_child2_text_container_child_1}>
                                    <p className={styles.cart_child2_text_container_child_1_text1}>{data[0].name}</p>
                                </div>

                                <div className={styles.cart_child2_text_container_child_2}>
                                    <p className={styles.cart_child2_text_container_child_2_text1}>{`$${data[0].discountedPrice} x ${navCartVal}`}</p>
                                    <p className={styles.cart_child2_text_container_child_2_text2}>{`$${TotalCalc(data[0].discountedPrice, navCartVal)}`}</p>
                                </div>
                            </div>

                            <div className={styles.cart_del_img_container}><Image src={delete_cart} className={styles.cart_del_img} /></div>
        
                    </div>
                    <ButtonComp text="Checkout" cart_logo={false} />
                </div>
            </div>
        </div>
     );
}
 
export default Cart;