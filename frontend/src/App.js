import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    <Router>
      <Navbar />
   <Routes>
    <Route path="/" element={<HomePage />} />
   </Routes>
   <Footer />
    </Router>
    </>
  );
}

export default App;
