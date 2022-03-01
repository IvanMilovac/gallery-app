import {
  ToastContainer,
  toast,
  ToastContent,
  ToastPosition,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toasty = (
  type: "success" | "error",
  message: ToastContent,
  position: ToastPosition,
  autoClose: number
) =>
  toast[type](message, {
    position: position,
    autoClose: autoClose,
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
  });

const Toast = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
    />
  );
};

export default Toast;
