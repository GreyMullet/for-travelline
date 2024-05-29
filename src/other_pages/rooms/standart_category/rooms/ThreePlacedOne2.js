import { useNavigate } from 'react-router-dom';
import Man from '../pics/man.png';
import Standart from '../pics/standart3.jpeg';

export const ThreePlacedStandart2=()=>{
    const navigate=useNavigate();
    function toOverview(){
        navigate('/other_pages/rooms/standart_category/rooms_overviews/ThreePlacedOverview2');
    }
    return(
        <div>
            <div><img src={Standart} draggable='false' /></div>
            <div>
                Трёхместный стандарт
                <u>от 1500 руб.</u>
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