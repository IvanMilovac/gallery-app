import "./Navigation.css";
import User from "../others/User";
import AgilnoSmall from "../../../assets/AgilnoLogoSmall.svg";
import MobileMenu from "../../../assets/MobileMenu.svg";

const Navigation = () => {
  return (
    <header>
      <div className="navigation__container">
        <img src={MobileMenu} alt="Mobile Menu" />
        <img src={AgilnoSmall} alt="Agilno logo" />
        <User />
      </div>
    </header>
  );
};

export default Navigation;
