import { useNavigate } from 'react-router-dom';
import Lux from '../pics/lux4.jpeg';
import Man from '../pics/man.png';

export const TwoPlacedLux3=()=>{
    const navigate=useNavigate();
    function toOverview(){
        navigate('/other_pages/rooms/comfort_category/rooms_overviews/TwoPlacedOverview3/');
    }
    return(
        <div>
            <div><img src={Lux} draggable='false' /></div>
            <div>
                Двухместный комфорт "Невидовой"
                <u>от 1200 руб.</u>
                <div>
                    <img src={Man} draggable='false' />
                    <img src={Man} draggable='false' />
                </div>
            </div>
            <div>
                <button onClick={toOverview}>Посмотреть</button>
            </div>
        </div>
    );
}