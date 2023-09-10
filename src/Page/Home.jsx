import { Announcement } from "../Components/Announcement";
import { Categories } from "../Components/Categories";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { NewsLetter } from "../Components/NewsLetter";
import { Products } from "../Components/Products";
import { Slider } from "../Components/Slider";

export const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};
