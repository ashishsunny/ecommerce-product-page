import { useContext } from 'react';
import style from '../../styles/Components.module.css'
import { AppContext } from '../../contexts/appContext';
import Carousel from '../../components/carousel'
import InfoSection from '../../components/infoSection'
const Main = () => {
    const {isMobVal} = useContext(AppContext);
    return ( 
        <div styles={style.main} style={{display: 'flex', flexDirection: isMobVal ? 'column': 'row'}}>
            <Carousel isMobile={isMobVal}/>
            <InfoSection isMobile={isMobVal}/>
        </div>
     );
}
 
export default Main;