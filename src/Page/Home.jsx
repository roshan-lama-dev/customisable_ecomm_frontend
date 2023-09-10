import { Announcement } from "../Components/Announcement";
import { Categories } from "../Components/Categories";
import { Navbar } from "../Components/Navbar";
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
    </>
  );
};
