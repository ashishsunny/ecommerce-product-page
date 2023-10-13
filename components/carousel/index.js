import styles from '../../styles/Components.module.css'
import Image from 'next/image'
import previous from '../../public/resources/images/icon-next.svg'
import next from '../../public/resources/images/icon-previous.svg'
import Cart from '../cart'
import { useContext } from 'react'
import { AppContext } from '../../contexts/appContext'
import { useState, useEffect } from 'react'
import data from '../../data/data'

const Carousel = ({ isMobile }) => {
  const { imgVal, setImgVal } = useContext(AppContext)
  const [style_l, setStyle_l] = useState({})
  const [style_r, setStyle_r] = useState({})
  const imageBasePath = '/resources/images/' // Replace with your image base path

  useEffect(() => {
    setStyle_l({
      background: imgVal === 1 ? '#c9c7c7' : ' #fff',
      cursor: imgVal > 1 ? 'pointer' : '',
      pointerEvents: imgVal > 1 ? '' : 'none',
    })
    setStyle_r({
      background: imgVal === 4 ? '#c9c7c7' : ' #fff',
      cursor: imgVal < 4 ? 'pointer' : '',
      pointerEvents: imgVal < 4 ? '' : 'none',
    })
  }, [imgVal])

  const handleImage = (value) => {
    setImgVal((e) =>
      value === 'l' ? (e === 0 ? 0 : e - 1) : e === 5 ? 4 : e + 1
    )
  }
  useEffect(() => {}, [handleImage])
  return (
    <div className={styles.carousel}>
      {isMobile ? (
        <>
          <Cart />
          <Image
            className={styles.carousel_img}
            src={`${imageBasePath}image-product-${imgVal}.png`}
            alt="product image"
            width={300}
            height={300}
          />
          <div
            style={style_l}
            onClick={() => handleImage('l')}
            className={styles.circle_container_left}
          >
            <Image className={styles.carousel_next} src={next} alt="next btn" />
          </div>
          <div
            style={style_r}
            onClick={() => handleImage('r')}
            className={styles.circle_container_right}
          >
            <Image
              className={styles.carousel_prev}
              src={previous}
              alt="prev btn"
            />
          </div>
        </>
      ) : (
        <>
          <Cart />
          <Image
            className={styles.carousel_img_dt}
            src={`${imageBasePath}image-product-${imgVal}.png`}
            alt="product image"
            width={300}
            height={300}
          />

          <div className={styles.carousel_sub2_dt} style={{padding: "1.5rem"}}>
            {data.map(({sneakerId}) => {
              while(sneakerId<5){
              return(
              <div style={{position:"relative"}} onClick={()=>setImgVal(sneakerId)}>
              <div className={imgVal !== (sneakerId) ? styles.overlay_cont_dt : null} style={{ background: "rgba(255, 255, 255, 0.577)"}}></div>
              <Image
              className={styles.carousel_thumb_img}
              src={`/resources/images/image-product-${sneakerId}-thumbnail.png`}
              alt="product image"
              width={80}
              height={80}
              style={{borderRadius: "10px" , border: imgVal === (sneakerId) ? "2px solid #FF7E1B" : null}}
            /> 
            </div>
              )
              }
})}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel
