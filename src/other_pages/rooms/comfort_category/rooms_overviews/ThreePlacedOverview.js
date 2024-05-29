import { useState } from "react";
import { Header } from "../../../../main_components/Header";
import { Footer } from "../../../../main_components/Footer";
import { useSliderPics } from "../../../../storage/storage";
import Man from '../pics/man.png';
import styled from "styled-components";


const StyledImgOpen = styled.img`
    width: 60%;
    height: 70%;
    @media screen and (max-width: 1235px) {
        &.expanded {
            width: 70%;
        }
    }
    @media screen and (max-width: 1005px) {
        &.expanded {
            height: 60%;
        }
    }
    @media screen and (max-width: 883px) {
        &.expanded {
            height: 50%;
        }
    }
    @media screen and (max-width: 723px) {
        &.expanded {
            width: 80%;
        }
    }
    @media screen and (max-width: 649px) {
        &.expanded {
            height: 40%;
        }
    }
    @media screen and (max-width: 649px) {
        &.expanded {
            width: 90%;
        }
    }
    @media screen and (max-width: 481px) {
        &.expanded {
            width: 80%;
            height: 30%;
        }
    }
    @media screen and (max-width: 398px) {
        &.expanded {
            width: 90%;
            height: 25%;
        }
    }
`;

export const ThreePlacedOverview=()=>{
    const pics=useSliderPics(state=>state.pics2);
    const [selectedImage, setSelectedImage] = useState(pics[0]);

    const changeImage = (src) => {
        setSelectedImage(src);
    };

    const openShow = {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        background: 'rgba(169, 169, 169, 0.9)'
    };
    const closeStyle = {
        fontSize: '30px',
        fontFamily: 'sans-serif',
        alignSelf: 'start',
        cursor: 'pointer'
    };

    const [isExpanded, setExpanded] = useState(false);

    const expand = () => {
        setExpanded(!isExpanded);
        document.body.style.marginLeft = '0%';
        document.body.style.marginRight = '0%';
    }
    const closeWin = () => {
        setExpanded(!isExpanded);
        document.body.style.marginLeft = '2%';
        document.body.style.marginRight = '2%';
    }

    return(
        <div className="room">
            {
                isExpanded &&
                <div style={openShow}>
                    <StyledImgOpen src={selectedImage} className="expanded" />
                    <span style={closeStyle} onClick={closeWin}>X</span>
                </div>
            }
            <Header />
            <main>
                <section>
                    <div className='slider'>
                        <img src={selectedImage} id='shown' onClick={expand} draggable='false' />
                        <div>
                            {pics.map((el,i)=>{
                                return <img src={el} key={i} className="change" onClick={() => changeImage(el)} draggable='false' />
                            })}
                        </div>
                    </div>
                    <div className='reserve'>
                    Трёхместный комфорт.
                        <u>от 1800 руб.</u>
                        <div>
                            <img src={Man} draggable='false' alt="man" />
                            <img src={Man} draggable='false' alt="man" />
                            <img src={Man} draggable='false' alt="man" />
                        </div>
                        <b>17 кв.м</b>
                        <button className='book'>Забронировать</button>
                    </div>
                </section>
                <span className='description'>
                    Односпальная, двуспальная кровати, кондиционер, телевизор, шкаф для вещей, две прикроватные тумбочки, <br></br>
                    журнальный столик. В номере панорамное окно, с выходом на маленький (французский) балкон. <br></br>
                    Санузел в номере. В санузле душевая кабина, унитаз, раковина. Три банных полотенца, туалетная бумага, мыло.
                </span>
                <h1>Цены</h1>
                <ul>
                    <li><b>01.05-20.06:</b> 2000 рублей</li>
                    <li><b>21.06-15.07:</b> 2300 рублей</li>
                    <li><b>16.07-28.08:</b> 2700 рублей</li>
                    <li><b>29.08-30.09:</b> 1800 рублей</li>
                </ul>
            </main>
            <Footer />
        </div>
    );
}