import React from "react";
import Modal from "react-modal";
import Button from "../shared/button/Button";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./Modal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
};

interface IProps {
  closeModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  submitModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
  title: string;
  text: string;
}

const ModalElement = ({
  title,
  text,
  closeModal,
  submitModal,
  open,
}: IProps) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Delete Coment Modal"
      appElement={document.getElementById("root") || undefined}
    >
      <div className="modal-header">{title}</div>
      <div className="modal-body">{text}</div>
      <div className="modal-footer">
        <Button onClick={closeModal}>Close</Button>
        <Button onClick={submitModal} rightIcon={<RiDeleteBin6Line />}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default ModalElement;
