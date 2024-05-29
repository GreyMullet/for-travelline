import { useNavigate } from 'react-router-dom';
import Budjet from '../pics/budjet.jpeg';

export const BudjetCategory=()=>{
    const navigate = useNavigate();
    function toBudjets(){
        alert("В разработке...");
    }
    return(
        <div data-aos="zoom-in">
            <div><img src={Budjet} draggable='false' /></div>
            <div>
                Категория номеров "Бюджет"
                <u>от 1100 руб.</u>
            </div>
            <div>
                <button onClick={toBudjets}>Подробнее</button>
            </div>
        </div>
    );
}