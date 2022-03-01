import { useState, useContext, useEffect } from "react";
import OpenChatbot from "../../../assets/OpenChatbot.svg";
import CloseChatbot from "../../../assets/CloseChatbot.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";
import InputIcon from "../others/InputIcon";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../context/AuthContext";
import { animateScroll } from "react-scroll";
import { RiEditBoxLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import Modal from "../modal/Modal";

const fakeUser = {
  name: "User1",
  email: "User1@gallery.com",
  password: "pass123",
};

const Comments = () => {
  const {
    state: { selectedImage },
    dispatch,
  } = useContext(AuthContext);

  const [openChat, setOpenChat] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState("");
  const [commentId, setCommentId] = useState("");
  const [commentToEdit, setCommentToEdit] = useState("");

  useEffect(() => {
    animateScroll.scrollToBottom({
      containerId: "comment-body",
    });
  }, [selectedImage]);

  const handleClick = () => {
    dispatch({
      type: "ADD_COMMENT",
      payload: {
        id: uuidv4(),
        image: selectedImage,
        text: comment,
        user: fakeUser,
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
          user: fakeUser,
        },
      });
      setComment("");
    }
  };

  const handleDeleteComment = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: string
  ) => {
    setCommentId(id);
    setOpenModal(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentToEdit(e.target.value);
  };

  const submitModal = () => {
    dispatch({
      type: "DELETE_COMMENT",
      payload: { id: commentId, image: selectedImage },
    });
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        title="Delete a comment"
        text="Are you sure you want to delete a comment?"
        closeModal={() => setOpenModal(false)}
        submitModal={submitModal}
        open={openModal}
      />
      <img
        className="chat__icon"
        src={openChat ? CloseChatbot : OpenChatbot}
        onClick={() => setOpenChat(!openChat)}
        alt=""
      />
      <div className={`review__container ${!openChat ? "hide" : ""}`}>
        <div className="review__container-header">
          <IoIosArrowBack onClick={() => setOpenChat(!openChat)} />
          <p>{selectedImage.title}</p>
        </div>
        <div className="review__container-body" id="comment-body">
          <img src={selectedImage.imageSmall} alt="" />
          {selectedImage.comments.map((comment) =>
            comment?.user === fakeUser.name ? (
              <div key={uuidv4()} className="right-comment">
                {edit ? (
                  <input value={commentToEdit} onChange={handleEditChange} />
                ) : (
                  <>
                    {comment.text}
                    <div className="buttons-group">
                      <div className="circle-button">
                        <RiEditBoxLine onClick={() => setEdit(true)} />
                      </div>
                      <div className="circle-button">
                        <FaTimes
                          onClick={(e) => handleDeleteComment(e, comment.id)}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div key={uuidv4()} className="left-comment">
                <div className="comment-avatar"></div>
                <p>{comment.text}</p>
              </div>
            )
          )}
        </div>
        <InputIcon
          inputClass="comment-input"
          rightIcon={<IoPaperPlaneOutline onClick={handleClick} />}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="LEAVE COMMENT"
          onKeyUp={handleEnterKey}
        />
      </div>
    </>
  );
};

export default Comments;
