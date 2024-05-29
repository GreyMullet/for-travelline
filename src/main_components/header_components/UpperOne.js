import Watsapp from '../pics/watsapp.png';
import Tg from '../pics/tg.png';

export const UpperOne=()=>{
    function toTg(){
        window.location.href='https://web.telegram.org/k/#@Ogonyanelena';
    }
    return(
        <div>
            <div>
                <span>Гостевой дом "В Гостях У Светланы"</span>
            </div>
            <div>
                <div className='connect'>
                    <div className='connect-images'>
                        <img src={Watsapp} alt="watsapp" draggable='false' />
                        <img src={Tg} alt="tg" onClick={toTg} draggable='false' />
                    </div>
                    <span>:</span>
                    <span>+7(918) 31-600-32</span>
                </div>
            </div>
        </div>
    );
}