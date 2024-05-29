import { Header } from "../main_components/Header";
import { Footer } from "../main_components/Footer";
import './other_pages_styles/reviews.css';

export const Reviews=()=>{
    return(
        <div className="reviews">
            <Header />
            <div style={ { overflow: 'hidden', position: 'relative'} } className="reviews-box">
                <iframe style={ {border:'1px solid #e6e6e6','border-radius':'8px', } } src="https://yandex.ru/maps-reviews-widget/1716802432?comments" className="frame"></iframe>
                <a href="https://yandex.ru/maps/org/v_gostyakh_u_svetlany/1716802432/" target="_blank" style={ {'box-sizing':'border-box','text-decoration':'none',color:'#b3b3b3','font-size':'10px','font-family':'YS Text,sans-serif',padding:'0 20px',position:'absolute',bottom:'8px',width:'100%','text-align':'center',left:0,overflow:'hidden','text-overflow':'ellipsis',display:'block','max-height':'14px','white-space':'nowrap',padding:'0 16px','box-sizing':'border-box' } }>В гостях у Светланы — Яндекс Карты</a>
            </div>
            <Footer />
        </div>
    );
}