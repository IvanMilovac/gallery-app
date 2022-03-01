import Comments from "../../elements/review/CommentsElement";
import "./Main.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Main = () => {
  const {
    state: { selectedImage },
  } = useContext(AuthContext);
  return (
    <main>
      <div className="main-container">
        <img src={selectedImage.imageLarge} alt={selectedImage.title} />
        <p className="image-description">{selectedImage.description}</p>
        <Comments />
      </div>
    </main>
  );
};

export default Main;
