import { useContext, useState, useEffect } from "react";
import { RiEditBoxLine } from "react-icons/ri";
import { AiOutlineSave } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
import ModalElement from "../../elements/modal/Modal";
import Input from "../shared/input/Input";

interface IProps {
  comment: IComment;
  rightLeft: boolean;
  openChat: boolean;
}

const Comment = ({ comment, rightLeft, openChat }: IProps) => {
  const [edit, setEdit] = useState(false);
  const [commentToEdit, setCommentToEdit] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [commentId, setCommentId] = useState("");

  useEffect(() => {
    if (!openChat) {
      setEdit(false);
    }
  }, [openChat]);

  const {
    state: { selectedImage },
    dispatch,
  } = useContext(AppContext);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentToEdit(e.target.value);
  };

  const handleEditKey = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: string
  ) => {
    if (e.key === "Escape") setEdit(false);
    if (e.key === "Enter") {
      dispatch({
        type: "UPDATE_COMMENT",
        payload: { id, newComment: commentToEdit },
      });
      setEdit(false);
    }
  };

  const handleClick = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: string
  ) => {
    dispatch({
      type: "UPDATE_COMMENT",
      payload: { id, newComment: commentToEdit },
    });
    setEdit(false);
  };

  const handleDeleteComment = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: string
  ) => {
    setCommentId(id);
    setOpenModal(true);
  };

  const submitModal = () => {
    dispatch({
      type: "DELETE_COMMENT",
      payload: { id: commentId, image: selectedImage },
    });
    setOpenModal(false);
  };

  return rightLeft ? (
    <>
      <ModalElement
        title="Delete a comment"
        text="Are you sure you want to delete a comment?"
        closeModal={() => setOpenModal(false)}
        submitModal={submitModal}
        open={openModal}
      />
      <div className="right-comment">
        {edit && (
          <Input
            name="edit-comment"
            onChange={handleEditChange}
            onKeyUp={(e) => {
              handleEditKey(e, comment.id);
            }}
            value={commentToEdit}
            icon={
              <AiOutlineSave
                className="right-icon"
                onClick={(e) => handleClick(e, comment.id)}
              />
            }
          />
        )}
        {!edit && (
          <>
            <p>{comment.text}</p>
            <div className="buttons-group">
              <div className="circle-button">
                <RiEditBoxLine
                  onClick={() => {
                    setCommentToEdit(comment.text);
                    setEdit(true);
                  }}
                />
              </div>
              <div className="circle-button">
                <FaTimes onClick={(e) => handleDeleteComment(e, comment.id)} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  ) : (
    <div className="left-comment">
      <div className="comment-avatar"></div>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
