import { useState } from "react";
import { Header } from "../../../../main_components/Header";
import { Footer } from "../../../../main_components/Footer";
import { useSliderPics } from "../../../../storage/storage";
import Man from '../pics/man.png';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 120px;
    height: 80px;
    cursor: pointer

    @media screen and (max-width: 1464px) {
        width: 100px;
    }
    @media screen and (max-width: 1244px) {
        width: 90px;
    }
    @media screen and (max-width: 871px) {
        width: 70px;
        height: 60px;
    }
    @media screen and (max-width: 621px) {
        margin-top: 2%;
    }
    @media screen and (max-width: 391px){
        width: 55px;
    }
`;
const StyledArrChoises = styled.div`
    @media screen and (max-width: 871px) {
        flex-wrap: wrap;
    }
`;

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

export const ImprovedOverview = () => {
    const pics = useSliderPics(state => state.pics1);
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

    return (
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
                        <img src={selectedImage} id="shown" onClick={expand} draggable='false' />
                        <StyledArrChoises>
                            {pics.map((el, i) => (
                                <StyledImage src={el} key={i} onClick={() => changeImage(el)} className='change' draggable='false' />
                            ))}
                        </StyledArrChoises>
                    </div>
                    <div className='reserve'>
                        Трёхместный улучшенный комфорт.
                        <u>от 2100 руб.</u>
                        <div>
                            <img src={Man} draggable='false' alt="man" />
                            <img src={Man} draggable='false' alt="man" />
                            <img src={Man} draggable='false' alt="man" />
                        </div>
                        <b>20 кв.м</b>
                        <a href='/other_pages/Booking?room-type=170643' className='book'>Забронировать</a>
                    </div>
                </section>
                <span className='description'>
                    Одна кровать "кинг-сайз" размеров, другая односпальная. Две прикроватные тумбочки, шкаф для вещей <br></br>
                    туалетный столик, кондиционер, телевизор, журнальный столик, холодильник. В санузле душевая кабина, унитаз, раковина. <br></br>
                    Три банных полотенца, туалетная бумага, мыло.
                </span>
                <h1>Цены</h1>
                <ul>
                    <li><b>01.05-20.06:</b> 2100 рублей</li>
                    <li><b>21.06-15.07:</b> 2300 рублей</li>
                    <li><b>16.07-28.08:</b> 3000 рублей</li>
                    <li><b>29.08-30.09:</b> 2000 рублей</li>
                </ul>
            </main>
            <Footer />
        </div>
    );
}