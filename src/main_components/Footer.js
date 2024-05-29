import Tg from './pics/tg1.png';
import Watsapp from './pics/watsapp1.png';
import Vk from './pics/vk.png';
import './main_components_styles/footer.css';

export const Footer=()=>{
    function toVk(){
        window.location.href='https://vk.com/id588344736';
    }
    function toTg(){
        window.location.href='https://web.telegram.org/k/#@Ogonyanelena';
    }
    return(
        <footer>
            <div>
                <span>Гостевой дом "В Гостях У Светланы"</span>
                <div>
                    <div>
                        <img src={Watsapp} draggable='false' /><img src={Tg} onClick={toTg} draggable='false' /><span>: +7(918)316-00-32</span>
                    </div>
                    <img src={Vk} draggable='false' onClick={toVk} />
                </div>
            </div>
            <div>
                <span>ogonyanelena@mail.ru</span><span>ул. крымская 264</span>
            </div>
        </footer>
    );
}