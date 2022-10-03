import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDetails.css";

const AddDetails = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onAdddetailsCompleteOrderTextClick = useCallback(() => {
    navigate("/cart");
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
    <div className="add-details-div">
      <div className="adddetails-add-details-div">Add Details</div>
      <div className="adddetails-tshirt-cart3-div">
        <div className="adddetails-tshirt-cart3-bicre-div" />
        <img
          className="adddetails-tshirt-cart3-bicre-icon"
          alt=""
          src="../adddetails-tshirt-cart3-bicreditcard2frontfill.svg"
        />
        <div className="adddetails-tshirt-cart3-group3-div">
          <div className="adddetails-tshirt-cart3-group3-div1" />
          <div className="adddetails-tshirt-cart3-group3-div2">4 +</div>
          <div className="adddetails-tshirt-cart3-group3-div3">-</div>
          <div className="adddetails-tshirt-cart3-group3-div4">+</div>
        </div>
        <div className="adddetails-tshirt-cart3-group2-div">
          <b className="adddetails-tshirt-cart3-group2-b">T-Shirt</b>
          <b className="adddetails-tshirt-cart3-group2-b1">{`400 `}</b>
          <div className="adddetails-tshirt-cart3-group2-div1">
            <div className="adddetails-tshirt-cart3-group2-div2">Men</div>
          </div>
        </div>
        <img
          className="adddetails-tshirt-cart3-group1-icon"
          alt=""
          src="../adddetails-tshirt-cart3-group1.svg"
        />
      </div>
      <div className="adddetails-tshirt-cart2-div">
        <div className="adddetails-tshirt-cart2bicred-div" />
        <img
          className="adddetails-tshirt-cart2bicred-icon"
          alt=""
          src="../adddetails-tshirt-cart2bicreditcard2frontfill.svg"
        />
        <div className="adddetails-tshirt-cart2-group2-div">
          <div className="adddetails-tshirt-cart2-group2-div1" />
          <div className="adddetails-tshirt-cart2-group2-div2">4</div>
          <div className="adddetails-tshirt-cart2-group2-div3">-</div>
          <div className="adddetails-tshirt-cart2-group2-div4">+</div>
        </div>
        <div className="adddetails-tshirt-cart2-group1-div">
          <b className="adddetails-tshirt-cart2-group1-b">Pant</b>
          <b className="adddetails-tshirt-cart2-group1-b1">320</b>
          <div className="adddetails-tshirt-cart2-group1-div1">
            <div className="adddetails-tshirt-group1men-div">Men</div>
          </div>
        </div>
      </div>
      <div className="adddetails-tshirt-cart1-div">
        <div className="adddetails-tshirt-cart1-bicre-div" />
        <img
          className="adddetails-tshirt-cart1-bicre-icon"
          alt=""
          src="../adddetails-tshirt-cart1-bicreditcard2frontfill.svg"
        />
        <div className="adddetails-tshirt-cart1-group2-div">
          <div className="adddetails-tshirt-cart1-group2-div1" />
          <div className="adddetails-tshirt-cart1-group2-div2">-</div>
          <div className="adddetails-tshirt-cart1-group2-div3">+</div>
          <div className="adddetails-tshirt-cart1-group2-div4">4</div>
        </div>
        <div className="adddetails-tshirt-cart1-group1-div">
          <b className="adddetails-tshirt-cart1-group1-b">Dress</b>
          <b className="adddetails-tshirt-cart1-group1-b1">320</b>
          <div className="adddetails-tshirt-cart1-group1-div1">
            <div className="adddetails-tshirt-cart1-group1-div2">Women</div>
          </div>
        </div>
      </div>
      <img
        className="adddetails-003-pants-icon"
        alt=""
        src="../adddetails-003pants.svg"
      />
      <img
        className="adddetails-005-dress-icon"
        alt=""
        src="../adddetails-005dress.svg"
      />
      <div className="adddetails-tshirt-cart-div">
        <div className="adddetails-tshirt-cart-rectang-div" />
        <img
          className="adddetails-tshirt-cart-bicred-icon"
          alt=""
          src="../adddetails-tshirt-cart-bicreditcard2frontfill.svg"
        />
        <div className="adddetails-tshirt-cart-group1g-div">
          <div className="adddetails-tshirt-cart-group2r-div" />
          <div className="adddetails-tshirt-cart-group2-div">-</div>
          <div className="adddetails-tshirt-cart-group2-div1">+</div>
          <div className="adddetails-tshirt-cart-group24-div">4</div>
        </div>
        <div className="adddetails-tshirt-cart-group1-div">
          <b className="adddetails-tshirt-cart-group1c-b">Cardigons</b>
          <b className="adddetails-tshirt-cart-group13-b">320</b>
          <div className="adddetails-tshirt-cart-group1m-div">
            <div className="adddetails-tshirt-cart-group1w-div">Women</div>
          </div>
        </div>
      </div>
      <div className="adddetails-rectangle-2-div" />
      <b
        className="adddetails-complete-order-b"
        onClick={onAdddetailsCompleteOrderTextClick}
      >
        Complete order
      </b>
      <img
        className="adddetails-004-cardigan-icon"
        alt=""
        src="../adddetails-004cardigan.svg"
      />
      <img
        className="adddetails-rectangle-48-icon"
        alt=""
        src="../adddetails-rectangle-48.svg"
      />
      <div className="adddetails-3-div">+</div>
      <div className="adddetails-4-2-div">{`4     `}</div>
      <div className="adddetails-3-div1">-</div>
      <img
        className="adddetails-rectangle-48-icon1"
        alt=""
        src="../adddetails-rectangle-48.svg"
      />
      <div className="adddetails-2-div">+</div>
      <div className="adddetails-4-1-div">{`4     `}</div>
      <div className="adddetails-2-div1">-</div>
      <img
        className="adddetails-rectangle-48-icon2"
        alt=""
        src="../adddetails-rectangle-48.svg"
      />
      <div className="adddetails-1-div">+</div>
      <div className="adddetails-4-div">{`4     `}</div>
      <div className="adddetails-1-div1">-</div>
      <div className="header-div9">
        <img
          className="washaholic-logo-icon9"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div9">
          <div className="home-div14"  onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about-us-div9" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div9" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div9" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div9" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div9">Washaholic</div>
        <div
          className="header-login-button-div9"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div9">Login</div>
        </div>
      </div>
    </div>
  );
};

export default AddDetails;
