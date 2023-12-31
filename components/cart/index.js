import styles from '../../styles/Components.module.css'
import { useContext, useState, useEffect } from "react";
import { CartContext} from '../../contexts/cartContext';
import { AppContext} from '../../contexts/appContext';
import Image from 'next/image';
import delete_cart from '../../public/resources/images/icon-delete.svg'
import ButtonComp from '../button';
import data from '../../data/data';
import Loader from '../loader';
const Cart = ({isMobile}) => {
    const {cartOn, setCartOn, navCartVal, cartVal, setNavCartVal, clickCount, itemsno, setItemsno} = useContext(CartContext);
    const {imgVal, setImgVal, currentI, cartList, setCartList, setCurrentI, handleItems} = useContext(AppContext);
    const TotalCalc = (amt, no) => amt * no;
    const { name, discountedPrice } = data[imgVal-1];


    
    const CartShell1 = () => {
       return <div className={styles.cart_child2_shell1}>Your Cart is empty</div>
    }

    const handleDelete = (id) =>{
        const updatedCart = cartList.filter((x)=>{
            return id === x.id ? false : true
        })
        setCartList(updatedCart)
        sessionStorage.setItem('myData', JSON.stringify(updatedCart));
    }

    const total = TotalCalc(discountedPrice, cartVal)
    const item  = {
            id: crypto.randomUUID(),
            name: name,
            disc: discountedPrice,
            tot: total,
            val: cartVal,
            img: imgVal
        }

        useEffect(() => {
            setCurrentI(item)
        }, [cartVal, navCartVal, imgVal, clickCount])

    const CartShell2 = () => { 
        const [dataArray, setDataArray] = useState([]);
        useEffect(() => {
            setDataArray(cartList);
          }, []);
       return (
        <div className={styles.cart_child2_shell2}>
                        {
                            dataArray.map((x)=>{
                            return(
                            <div className={styles.cart_child2_text_conatiner}>
                            <div className={styles.cart_thumb_img_container}><Image width={100} height={100} className={styles.cart_thumb_img} src={`/resources/images/image-product-${x.img}-thumbnail.png`} /></div>               
                            <div className={styles.cart_child2_text_container_child}>
                                <div className={styles.cart_child2_text_container_child_1}>
                                    <p className={styles.cart_child2_text_container_child_1_text1}>{x.name}</p>
                                </div>

                                <div className={styles.cart_child2_text_container_child_2}>
                                    <p className={styles.cart_child2_text_container_child_2_text1}>{`$${x.disc} x ${x.val}`}</p>
                                    <p className={styles.cart_child2_text_container_child_2_text2}>{`$${x.tot}`}</p>
                                </div>
                            </div>
                            
                            <div onClick={()=>handleDelete(x.id)}  className={styles.cart_del_img_container}><Image src={delete_cart} className={styles.cart_del_img} alt='delete img' /></div>
                    </div>
                                )
                            })
                        }

                    
                    { cartList.length === 0 ? null : <ButtonComp text="Checkout" is_cart_btn={true} cart_logo={false} />  }    
                </div>
       )
    }

    return ( 
        <div className={isMobile ? styles.cart_comp : styles.cart_comp_dt} style={{display : cartOn ? '' : 'none'}}>
            <div className={styles.cart_child1}>
                <div className={styles.cart_child1_text}>Cart</div>
            </div>

            <div className={styles.cart_child2}>
                { itemsno  === 0 ?  <CartShell1/> : <CartShell2/>}
            </div>
            
        </div>
     );
}
 
export default Cart;