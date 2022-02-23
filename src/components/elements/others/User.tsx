import Avatar from "../../../assets/Avatar.svg";
import ArrowDown from "../../../assets/arrowDown.svg";

const UserInfo = () => {
  return (
    <div className="user__info">
      <img src={Avatar} alt="Avatar" />
      <p>NAME</p>
      <img src={ArrowDown} alt="Arrow" />
    </div>
  );
};

export default UserInfo;
