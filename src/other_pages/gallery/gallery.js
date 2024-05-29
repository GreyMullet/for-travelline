import { useState } from "react";
import { Footer } from "../../main_components/Footer";
import { Header } from "../../main_components/Header";
import { useGalleryPics } from "../../storage/storage";
import '../other_pages_styles/gallery.css';
import { SliderGallery } from "./slider";

export const Gallery=()=>{
    const pics=useGalleryPics(state=>state.pics);
    const [choise, setChoise]=useState();
    const [display, setDisplay]=useState(false);
    function Open(i){
        setChoise(pics[i]);
        setDisplay(!display);
        document.body.style.marginLeft = '0%';
        document.body.style.marginRight = '0%';
    }
    return(
        <div className="gallery">
            <SliderGallery choise={choise} display={display} setClose={setDisplay} />
            <Header />
                <section>
                    {
                        pics.map((el,i)=>{
                            return <img src={el} onClick={()=>Open(i)} alt="scenery" />
                        })
                    }
                </section>
            <Footer />
        </div>
    );
}