import { Header } from "../main_components/Header";
import { ComfortCategory } from "./categories/ComfortCategory";
import { StandartCategory } from "./categories/StandartCategory";
import { BudjetCategory } from "./categories/BudjetCategory";
import { Footer } from "../main_components/Footer";
import Studio from './pics/studio.jpg';
import Man from './pics/man.png';
import './other_pages_styles/categories.css';
import { useNavigate } from "react-router-dom";

export const RoomsCategories=()=>{
    const navigate = useNavigate();
    function toStudio(){
        navigate('/other_pages/rooms/Studio');
    }
    return(
        <div className="rooms-categories">
            <Header />
            <main className="rooms">
                {/*Studio apartments don't need a separate category*/}
                <div>
                    <div><img src={Studio} draggable='false' /></div>
                    <div>
                        Апартаменты студия
                        <u>от 3000 руб.</u>
                        <div>
                            <img src={Man} draggable='false' />
                            <img src={Man} draggable='false' />
                            <img src={Man} draggable='false' />
                            <img src={Man} draggable='false' />
                        </div>
                    </div>
                    <div>
                        <button onClick={toStudio}>Подробнее</button>
                    </div>
                </div>
                <ComfortCategory />
                <StandartCategory />
                <BudjetCategory />
            </main>
            <Footer />
        </div>
    );
}