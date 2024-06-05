import { LowerOne } from "./header_components/LowerOne";
import { UpperOne } from "./header_components/UpperOne";
import './main_components_styles/header.css';
import {useEffect} from "react";

export const Header=()=>{
    useEffect(() => {
        var q = [
            ['setContext', 'TL-INT-svetlana-guest-house-com_2024-05-23', 'ru'],
            ['embed', 'booking-form', {
                container: 'tl-booking-form'
            }],
            ['embed', 'search-form', {
                container: 'tl-search-form'
            }],
        ];
        var h=["ru-ibe.tlintegration.ru","ibe.tlintegration.ru","ibe.tlintegration.com"];
        var t = window.travelline = (window.travelline || {}),
            ti = t.integration = (t.integration || {});
        ti.__cq = ti.__cq? ti.__cq.concat(q) : q;
        if (!ti.__loader) {
            ti.__loader = true;
            var d=window.document,c=d.getElementsByTagName("head")[0]||d.getElementsByTagName("body")[0];
            function e(s, f) {
                return function () {
                    window.TL || (() => {
                        c.removeChild(s);
                        f();
                    })();
                }
            }
            (function l(h) {
                if (0===h.length) return; var s=d.createElement("script");
                s.type="text/javascript";s.async=!0;s.src="https://"+h[0]+"/integration/loader.js";
                s.onerror=s.onload=e(s,function(){l(h.slice(1,h.length))});c.appendChild(s)
            })(h);
        }
    }, []);
    return(
        <>
            <header>
                <UpperOne />
                <LowerOne />
            </header>
            <div id='block-search'>
                <div id='tl-search-form' className='tl-container'>
                    <noindex><a href='https://www.travelline.ru/products/tl-hotel/' rel='nofollow' target='_blank'>TravelLine</a></noindex>
                </div>
            </div>
        </>
    );
}