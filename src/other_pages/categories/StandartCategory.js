import { useNavigate } from 'react-router-dom';
import Standart from '../pics/standart.jpg';

export const StandartCategory=()=>{
    const navigate = useNavigate();
    function toStandarts(){
        navigate('/other_pages/rooms/standart_category/StandartRooms');
    }
    return(
        <div>
            <div><img src={Standart} draggable='false' /></div>
            <div>
                Категория номеров "Стандарт"
                <u>от 1500 руб.</u>
            </div>
            <div>
                <button onClick={toStandarts}>Подробнее</button>
            </div>
        </div>
    );
}