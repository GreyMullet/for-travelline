import { create } from "zustand";
const images = require.context('../other_pages/rooms/rooms_pics_sliders/studio/');
const images1 = require.context('../other_pages/rooms/rooms_pics_sliders/improved/');
const images2 = require.context('../other_pages/rooms/rooms_pics_sliders/three_placed_lux/');
const images3 = require.context('../other_pages/rooms/rooms_pics_sliders/three_placed_lux1/');
const images4 = require.context('../other_pages/rooms/rooms_pics_sliders/two_placed_lux/');
const images5 = require.context('../other_pages/rooms/rooms_pics_sliders/two_placed_lux1/');
const images6 = require.context('../other_pages/rooms/rooms_pics_sliders/two_placed_lux2/');
const images7 = require.context('../other_pages/rooms/rooms_pics_sliders/two_placed_lux3/');
const images8 = require.context('../other_pages/rooms/rooms_pics_sliders/three_placed_standart/');
const images9 = require.context('../other_pages/rooms/rooms_pics_sliders/three_placed_standart1/');
const images10 = require.context('../other_pages/rooms/rooms_pics_sliders/three_placed_standart2/');
const images11 = require.context('../other_pages/rooms/rooms_pics_sliders/three_placed_standart3/');
const images12 = require.context('../other_pages/rooms/rooms_pics_sliders/three_placed_budj/');

const imgsGallery = require.context('../other_pages/gallery/pics_gallery/');

//Points of the header
export const useLinks=create(()=>({
    points: ['Домой', 'Номера и цены', 'Галерея', 'Отзывы'],
    links: ['/','/other_pages/RoomsCategories', '/other_pages/gallery/gallery', '/other_pages/Reviews']
}));

//Pictures for sliders of rooms
export const useSliderPics=create(()=>({
    pics: [
        images('./stud.jpg'),
        images('./stud1.jpg'),
        images('./stud2.JPG'),
        images('./stud3.jpg')
    ],
    pics1: [
        images1('./improved3.jfif'),
        images1('./improved1.jfif'),
        images1('./improved2.jfif'),
        images1('./improved.jfif'),
        images1('./improved4.jfif')
    ],
    pics2: [
        images2('./lux1.jfif'),
        images2('./lux.jpg'),
        images2('./lux4.JPG'),
        images2('./lux5.CR2')
    ],
    pics3: [
        images3('./lux.jfif'),
        images3('./lux2.jfif'),
        images3('./lux3.jfif'),
        images3('./lux1.jfif')
    ],
    pics4: [
        images4('./lux.jfif'),
        images4('./lux2.jfif'),
        images4('./lux3.jfif'),
        images4('./lux4.jfif')
    ],
    pics5: [
        images5('./lux.JPG'),
        images5('./lux1.jfif'),
        images5('./lux2.JPG'),
        images5('./lux3.JPG')
    ],
    pics6: [
        images6('./lux.jfif'),
        images6('./lux1.jfif'),
        images6('./lux2.jfif'),
        images6('./lux3.jfif')
    ],
    pics7: [
        images7('./lux.jfif'),
        images7('./lux1.jfif'),
        images7('./lux2.jpg'),
        images7('./lux3.jfif')
    ],
    pics8: [
        images8('./standart.jpg'),
        images8('./standart1.jpeg'),
        images8('./standart2.jpeg'),
        images8('./standart3.jpeg')
    ],
    pics9: [
        images9('./standart.jpeg'),
        images9('./standart1.jpeg'),
        images9('./standart2.jpeg'),
        images9('./standart3.jpeg')
    ],
    pics10: [
        images10('./standart3.jpeg'),
        images10('./standart2.jpeg'),
        images10('./standart1.jpeg'),
        images10('./standart.jpeg')
    ],
    pics11: [
        images11('./standart3.jfif'),
        images11('./standart2.jpeg'),
        images11('./standart1.jpeg'),
        images11('./standart.jpeg')
    ],
    pics12: [
        images12('./budj.jfif'),
        images12('./budj1.jpeg'),
        images12('./budj2.jpeg'),
        images12('./budj3.jpeg'),
    ]
}));

//Use gallery pics
export const useGalleryPics=create(()=>({
    pics: [
        imgsGallery('./scen1.jpg'),
        imgsGallery('./scen2.jpg'),
        imgsGallery('./scen3.jpg'),
        imgsGallery('./scen4.jpg'),
        imgsGallery('./scen5.jpg'),
        imgsGallery('./scen6.jpg'),
        imgsGallery('./scen7.jpg'),
        imgsGallery('./scen8.jpg'),
        imgsGallery('./scen9.jpg'),
        imgsGallery('./scen10.jpg')
    ]
}));