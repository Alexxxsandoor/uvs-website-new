import CardsProducts from "./components/cards-products/CardsProducts";
import FirstIntro from "./components/first-intro/FirstIntro";
import Title from "./components/title/Title";
import Pricing from "./components/pricing/Pricing";
import GifFullWidth from "./components/gif-full-width/GifFullWidth";
import Footer from "./components/footer/Footer";
import LeftText from "./components/left-text/LeftText";
import CenterText from "./components/text-center/CenterText";
import ThirdText from "./components/title/ThirdText";
import SmallCards from "./components/small-cards/SmallCards";

function App() {
  return (
    <div className="App">
      <FirstIntro />
      <Title />
      <GifFullWidth />
      <CardsProducts />
      <ThirdText />
      <LeftText />
      <SmallCards/>
      {/* <Pricing /> */}
      <CenterText />
      <Footer />
    </div>
  );
}

export default App;
