import { Footer } from "../../../main_components/Footer";
import { Header } from "../../../main_components/Header";
import '../../other_pages_styles/categories.css';
import { ThreePlacedStandart } from "./rooms/ThreePlacedOne";
import { ThreePlacedStandart1 } from "./rooms/ThreePlacedOne1";
import { ThreePlacedStandart2 } from "./rooms/ThreePlacedOne2";
import { TwoPlacedStandart } from "./rooms/TwoPlacedOne";

export const Standarts=()=>{
    return(
        <div>
            <Header />
            <div className="rooms">
                <ThreePlacedStandart />
                <ThreePlacedStandart1 />
                <TwoPlacedStandart />
                <ThreePlacedStandart2 />
            </div>
            <Footer />
        </div>
    );
}