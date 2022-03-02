import User from "../../elements/others/User";
import AgilnoSmall from "../../../assets/AgilnoLogoSmall.svg";
import MobileMenu from "../../../assets/MobileMenu.svg";

import "./Navigation.css";

interface IProps {
  handleOpen: () => void;
}

const Navigation = ({ handleOpen }: IProps) => {
  return (
    <header>
      <div className="navigation__container">
        <img src={MobileMenu} alt="Mobile Menu" onClick={handleOpen} />
        <img src={AgilnoSmall} alt="Agilno logo" />
        <User />
      </div>
    </header>
  );
};

export default Navigation;
