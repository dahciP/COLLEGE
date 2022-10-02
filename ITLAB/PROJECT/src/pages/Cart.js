import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  const onCartCompleteOrderTextClick = useCallback(() => {
    navigate("/delivery");
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
    <div className="cart-div">
      <div className="cart-rectangle-49-div" />
      <div className="cart-rectangle-47-div" />
      <div className="cart-rectangle-50-div" />
      <div className="cart-total-400-div">
        <span className="total">
          <span className="total-span">Total</span>
          <span>{`:                 `}</span>
        </span>
        <span className="span">400</span>
      </div>
      <div className="cart-quantity-4-div">Quantity: 4</div>
      <div className="cart-stains-2-div">Stains: 2</div>
      <div className="cart-t-shirt-div">T-Shirt</div>
      <div className="cart-cart-div">Cart</div>
      <div className="cart-tshirt-cart3-div">
        <div className="cart-tshirt-cart3-bicredit-ca-div" />
        <img
          className="cart-tshirt-cart3-bicredit-ca-icon"
          alt=""
          src="../cart-tshirt-cart3-bicreditcard2frontfill.svg"
        />
        <div className="cart-tshirt-cart3-group3-div">
          <div className="cart-tshirt-cart3-group3rectan-div" />
          <div className="cart-tshirt-cart3-group34-div">4</div>
          <div className="cart-tshirt-cart3-group3-div1">-</div>
          <div className="cart-tshirt-cart3-group3-div2">+</div>
        </div>
        <div className="cart-tshirt-cart3-group2-div">
          <div className="cart-tshirt-cart3-group2-t-shi-div">T-Shirt</div>
          <b className="cart-tshirt-cart3-group2-400-b">{`400 `}</b>
          <div className="cart-tshirt-cart3-group2-men-div">
            <div className="cart-tshirt-cart1-group1-women-div">Men</div>
          </div>
        </div>
        <img
          className="cart-tshirt-cart3-group1-icon"
          alt=""
          src="../cart-tshirt-cart3-group1.svg"
        />
      </div>
      <img className="cart-group1-icon" alt="" src="../cart-group1.svg" />
      <div className="cart-tshirt-cart2-div">
        <div className="cart-tshirt-cart3-bicredit-ca-div" />
        <img
          className="cart-tshirt-cart3-bicredit-ca-icon"
          alt=""
          src="../cart-tshirt-cart2-bicreditcard2frontfill.svg"
        />
        <div className="cart-tshirt-cart3-group3-div">
          <div className="cart-tshirt-cart3-group3rectan-div" />
          <div className="cart-tshirt-cart3-group34-div">4</div>
          <div className="cart-tshirt-cart2-group2-div1">-</div>
          <div className="cart-tshirt-cart3-group3-div2">+</div>
        </div>
        <div className="cart-tshirt-cart2-group1-div">
          <div className="cart-tshirt-cart2-group1-pant-div">Pant</div>
          <b className="cart-tshirt-cart2-group1-320-b">320</b>
          <div className="cart-tshirt-cart2-group1-men-div">
            <div className="cart-tshirt-cart1-group1-women-div">Men</div>
          </div>
        </div>
      </div>
      <div className="cart-tshirt-cart1-div">
        <div className="cart-tshirt-cart3-bicredit-ca-div" />
        <img
          className="cart-tshirt-cart3-bicredit-ca-icon"
          alt=""
          src="../cart-tshirt-cart1-bicreditcard2frontfill.svg"
        />
        <div className="cart-tshirt-cart1-group2-div">
          <div className="cart-tshirt-cart3-group3rectan-div" />
          <div className="cart-tshirt-cart1-group2-div1">-</div>
          <div className="cart-tshirt-cart1-group2-div2">+</div>
          <div className="cart-tshirt-cart1-group2-4-div">4</div>
        </div>
        <div className="cart-tshirt-cart1-group1-div">
          <div className="cart-tshirt-cart1-dress-div">Dress</div>
          <b className="cart-tshirt-cart1-320-b">320</b>
          <div className="cart-tshirt-cart1-group1-men-div">
            <div className="cart-tshirt-cart1-group1-women-div">Women</div>
          </div>
        </div>
      </div>
      <img className="cart-003-pants-icon" alt="" src="../cart-003pants.svg" />
      <img className="cart-005-dress-icon" alt="" src="../cart-005dress.svg" />
      <div className="cart-rectangle-2-div" />
      <b
        className="cart-complete-order-b"
        onClick={onCartCompleteOrderTextClick}
      >
        Complete order
      </b>
      <div className="cart-size-34-div">
        <p className="size">Size: 34</p>
      </div>
      <div className="cart-gender-male-div">Gender: Male</div>
      <img
        className="cart-rectangle-48-icon"
        alt=""
        src="../adddetails-rectangle-48.svg"
      />
      <div className="cart-3-div">+</div>
      <div className="cart-43-div">{`4     `}</div>
      <div className="cart-3-div1">-</div>
      <img
        className="cart-rectangle-48-icon1"
        alt=""
        src="../adddetails-rectangle-48.svg"
      />
      <div className="cart-2-div">+</div>
      <div className="cart-42-div">{`4     `}</div>
      <div className="cart-2-div1">-</div>
      <img
        className="cart-rectangle-48-icon2"
        alt=""
        src="../adddetails-rectangle-48.svg"
      />
      <div className="cart-1-div">+</div>
      <div className="cart-41-div">{`4     `}</div>
      <div className="cart-1-div1">-</div>
      <div className="header-div10">
        <img
          className="washaholic-logo-icon10"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div10">
          <div className="home-div10">Home</div>
          <div className="about-us-div10" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div10" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div10" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div10" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div10">Washaholic</div>
        <div
          className="header-login-button-div10"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div10">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
