import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./History1.css";

const History1 = () => {
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
    <div className="history1-div">
      <div className="history-clock-2-my-booking-his">My Booking History</div>
      <div className="history-clock-2-completed-div">Completed</div>
      <div className="history-clock-2-cancelled-div">Cancelled</div>
      <img
        className="history-clock-2-line-5"
        alt=""
        src="../offers-line-5.svg"
      />
      <div className="history-clock-2-you-dont-have">
        You don’t have any cancelled order
      </div>
      <img
        className="history-clock-2-icon"
        alt=""
        src="../history-clock-2.svg"
      />
      <div className="header-div12">
        <img
          className="washaholic-logo-icon12"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div12">
          <div className="home-div12">Home</div>
          <div className="about-us-div12" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div12" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div12" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div12" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div12">Washaholic</div>
        <div
          className="header-login-button-div12"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div12">Login</div>
        </div>
      </div>
    </div>
  );
};

export default History1;
