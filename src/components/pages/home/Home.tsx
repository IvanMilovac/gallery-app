import Navigation from "../../layout/navigation/Navigation";
import Sidebar from "../../layout/sidebar/Sidebar";
import Main from "../../layout/main/Main";

import "./Home.css";
import { useState } from "react";
const Home = () => {
  const [openAside, setOpenAside] = useState(false);
  const handleOpen = () => setOpenAside((prev) => !prev);
  return (
    <div className="home__container">
      <Navigation handleOpen={handleOpen} />
      <div className="home__content">
        <Sidebar openAside={openAside} handleOpen={handleOpen} />
        <Main />
      </div>
    </div>
  );
};

export default Home;
