import { useState } from "react";
import { Header } from "../../../../main_components/Header";
import { Footer } from "../../../../main_components/Footer";
import { useSliderPics } from "../../../../storage/storage";
import Man from '../pics/man.png';
import { useNavigate } from "react-router-dom";

export const ThreePlacedOverviewBudj=()=>{
    const pics=useSliderPics(state=>state.pics12);
    const [selectedImage, setSelectedImage] = useState(pics[0]);

    const changeImage = (src) => {
        setSelectedImage(src);
    };

    const navigate=useNavigate();
    return(
        <div className="room">
            <Header />
            <main>
                <section>
                    <div className='slider'>
                        <img src={selectedImage} id='shown' draggable='false' alt="room picture" />
                        <div>
                            {pics.map((el,i)=>{
                                return <img src={el} key={i} className="change" onClick={()=>changeImage(el,i)} draggable='false' />
                            })}
                        </div>
                    </div>
                    <div className='reserve'>
                    Трёхместный стандарт
                        <u>от 1500 руб.</u>
                        <div>
                            <img src={Man} draggable='false' alt="man" />
                            <img src={Man} draggable='false' alt="man" />
                            <img src={Man} draggable='false' alt="man" />
                        </div>
                        <b>15 кв.м</b>
                        <button className='book' onClick={()=>navigate('/other_pages/Booking')}>Забронировать</button>
                    </div>
                </section>
                <span className='description'>
                    Трёхместный номер. Присутствует кондиционер, телевизор, камод, журнальный столик, тумбочка, вешалка. <br></br>
                    Санузел в номере: душ, раковина, унитаз.
                </span>
            </main>
            <Footer />
        </div>
    );
}