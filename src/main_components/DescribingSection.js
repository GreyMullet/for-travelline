import GuestHouse from './pics/guestHouse.png';
import './main_components_styles/main.css';
import { DescriptionAndLocation } from './describing_components/DescriptionAndLocation';
import { Slider } from './describing_components/Slider';

export const Description=()=>{
    return(
        <main className='describing-content'>
            <img src={GuestHouse} alt="Guest House" />
            <DescriptionAndLocation />
            <Slider />
        </main>
    );
}