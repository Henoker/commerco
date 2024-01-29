import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";


const Layout=(props)=>{  
  return (
    <>
      <Navbar />
      <ToastContainer autoClose={1000} />
      {props.children}
      <Footer />
      
    </>
  );
}

export default Layout;

