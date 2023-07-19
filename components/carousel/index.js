import styles from "../../styles/Components.module.css"
import Image from "next/image";
import product1 from "../../public/resources/images/image-product-1.jpg"
import previous from "../../public/resources/images/icon-next.svg"
import next from "../../public/resources/images/icon-previous.svg"
import Cart from "../cart";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
const Carousel = () => {
    const {cartOn, setCartOn} = useContext(CartContext);
    const handleCartClick = () => setCartOn(true);
    return ( 
    <div className={styles.carousel}>
        <Cart onClick={handleCartClick}/>
        <Image className={styles.carousel_img} src={product1} />
        <div className={styles.circle_container_left}><Image className={styles.carousel_next} src={next} /></div>
        <div className={styles.circle_container_right}><Image className={styles.carousel_prev} src={previous} /></div>
    </div> 
    );
}
 
export default Carousel;