import { Header } from "./main_components/Header";
import { Description } from "./main_components/DescribingSection";
import { Footer } from "./main_components/Footer";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        document.title = 'Гостевой дом "В Гостях У Светланы", Анапа - официальный сайт';
    }, []);

  return (
    <div className="App">
      <Header />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
