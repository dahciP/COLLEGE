import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const onPaymentPickupGroup58ContainerClick = useCallback(() => {
    navigate("/delivery");
  }, [navigate]);

  const onPaymentApplyCouponsTextClick = useCallback(() => {
    navigate("/offers");
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
    <div className="payment-div">
      <div
        className="payment-pickup-group-58-div"
        onClick={onPaymentPickupGroup58ContainerClick}
      >
        <div className="payment-pickup-rectangle-21-div" />
        <div className="payment-pickup-div">Pickup</div>
        <img
          className="payment-arrow-1-icon"
          alt=""
          src="../payment-arrow-1.svg"
        />
      </div>
      <div className="payment-proceedtopay-group-64-div">
        <div className="payment-proceedtopay-rectangle-div" />
        <div className="payment-proceed-to-pay">Proceed to Pay</div>
      </div>
      <div className="payment-payment-div">Payment</div>
      <div className="payment-total-div">Total</div>
      <div className="payment-payment-options-div">Payment Options</div>
      <div className="payment-paymentoptions-rectang-div" />
      <div className="payment-belowcd-line-7-div" />
      <div className="payment-belownb-line-8-div" />
      <div className="payment-belowcoins-line-9-div" />
      <div className="payment-belowgpay-line-10-div" />
      <div className="payment-belowtotal-line-11-div" />
      <div className="payment-cd-group-59-div">
        <img
          className="payment-cd-ellipse-18-icon"
          alt=""
          src="../payment-cd-ellipse-18.svg"
        />
        <img
          className="payment-cd-credit-card-1-icon"
          alt=""
          src="../payment-cd-creditcard-1@2x.png"
        />
        <div className="payment-cd-creditdebit-card-div">Credit/Debit Card</div>
      </div>
      <div className="payment-nb-group-60-div">
        <img
          className="payment-nb-ellipse-18-icon"
          alt=""
          src="../payment-cd-ellipse-18.svg"
        />
        <div className="payment-nb-net-banking-div">Net Banking</div>
      </div>
      <div className="payment-insite-group-61-div">
        <img
          className="payment-nb-ellipse-18-icon"
          alt=""
          src="../payment-cd-ellipse-18.svg"
        />
        <div className="payment-nb-net-banking-div">Laundry Coins</div>
      </div>
      <div className="payment-cash-group-63-div">
        <img
          className="payment-nb-ellipse-18-icon"
          alt=""
          src="../payment-cd-ellipse-18.svg"
        />
        <div className="payment-nb-net-banking-div">Laundry Coins</div>
      </div>
      <div className="payment-gpay-group-62-div">
        <img
          className="payment-nb-ellipse-18-icon"
          alt=""
          src="../payment-cd-ellipse-18.svg"
        />
        <div className="payment-gpay-div">Gpay</div>
      </div>
      <img
        className="payment-provider-1-icon"
        alt=""
        src="../payment-provider-1@2x.png"
      />
      <img
        className="payment-logo-3-icon"
        alt=""
        src="../payment-logo-3@2x.png"
      />
      <img
        className="payment-google-2-icon"
        alt=""
        src="../payment-google-2@2x.png"
      />
      <img
        className="payment-money-1-icon"
        alt=""
        src="../payment-money-1@2x.png"
      />
      <div className="payment-5400-div">₹ 5400</div>
      <div
        className="payment-apply-coupons-div"
        onClick={onPaymentApplyCouponsTextClick}
      >
        Apply coupons
      </div>
      <div className="header-div1">
        <img
          className="washaholic-logo-icon1"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div1">
          <div className="home-div1">Home</div>
          <div className="about-us-div1" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div1" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div1" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div1" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div1">Washaholic</div>
        <div
          className="header-login-button-div1"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div1">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
