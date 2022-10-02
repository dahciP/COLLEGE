import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./History2.css";

const History2 = () => {
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
    <div className="history2-div">
      <div className="history2-rectangle-10-div" />
      <div className="history2-my-booking-history">My Booking History</div>
      <div className="history2-completed-div">{`Completed `}</div>
      <div className="history2-cancelled-div">Cancelled</div>
      <img className="history2-line-5-icon" alt="" src="../offers-line-5.svg" />
      <img
        className="history2-clothes-rail-with-t-s-icon"
        alt=""
        src="../offers-clothesrailwithtshirts-232147669592-1@2x.png"
      />
      <div className="history2-clothes-cleaning-div">Clothes Cleaning</div>
      <div className="history2-water-wash-and-drying">
        water wash and drying
      </div>
      <div className="history2-rectangle-11-div" />
      <div className="history2-rectangle-17-div" />
      <div className="history2-rectangle-16-div" />
      <div className="history2-view-details-div">View details</div>
      <div className="history2-rectangle-12-div" />
      <img
        className="history2-clothes-rail-with-t-s-icon1"
        alt=""
        src="../offers-clothesrailwithtshirts-232147669592-1@2x.png"
      />
      <div className="history2-clothes-ironing-div">Clothes Ironing</div>
      <div className="history2-ironing-div">ironing</div>
      <div className="history2-rectangle-13-div" />
      <div className="history2-rectangle-14-div" />
      <img
        className="history2-clothes-rail-with-t-s-icon2"
        alt=""
        src="../offers-clothesrailwithtshirts-232147669592-1@2x.png"
      />
      <div className="history2-shoes-cleaning-div">Shoes Cleaning</div>
      <div className="history2-shoes-wash-and-drying">
        shoes wash and drying
      </div>
      <div className="history2-rectangle-15-div" />
      <img
        className="history2-download-1-icon"
        alt=""
        src="../offers-download-1@2x.png"
      />
      <img
        className="history2-clothes-rail-with-t-s-icon2"
        alt=""
        src="../offers-download-1-1@2x.png"
      />
      <div className="history2-view-details-div1">View details</div>
      <div className="history2-view-details-div2">View details</div>
      <div className="header-div13">
        <img
          className="washaholic-logo-icon13"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div13">
          <div className="home-div13">Home</div>
          <div className="about-us-div13" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div13" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div13" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div13" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div13">Washaholic</div>
        <div
          className="header-login-button-div13"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div13">Login</div>
        </div>
      </div>
    </div>
  );
};

export default History2;
