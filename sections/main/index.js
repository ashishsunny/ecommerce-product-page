import { useContext } from 'react';
import style from '../../styles/Components.module.css'
import { AppContext } from '../../contexts/appContext';
import Carousel from '../../components/carousel'
import InfoSection from '../../components/infoSection'
const Main = () => {
    const {isMobVal} = useContext(AppContext);
    return ( 
        <div styles={style.main}>
            <Carousel isMobile={isMobVal}/>
            <InfoSection/>
        </div>
     );
}
 
export default Main;