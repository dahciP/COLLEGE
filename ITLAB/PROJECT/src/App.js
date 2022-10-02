import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HeaderAndFooter from "./pages/HeaderAndFooter";
import Payment from "./pages/Payment";
import Subscriptions from "./pages/Subscriptions";
import Delivery from "./pages/Delivery";
import Search1 from "./pages/Search1";
import Search2 from "./pages/Search2";
import Search3 from "./pages/Search3";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import AddDetails from "./pages/AddDetails";
import Cart from "./pages/Cart";
import Services from "./pages/Services";
import History1 from "./pages/History1";
import History2 from "./pages/History2";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Google from "./pages/Google";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/subscriptions":
        title = "";
        metaDescription = "";
        break;
      case "/delivery":
        title = "";
        metaDescription = "";
        break;
      case "/search1":
        title = "";
        metaDescription = "";
        break;
      case "/search2":
        title = "";
        metaDescription = "";
        break;
      case "/search3":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/offers":
        title = "";
        metaDescription = "";
        break;
      case "/add-details":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
      case "/history1":
        title = "";
        metaDescription = "";
        break;
      case "/history2":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/google":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HeaderAndFooter />} />

      <Route path="/payment" element={<Payment />} />

      <Route path="/subscriptions" element={<Subscriptions />} />

      <Route path="/delivery" element={<Delivery />} />

      <Route path="/search1" element={<Search1 />} />

      <Route path="/search2" element={<Search2 />} />

      <Route path="/search3" element={<Search3 />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/offers" element={<Offers />} />

      <Route path="/add-details" element={<AddDetails />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/services" element={<Services />} />

      <Route path="/history1" element={<History1 />} />

      <Route path="/history2" element={<History2 />} />

      <Route path="/signup" element={<SignUp />} />

      <Route path="/login" element={<Login />} />

      <Route path="/google" element={<Google />} />

      <Route path="/about-us" element={<AboutUs />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
