import './other_pages_styles/booking.css';
import {Header} from "../main_components/Header";
import {Footer} from "../main_components/Footer";
import {useEffect} from "react";

export const Booking=()=>{
    useEffect(() => {
        document.title = 'Бронирование в гостевом доме "В Гостях У Светланы", Анапа - официальный сайт';
    }, []);

    return(
        <div className="booking">
            <Header />
            <main>
                <h1>Бронирование</h1>
                <div id='tl-booking-form'>&nbsp;</div>
            </main>
            <Footer />
        </div>
    );
}