import Navbar from "./components/Navbar";
import Navbar2 from "./Pages/Navbar2";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Children from "./Pages/Children";
import Courses from "./Pages/Courses";
import CourseDetail from "./Pages/CourseDetail";
const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:CourseId" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="children" element={<Children />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
