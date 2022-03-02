import Chat from "../../elements/chat/Chat";
import "./Main.css";
import { useContext, useState } from "react";
import OpenChatbot from "../../../assets/OpenChatbot.svg";
import CloseChatbot from "../../../assets/CloseChatbot.svg";
import { AppContext } from "../../context/AppContext";

const Main = () => {
  const [openChat, setOpenChat] = useState(false);

  const {
    state: { selectedImage },
  } = useContext(AppContext);


  return (
    <main>
      <div className="main-container">
        <img src={selectedImage.imageLarge} alt={selectedImage.title} />
        <p className="image-description">{selectedImage.description}</p> 
        <Chat
          openChat={openChat}
          setOpenChat={setOpenChat}
        />
        <img
          className="chat__icon"
          src={openChat ? CloseChatbot : OpenChatbot}
          onClick={() => setOpenChat(!openChat)}
          alt=""
        />
      </div>
    </main>
  );
};

export default Main;
