import { useNavigate } from 'react-router-dom';
import Lux from '../pics/lux.jpeg';
import Man from '../pics/man.png';
import '../../../other_pages_styles/overviews.css';

export const Improved=()=>{
    const navigate=useNavigate();
    function toOverview(){
        navigate('/other_pages/rooms/comfort_category/rooms_overviews/ImprovedOverview');
    }
    return(
        <div>
            <div><img src={Lux} draggable='false' /></div>
            <div>
                Улучшенный
                <u>от 2100 руб.</u>
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