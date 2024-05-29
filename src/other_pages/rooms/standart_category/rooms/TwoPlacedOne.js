import { useNavigate } from 'react-router-dom';
import Man from '../pics/man.png';
import Standart from '../pics/standart1.jpeg';

export const TwoPlacedStandart=()=>{
    const navigate=useNavigate();
    function toOverview(){
        navigate('/other_pages/rooms/standart_category/rooms_overviews/TwoPlacedOverview');
    }
    return(
        <div>
            <div><img src={Standart} draggable='false' /></div>
            <div>
                Двухместный стандарт
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