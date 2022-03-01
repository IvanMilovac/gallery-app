import React from "react";
import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
interface IProps {
  image: IImage;
}

const Card = ({ image }: IProps) => {
  const { dispatch } = useContext(AuthContext);
  return (
    <div className="card">
      <div className="card-content">
        <img src={image.imageSmall} alt="" />
        <p>{image.title}</p>
      </div>
      <Button
        buttonClass="review-button"
        rightIcon={<HiOutlineArrowNarrowRight />}
        onClick={() => dispatch({ type: "SELECT_IMAGE", payload: { image } })}
      >
        Review
      </Button>
    </div>
  );
};

export default Card;
