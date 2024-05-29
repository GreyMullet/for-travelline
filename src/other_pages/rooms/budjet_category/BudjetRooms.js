import { Footer } from "../../../main_components/Footer";
import { Header } from "../../../main_components/Header";
import '../../other_pages_styles/categories.css';
import { ThreePlacedOneBudj } from "./rooms/ThreePlacedOne";
import { ThreePlacedOneBudj1 } from "./rooms/ThreePlacedOne1";

export const Budjets=()=>{
    return(
        <div>
            <Header />
            <div className="rooms">
                <ThreePlacedOneBudj />
                <ThreePlacedOneBudj1 />
            </div>
            <Footer />
        </div>
    );
}