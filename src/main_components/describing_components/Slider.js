import scen from '../pics/slider_pics/scenery.jpg';
import scen1 from '../pics/slider_pics/scenery1.jpg';
import scen2 from '../pics/slider_pics/scenery2.jpg';
import scen3 from '../pics/slider_pics/scenery3.jpg';
import scen4 from '../pics/slider_pics/scenery4.jpeg';
import scen5 from '../pics/slider_pics/scenery5.jpg';
import scen6 from '../pics/slider_pics/scenery6.jpg';
import scen7 from '../pics/slider_pics/scenery7.jpeg';
import scen8 from '../pics/slider_pics/scenery8.jpeg';
import scen9 from '../pics/slider_pics/scenery9.jpeg';
import scen10 from '../pics/slider_pics/scenery10.jpeg';
import { useState } from 'react';

export const Slider = () => {
    const pics = [scen, scen1, scen2, scen3, scen4, scen5, scen6, scen7, scen8, scen9, scen10];

    const [picture, setPicture] = useState(scen);
    const [i, setInc] = useState(0);

    function next() {
        const newIndex = (i + 1) % pics.length;
        setPicture(pics[newIndex]);
        setInc(newIndex);
        console.log(newIndex);
    }

    function prev(e) {
        e.stopPropagation();
        const newIndex = (i - 1 + pics.length) % pics.length;
        setPicture(pics[newIndex]);
        setInc(newIndex);
        console.log(newIndex);
    }

    return (
        <section>
            <span>Пейзажи Анапы</span>
            <div>
                <img src={picture} alt='scenery' />
                <div>
                    <button className='prev' onClick={(e)=>prev(e)}>пред</button>
                    <button className='next' onClick={(e)=>next(e)}>след</button>
                </div>
            </div>
        </section>
    );
}