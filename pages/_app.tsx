import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Header from "../components/header";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="bg-blue-50">
      {/* <Header /> */}
      <Component />
    </div>
  );
};

export default MyApp;
