import Navigation from "../../layout/navigation/Navigation";
import Sidebar from "../../layout/sidebar/Sidebar";
import Main from "../../layout/main/Main";

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
