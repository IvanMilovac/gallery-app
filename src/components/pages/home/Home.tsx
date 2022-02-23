import Navigation from "../../elements/navigation/Navigation";
import Sidebar from "../../elements/sidebar/Sidebar";
import Main from "../../elements/main/Main";

import "./Home.css";

const Home = () => {
  return (
    <div className="home__container">
      <Navigation />
      <div className="home__content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
