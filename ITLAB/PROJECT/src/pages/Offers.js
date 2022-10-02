import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Offers.css";

const Offers = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onSubscriptionsTextClick = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  const onProfileTextClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onHeaderLoginButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="offers-div">
      <div className="offers-rectangle-10-div" />
      <div className="offers-your-offers-div">Your offers</div>
      <div className="offers-coupons-div">Coupons</div>
      <img className="offers-line-5-icon" alt="" src="../offers-line-5.svg" />
      <img
        className="offers-clothes-rail-with-t-shi-icon"
        alt=""
        src="../offers-clothesrailwithtshirts-232147669592-1@2x.png"
      />
      <div className="offers-special-25-off">{`Special 25% Off `}</div>
      <div className="offers-only-today-for-new-user">
        Only today for new user’s
      </div>
      <div className="offers-rectangle-11-div" />
      <div className="offers-use2-div">Use</div>
      <div className="offers-rectangle-12-div" />
      <img
        className="offers-clothes-rail-with-t-shi-icon1"
        alt=""
        src="../offers-clothesrailwithtshirts-232147669592-1@2x.png"
      />
      <div className="offers-special-50-off">Special 50% Off</div>
      <div className="offers-on-1-year-subscription">
        On 1 year subscription
      </div>
      <div className="offers-rectangle-13-div" />
      <div className="offers-use1-div">Use</div>
      <div className="offers-rectangle-14-div" />
      <img
        className="offers-clothes-rail-with-t-shi-icon2"
        alt=""
        src="../offers-clothesrailwithtshirts-232147669592-1@2x.png"
      />
      <div className="offers-special-15-off">Special 15% Off</div>
      <div className="offers-on-amount-of-500">On amount of ₹500+</div>
      <div className="offers-rectangle-15-div" />
      <div className="offers-upcoming-div">Upcoming</div>
      <img
        className="offers-download-1-icon"
        alt=""
        src="../offers-download-1@2x.png"
      />
      <img
        className="offers-clothes-rail-with-t-shi-icon2"
        alt=""
        src="../offers-download-1-1@2x.png"
      />
      <div className="offers-rectangle-16-div" />
      <img
        className="offers-clothes-rail-with-t-shi-icon3"
        alt=""
        src="../offers-clothesrailwithtshirts-232147669592-1@2x.png"
      />
      <div className="offers-special-15-off1">Special 15% Off</div>
      <div className="offers-on-amount-of-5001">On amount of ₹500+</div>
      <div className="offers-rectangle-17-div" />
      <div className="offers-upcoming-div1">Upcoming</div>
      <img
        className="offers-download-1-2"
        alt=""
        src="../offers-download-1-1@2x.png"
      />
      <div className="header-div8">
        <img
          className="washaholic-logo-icon8"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div8">
          <div className="home-div8">Home</div>
          <div className="about-us-div8" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div8" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div8" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div8" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div8">Washaholic</div>
        <div
          className="header-login-button-div8"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div8">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
