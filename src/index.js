import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoomsCategories } from './other_pages/RoomsCategories';
import { StudioBooking } from './other_pages/rooms/Studio';
import { Comforts } from './other_pages/rooms/comfort_category/ComfortRooms';
import { ImprovedOverview } from './other_pages/rooms/comfort_category/rooms_overviews/ImprovedOverview';
import { ThreePlacedOverview } from './other_pages/rooms/comfort_category/rooms_overviews/ThreePlacedOverview';
import { ThreePlacedOverview1 } from './other_pages/rooms/comfort_category/rooms_overviews/ThreePlacedOverview1';
import { TwoPlacedOverview } from './other_pages/rooms/comfort_category/rooms_overviews/TwoPlacedOverview';
import { TwoPlacedOverview1 } from './other_pages/rooms/comfort_category/rooms_overviews/TwoPlacedOverview1';
import { TwoPlacedOverview2 } from './other_pages/rooms/comfort_category/rooms_overviews/TwoPlacedOverview2';
import { TwoPlacedOverview3 } from './other_pages/rooms/comfort_category/rooms_overviews/TwoPlacedOverview3';
import { Standarts } from './other_pages/rooms/standart_category/StandartRooms';
import { ThreePlacedOverviewStand } from './other_pages/rooms/standart_category/rooms_overviews/ThreePlacedOverview';
import { TwoPlacedOverviewStand } from './other_pages/rooms/standart_category/rooms_overviews/TwoPlacedOverview';
import { ThreePlacedOverviewStand1 } from './other_pages/rooms/standart_category/rooms_overviews/ThreePlacedOverview1';
import { ThreePlacedOverviewStand2 } from './other_pages/rooms/standart_category/rooms_overviews/ThreePlacedOverview2';
import { Budjets } from './other_pages/rooms/budjet_category/BudjetRooms';
import { ThreePlacedOverviewBudj } from './other_pages/rooms/budjet_category/rooms_overviews/ThreePlacedOverview';
import { Gallery } from './other_pages/gallery/gallery';
import { Reviews } from './other_pages/Reviews';
import {Booking} from "./other_pages/Booking";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />

        <Route path='/other_pages/RoomsCategories' element={<RoomsCategories />} />
        <Route path='/other_pages/rooms/Studio' element={<StudioBooking />} />

        <Route path='/other_pages/gallery/gallery' element={<Gallery />} />
        <Route path='/other_pages/Reviews' element={<Reviews />} />

        <Route path='/other_pages/rooms/comfort_category/ComfortRooms' element={<Comforts />} />
        <Route path='/other_pages/rooms/standart_category/StandartRooms' element={<Standarts />} />
        <Route path='/other_pages/rooms/budjet_category/BudjetRooms' element={<Budjets />} />

        <Route path='/other_pages/rooms/comfort_category/rooms_overviews/ImprovedOverview' element={<ImprovedOverview />} />
        <Route path='/other_pages/rooms/comfort_category/rooms_overviews/ThreePlacedOverview' element={<ThreePlacedOverview />} />
        <Route path='/other_pages/rooms/comfort_category/rooms_overviews/ThreePlacedOverview1' element={<ThreePlacedOverview1 />} />
        <Route path='/other_pages/rooms/comfort_category/rooms_overviews/TwoPlacedOverview' element={<TwoPlacedOverview />} />
        <Route path='/other_pages/rooms/comfort_category/rooms_overviews/TwoPlacedOverview1' element={<TwoPlacedOverview1 />} />
        <Route path='/other_pages/rooms/comfort_category/rooms_overviews/TwoPlacedOverview2' element={<TwoPlacedOverview2 />} />
        <Route path='/other_pages/rooms/comfort_category/rooms_overviews/TwoPlacedOverview3' element={<TwoPlacedOverview3 />} />
        <Route path='/other_pages/rooms/Studio' element={<StudioBooking />} />

        <Route path='/other_pages/rooms/standart_category/rooms_overviews/ThreePlacedOverview' element={<ThreePlacedOverviewStand />} />
        <Route path='/other_pages/rooms/standart_category/rooms_overviews/ThreePlacedOverview1' element={<ThreePlacedOverviewStand1 />} />
        <Route path='/other_pages/rooms/standart_category/rooms_overviews/ThreePlacedOverview2' element={<ThreePlacedOverviewStand2 />} />
        <Route path='/other_pages/rooms/standart_category/rooms_overviews/TwoPlacedOverview' element={<TwoPlacedOverviewStand />} />
        <Route path='/other_pages/rooms/budjet_category/rooms_overviews/ThreePlacedOverview' element={<ThreePlacedOverviewBudj />} />

        <Route path='/other_pages/Booking' element={<Booking />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();