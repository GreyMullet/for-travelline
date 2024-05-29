import { useNavigate } from 'react-router-dom';
import Lux from '../pics/lux.jpeg';

export const ComfortCategory=()=>{
    const navigate=useNavigate();
    function toComforts(){
        navigate('/other_pages/rooms/comfort_category/ComfortRooms');
    }
    return(
        <div>
            <div><img src={Lux} draggable='false' /></div>
            <div>
                Категория номеров "Комфорт"
                <u>от 1800 руб.</u>
            </div>
            <div>
                <button onClick={toComforts}>Подробнее</button>
            </div>
        </div>
    );
}