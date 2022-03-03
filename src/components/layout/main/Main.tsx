import Chat from "../../elements/chat/Chat";
import { useNavigate } from "react-router-dom";
import "./Main.css";
import { useContext, useState } from "react";
import OpenChatbot from "../../../assets/OpenChatbot.svg";
import CloseChatbot from "../../../assets/CloseChatbot.svg";
import AddImage from "../../../assets/add-button.png";
import { AppContext } from "../../context/AppContext";

const Main = () => {
  const [openChat, setOpenChat] = useState(false);

  const navigate = useNavigate();

  const {
    state: { selectedImage },
  } = useContext(AppContext);

  return (
    <main className="main">
      <div className="main-container">
        <img
          className="main-container__image"
          src={selectedImage.imageLarge}
          alt={selectedImage.title}
        />
        <p className="main-container__description">
          {selectedImage.description}
        </p>
        <Chat openChat={openChat} setOpenChat={setOpenChat} />
        <img
          className="chat__icon"
          src={openChat ? CloseChatbot : OpenChatbot}
          onClick={() => setOpenChat(!openChat)}
          alt=""
        />
        <img
          className="add__icon"
          src={AddImage}
          onClick={() => navigate("/new-image")}
          alt=""
        />
      </div>
    </main>
  );
};

export default Main;
