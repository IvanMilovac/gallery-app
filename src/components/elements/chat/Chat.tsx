import { useState, useContext, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../../context/AppContext";
import { animateScroll } from "react-scroll";
import Comment from "../comment/Comment";
import Input from "../shared/input/Input";

interface IProps {
  openChat: boolean;
  setOpenChat: React.Dispatch<React.SetStateAction<boolean>>;
}

const Chat = ({ openChat, setOpenChat }: IProps) => {
  const {
    state: { selectedImage, user },
    dispatch,
  } = useContext(AppContext);

  const [comment, setComment] = useState("");

  useEffect(() => {
    if (!openChat) {
      setComment("");
    }
    animateScroll.scrollToBottom({
      containerId: "comment-body",
    });
  }, [selectedImage, openChat]);

  const handleClick = () => {
    dispatch({
      type: "ADD_COMMENT",
      payload: {
        id: uuidv4(),
        image: selectedImage,
        text: comment,
        user: user,
      },
    });
    setComment("");
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch({
        type: "ADD_COMMENT",
        payload: {
          id: uuidv4(),
          image: selectedImage,
          text: comment,
          user: user,
        },
      });
      setComment("");
    }
  };

  return (
    <>
      <div className={`review ${!openChat ? "hide" : ""}`}>
        <div className="review-header">
          <IoIosArrowBack
            className="review-header__icon"
            onClick={() => setOpenChat(!openChat)}
          />
          <p className="review-header__title">{selectedImage.title}</p>
        </div>
        <div className="review-body" id="comment-body">
          <img src={selectedImage.imageSmall} alt="" />
          {selectedImage.comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              openChat={openChat}
              rightLeft={
                comment?.user.toLowerCase() === user?.name.toLowerCase()
              }
            />
          ))}
        </div>
        <Input
          name="comment"
          onChange={(e) => setComment(e.target.value)}
          onKeyUp={handleEnterKey}
          value={comment}
          placeholder="LEAVE COMMENT"
          icon={
            <IoPaperPlaneOutline className="right-icon" onClick={handleClick} />
          }
        />
      </div>
    </>
  );
};

export default Chat;
