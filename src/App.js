import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CircleLoader from "react-spinners/CircleLoader";
import Header from "./components/Navigation/Header";
import Home from "./pages/Home/index";
import German from "./pages/German/index";
import French from "./pages/French/index";
import AboutUs from "./pages/About/index";
import Services from "./pages/Our Services/index";
import Chinese from "./pages/Chinese";
import Courses from "./pages/Courses/index";
import Error404 from "./pages/Error404/index";
import CartIcon from "./pages/Cart/CartIcon";
import Footer from "./components/Footer/index";
import Translation from "./components/ServicesDetails/Translation";
import ExamPreparation from "./components/ServicesDetails/ExamPreparation";
import Admission from "./components/ServicesDetails/Admission";
import WorknTraining from "./components/ServicesDetails/WorknTraining";
import ScrollToTop from "./components/Scroll-to-top/index";
import Cart from "./pages/Cart/Cart";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./pages/Cart/Checkout";
import Spanish from "./pages/Spanish/Spanish";
import Portuguese from "./pages/Portuguese/Portuguese";
import DieChanceKarte from "./components/ServicesDetails/DieChanceKarte";
import Bfd from "./components/ServicesDetails/Bfd";
import LanguageSupport from "./components/ServicesDetails/LanguageSupport";
import SpanishNews from "./components/Reusable/SpanishNews";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <CircleLoader color={"#50E3C2"} loading={loading} size={150} />
        </div>
      ) : (
        <BrowserRouter>
          <ToastContainer />
          <ScrollToTop />
          <Header />
          <CartIcon />
          <>
            <Routes>
              <Route path="/cart" element={<Cart />} />
              <Route path="/" element={<Home/>} />
              <Route path="/german" element={<German/>} />
              <Route path="/french" element={<French/>} />
              <Route path="/spanish" element={<Spanish/>} />
              <Route path="/portuguese" element={<Portuguese/>} />
              <Route path="/chinese" element={<Chinese/>} />
              <Route path="/about-us" element={<AboutUs/>} />
              <Route path="/our-services" element={<Services/>} />
              <Route path="/our-courses" element={<Courses/>} />
              <Route path="/translation-of-documents" element={<Translation/>} />
              <Route path="/exam-preparation" element={<ExamPreparation/>} />
              <Route path="/admission" element={<Admission/>} />
              <Route path="/workandtraining" element={<WorknTraining/>} />

              <Route path="/die-chancekarte" element={<DieChanceKarte/>} />
              <Route path="/bfd" element={<Bfd/>} />
              <Route path="/language-support" element={<LanguageSupport/>} />
              <Route path="/nigeria-to-spain-dash-ieae-valencia-culinary-success" element={<SpanishNews/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="*" element={<Error404/>} />

              {/* <Route exact path="/german">
                <German />
              </Route>
              <Route exact path="/french">
                <French />
              </Route>
              <Route exact path="/spanish">
                <Spanish />
              </Route>
              <Route exact path="/portuguese">
                <Portuguese />
              </Route>
              <Route exact path="/about-us">
                <AboutUs />
              </Route>
              <Route exact path="/our-services">
                <Services />
              </Route>
              <Route exact path="/our-courses">
                <Courses />
              </Route>
              <Route exact path="/translation-of-documents">
                <Translation />
              </Route>
              <Route exact path="/exam-preparation">
                <ExamPreparation />
              </Route>
              <Route exact path="/admission">
                <Admission />
              </Route>
              <Route exact path="/workandtraining">
                <WorknTraining />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="*">
                <Error404 />
              </Route> */}
            </Routes>
          </>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
