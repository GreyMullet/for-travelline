import { useNavigate } from 'react-router-dom';
import Budj from '../pics/budj1.jpeg';
import Man from '../pics/man.png';

export const ThreePlacedOneBudj1=()=>{
    const navigate=useNavigate();
    function toOverview(){
        navigate('/other_pages/rooms/budjet_category/rooms_overviews/ThreePlacedOverview');
    }
    return(
        <div>
            <div><img src={Budj} draggable='false' /></div>
            <div>
                Трёхместный бюджет
                <u>от 1000 руб.</u>
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