import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Delivery.css";

const Delivery = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);
  
  const onDeliveryGroup4ContainerClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const onDeliveryGroup1ContainerClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

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
    <div className="delivery-div">
      <div
        className="delivery-group4-div"
        onClick={onDeliveryGroup4ContainerClick}
      >
        <img
          className="delivery-group4-rectangle-21-icon"
          alt=""
          src="../delivery-group4-rectangle-21.svg"
        />
        <div className="delivery-group4-checkout-div">Checkout</div>
        <img
          className="delivery-group4-arrow-1-icon"
          alt=""
          src="../payment-arrow-1.svg"
        />
      </div>
      <div className="delivery-pickup-div">Pickup</div>
      <div className="delivery-address-details-div">Address Details</div>
      <div className="delivery-pickup-option-div">Pickup Option</div>
      <div className="delivery-rectangle-22-div" />
      <div className="delivery-rectangle-23-div" />
      <div className="delivery-road-d3-house-23-pen">
        Road D3 House 23, Pen Slack VIllage Lokogoma abuja
      </div>
      <div className="delivery-change-div">Change</div>
      <div className="delivery-areous-ahmad-div">Areous Ahmad</div>
      <div className="delivery-235-9305129867-div">+235 9305129867</div>
      <img
        className="delivery-line-7-icon"
        alt=""
        src="../delivery-line-7.svg"
      />
      <img
        className="delivery-line-8-icon"
        alt=""
        src="../delivery-line-8.svg"
      />
      <img
        className="delivery-line-9-icon"
        alt=""
        src="../delivery-line-9.svg"
      />
      <div className="delivery-group3-div">
        <img
          className="delivery-group3-ellipse-18-icon"
          alt=""
          src="../payment-cd-ellipse-18.svg"
        />
        <img
          className="delivery-group3-ellipse-19-icon"
          alt=""
          src="../delivery-group3-ellipse-19.svg"
        />
        <div className="delivery-group3-door-pickup">
          <span>{`Door Pickup    `}</span>
          <span className="includes-additional-charges">
            *(Includes additional charges)
          </span>
        </div>
      </div>
      <div className="delivery-group2-div">
        <img
          className="delivery-group3-ellipse-18-icon"
          alt=""
          src="../payment-cd-ellipse-18.svg"
        />
        <div className="delivery-group3-door-pickup">Office Dropoff</div>
      </div>
      <div
        className="delivery-group-1-div"
        onClick={onDeliveryGroup1ContainerClick}
      >
        <div className="delivery-group1-rectangle-21-div" />
        <div className="delivery-group1-payment-div">Payment</div>
        <img
          className="delivery-group1-arrow-1-icon"
          alt=""
          src="../delivery-group1-arrow-1.svg"
        />
      </div>
      <div className="header-div3">
        <img
          className="washaholic-logo-icon3"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div3">
          <div className="home-div14"  onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about-us-div3" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div3" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div3" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div3" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div3">Washaholic</div>
        <div
          className="header-login-button-div3"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div3">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
