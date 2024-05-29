import { Footer } from "../../../main_components/Footer";
import { Header } from "../../../main_components/Header";
import { Improved } from "./rooms/ImprovedOne";
import '../../other_pages_styles/categories.css';
import { ThreePlacedLux } from "./rooms/ThreePlacedOne";
import { ThreePlacedLux1 } from "./rooms/ThreePlacedOne1";
import { TwoPlacedLux } from "./rooms/TwoPlacedOne";
import { TwoPlacedLux1 } from "./rooms/TwoPlacedOne1";
import { TwoPlacedLux2 } from "./rooms/TwoPlacedOne2";
import { TwoPlacedLux3 } from "./rooms/TwoPlacedOne3";

export const Comforts=()=>{
    return(
        <div>
            <Header />
            <div className="rooms">
                <Improved />
                <ThreePlacedLux />
                <ThreePlacedLux1 />
                <TwoPlacedLux />
                <TwoPlacedLux1 />
                <TwoPlacedLux2 />
                <TwoPlacedLux3 />
            </div>
            <Footer />
        </div>
    );
}