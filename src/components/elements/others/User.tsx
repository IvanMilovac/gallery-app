import { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import Avatar from "../../../assets/Avatar.svg";
import ArrowDown from "../../../assets/arrowDown.svg";

const UserInfo = () => {
  const {
    state: { user },
  } = useContext(AppContext);

  const { name } = user;

  return (
    <div className="user__info">
      <img src={Avatar} alt="Avatar" />
      <p>{name}</p>
      <img src={ArrowDown} alt="Arrow" />
    </div>
  );
};

export default UserInfo;
