import Button from "../button/Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

interface IProps {
  image: IImage;
  handleOpen: () => void;
}

const Card = ({ image, handleOpen }: IProps) => {
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({ type: "SELECT_IMAGE", payload: { image } });
    handleOpen();
  };

  return (
    <div className="sidebar-card">
      <div className="sidebar-card__content">
        <img className="sidebar-card__content-image" src={image.imageSmall} alt="" />
        <p className="sidebar-card__content-title">{image.title}</p>
      </div>
      <Button rightIcon={<HiOutlineArrowNarrowRight />} onClick={handleClick}>
        Review
      </Button>
    </div>
  );
};

export default Card;
