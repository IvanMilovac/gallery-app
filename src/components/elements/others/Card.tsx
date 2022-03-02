import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

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
    <div className="card">
      <div className="card-content">
        <img src={image.imageSmall} alt="" />
        <p>{image.title}</p>
      </div>
      <Button rightIcon={<HiOutlineArrowNarrowRight />} onClick={handleClick}>
        Review
      </Button>
    </div>
  );
};

export default Card;
