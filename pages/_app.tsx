import "../styles/globals.css";
import "../styles/detail.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="bg-blue-50">
      {/* <Header /> */}
      <Component />
      <ToastContainer />
    </div>
  );
};

export default MyApp;
