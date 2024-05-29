import { useNavigate } from 'react-router-dom';
import Lux from '../pics/lux1.jpg';
import Man from '../pics/man.png';

export const ThreePlacedLux=()=>{
    const navigate=useNavigate();
    function toOverview(){
        navigate('/other_pages/rooms/comfort_category/rooms_overviews/ThreePlacedOverview');
    }
    return(
        <div>
            <div><img src={Lux} draggable='false' /></div>
            <div>
                Трёхместный комфорт
                <u>от 1800 руб.</u>
                <div>
                    <img src={Man} draggable='false' />
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