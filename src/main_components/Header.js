import { LowerOne } from "./header_components/LowerOne";
import { UpperOne } from "./header_components/UpperOne";
import './main_components_styles/header.css';

export const Header=()=>{
    return(
        <header>
            <UpperOne />
            <LowerOne />
        </header>
    );
}