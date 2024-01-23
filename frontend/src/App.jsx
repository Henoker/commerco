import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import './App.css'
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import UserWrapper from "./components/user/UserWrapper";
import AdminWrapper from "./components/admin/AdminWrapper";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <main> */}
          <Routes>
          <Route path="/*" element={<UserWrapper />}></Route>
          <Route path="admin/*" element={<AdminWrapper />}></Route>

          </Routes>
        {/* </main> */}
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App
