import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import Input from "../../elements/shared/input/Input";
import Navigation from "../../layout/navigation/Navigation";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Toast, { toasty } from "../../elements/shared/toast/Toast";

import { AppContext } from "../../context/AppContext";

import "./NewImage.css";
import Button from "../../elements/shared/button/Button";
import Loader from "../../elements/loader/Loader";
import { getErrorMessage } from "../../../utils";

const NewImage = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    state: { user },
    dispatch,
  } = useContext(AppContext);

  const onSubmit = (data: any) => {
    setIsLoading(true);
    const newImage = {
      id: uuidv4(),
      title: data.imageName,
      user: user.name,
      description: data.imageDescription,
      imageSmall: URL.createObjectURL(watch("image")[0]),
      imageLarge: URL.createObjectURL(watch("image")[0]),
      comments: [],
    };
    setTimeout(() => {
      try {
        dispatch({ type: "ADD_IMAGE", payload: { image: newImage } });
        setValue("image", null);
        setValue("imageName", "");
        setValue("imageDescription", "");
        toasty("success", "Success", "top-center", 1500);
      } catch (err) {
        toasty("error", getErrorMessage(err), "top-center", 2000);
      } finally {
        setIsLoading(false);
      }
    }, 750);
  };

  return (
    <section>
      <Toast />
      <Navigation />
      <div className="newimage">
        <FaArrowLeft className="arrow-back" onClick={() => navigate("/")} />
        <p className="newimage-title">Add new image</p>
        <form className="newimage-form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("imageName", {
              required: "The image title is required.",
            })}
            placeholder="Title"
          />
          <Input
            {...register("imageDescription", {
              required: "The image description is required.",
            })}
            placeholder="Description"
          />
          {!watch("image")?.[0] ? (
            <div className="newimage-form__file">
              <Button rightIcon={<AiOutlineFileAdd />}>Upload a file</Button>
              <input
                type="file"
                {...register("image", { required: "Image is required." })}
              />
            </div>
          ) : (
            <div className="newimage-form__preview">
              <>
                <img
                  src={URL.createObjectURL(watch("image")[0])}
                  className="newimage-form__preview_image"
                  alt=""
                />
                <Button
                  leftIcon={<RiDeleteBin6Line />}
                  onClick={() => setValue("image", null)}
                ></Button>
              </>
            </div>
          )}
          <div className="newimage-form__submit">
            <Button
              type="submit"
              rightIcon={isLoading ? <Loader /> : <AiOutlineSave />}
            >
              Save New Image
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewImage;
