import { useContext } from "react";

import { AppContext } from "../../../context/AppContext";

import Avatar from "../../../../assets/Avatar.svg";
import ArrowDown from "../../../../assets/arrowDown.svg";

const UserInfo = () => {
  const {
    state: { user },
  } = useContext(AppContext);

  const { name } = user;

  return (
    <div className="user-info">
      <img src={Avatar} alt="Avatar" className="user-info__avatar" />
      <p className="user-info__name">{name}</p>
      <img src={ArrowDown} alt="Arrow" className="user-info__dropdown-arrow" />
    </div>
  );
};

export default UserInfo;
