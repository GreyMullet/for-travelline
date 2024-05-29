import { Link } from "react-router-dom";
import { useLinks } from "../../storage/storage";

export const LowerOne=()=>{
    const points=useLinks(state=>state.points);
    const links=useLinks(state=>state.links)
    return(
        <nav>
            {points.map((el,i)=>{
                return <Link key={i} to={links[i]}>{el}</Link>
            })}
        </nav>
    );
}