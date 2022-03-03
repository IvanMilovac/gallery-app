import User from "../../elements/shared/user/User";
import AgilnoSmall from "../../../assets/AgilnoLogoSmall.svg";
import MobileMenu from "../../../assets/MobileMenu.svg";

import "./Navigation.css";

interface IProps {
  handleOpen?: () => void;
}

const Navigation = ({ handleOpen }: IProps) => {
  return (
    <header>
      <div className="navigation">
        {handleOpen && (
          <img
            src={MobileMenu}
            alt="Mobile Menu"
            onClick={handleOpen}
            className="navigation-mobile"
          />
        )}
        <img src={AgilnoSmall} alt="Agilno logo" className="navigation-logo__small" />
        <User />
      </div>
    </header>
  );
};

export default Navigation;
