import styles from '../../styles/Components.module.css'
import { useContext } from "react";
import { CartContext } from '../../contexts/cartContext';
const Cart = () => {
    const {cartOn, setCartOn} = useContext(CartContext);
    return ( 
        <div className={styles.cart_comp} style={{display : cartOn ? '' : 'none'}}>
            <div className={styles.cart_child1}>
                <div className={styles.cart_child1_text}>Cart</div>
            </div>

            <div className={styles.cart_child2}>
                <div className={styles.cart_child2_text}>Your Cart is empty</div>
            </div>
        </div>
     );
}
 
export default Cart;