import styles from "../../styles/Components.module.css"
import Image from "next/image";
import product1 from "../../public/resources/images/image-product-1.jpg"
import product2 from "../../public/resources/images/image-product-2.jpg"
import product3 from "../../public/resources/images/image-product-3.jpg"
import product4 from "../../public/resources/images/image-product-4.jpg"
import previous from "../../public/resources/images/icon-next.svg"
import next from "../../public/resources/images/icon-previous.svg"
import Cart from "../cart";
import { useState } from "react";
const Carousel = () => {
    const [imgVal, setImgVal] = useState(1);
    const [imgPath, setImgPath] = useState('product1');
    const handleImage = () =>{
        setImgVal((e)=>(e + 1))
        setImgPath(`product${imgVal}`)
    }
    return ( 
    <div className={styles.carousel}>
        <Cart/>
        <Image className={styles.carousel_img} src={product1} />
        <div className={styles.circle_container_left}><Image className={styles.carousel_next} src={next} /></div>
        <div onClick={handleImage} className={styles.circle_container_right }><Image className={styles.carousel_prev} src={previous} /></div>
    </div> 
    );
}
 
export default Carousel;