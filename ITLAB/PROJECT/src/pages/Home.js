import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onHomeSeeAllText1Click = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onHomeSeeAllText2Click = useCallback(() => {
    navigate("/subscriptions");
  }, [navigate]);

  const onHomeWashingMachine2ImageClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onHomeLaundryMachine1ImageClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onHomeLaundryBasket1ImageClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onHomeIroning1ImageClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onHomeShoes1ImageClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onHomeDryCleaning2ImageClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onHomeStiching2ImageClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onHomeSpecialTag1ImageClick = useCallback(() => {
    navigate("/services");
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
    <div className="home-div15">
      <div className="home-dp-1-1-div" />
      <div className="home-we-provide-professional-s">
        We provide professional service at a friendly price
      </div>
      <div className="home-special-offers-div">Special Offers</div>
      <div className="home-see-all-div">See All</div>
      <div className="home-services-div">Services</div>
      <div className="home-wash1-div">Wash</div>
      <div className="home-special-combo-div">Special Combo</div>
      <div className="home-wash-div">Wash</div>
      <div className="home-combo-div">Combo</div>
      <div className="home-shoes-wash-div">Shoes Wash</div>
      <div className="home-dry-cleaning-div">Dry Cleaning</div>
      <div className="home-ironing-div">Ironing</div>
      <div className="home-special-wash-div">Special Wash</div>
      <div className="home-see-all-div1" onClick={onHomeSeeAllText1Click}>
        See All
      </div>
      <div className="home-most-popular-services">Most Popular Services</div>
      <div className="home-see-all-div2" onClick={onHomeSeeAllText2Click}>
        See All
      </div>
      <div className="home-rectangle-4-div">
        <div className="home-rectangle-4-rectangle-4" />
      </div>
      <div className="home-30-off-div">30% Off</div>
      <img className="home-ellipse-1-icon" alt="" src="../home-ellipse-1.svg" />
      <img className="home-ellipse-2-icon" alt="" src="../home-ellipse-2.svg" />
      <img className="home-ellipse-3-icon" alt="" src="../home-ellipse-3.svg" />
      <img className="home-ellipse-4-icon" alt="" src="../home-ellipse-4.svg" />
      <img className="home-ellipse-5-icon" alt="" src="../home-ellipse-5.svg" />
      <img className="home-ellipse-6-icon" alt="" src="../home-ellipse-6.svg" />
      <img className="home-ellipse-7-icon" alt="" src="../home-ellipse-7.svg" />
      <img className="home-ellipse-8-icon" alt="" src="../home-ellipse-8.svg" />
      <div className="home-for-first-100-new-custome">
        For first 100 new customers
      </div>
      <div className="home-todays-special-div">Today’s Special</div>
      <img
        className="home-untitled-design-2-1"
        alt=""
        src="../home-untitled-design-2-1@2x.png"
      />
      <img className="home-rectangle-5-icon" alt="" />
      <img
        className="home-washing-machine-2-icon"
        alt=""
        src="../services-washingmachine-2@2x.png"
        onClick={onHomeWashingMachine2ImageClick}
      />
      <img
        className="home-laundry-machine-1-icon"
        alt=""
        src="../services-laundrymachine-1@2x.png"
        onClick={onHomeLaundryMachine1ImageClick}
      />
      <img
        className="home-laundry-basket-1-icon"
        alt=""
        src="../services-laundrybasket-1@2x.png"
        onClick={onHomeLaundryBasket1ImageClick}
      />
      <img
        className="home-ironing-1-icon"
        alt=""
        src="../services-ironing-1@2x.png"
        onClick={onHomeIroning1ImageClick}
      />
      <img
        className="home-shoes-1-icon"
        alt=""
        src="../services-shoes-1@2x.png"
        onClick={onHomeShoes1ImageClick}
      />
      <img
        className="home-dry-cleaning-2-icon"
        alt=""
        src="../services-drycleaning-2@2x.png"
        onClick={onHomeDryCleaning2ImageClick}
      />
      <img
        className="home-stiching-2-icon"
        alt=""
        src="../services-stiching-1@2x.png"
        onClick={onHomeStiching2ImageClick}
      />
      <img
        className="home-special-tag-1-icon"
        alt=""
        src="../services-specialtag-1@2x.png"
        onClick={onHomeSpecialTag1ImageClick}
      />
      <img
        className="home-1427642388-ironing-steam-icon"
        alt=""
        src="../home-1427642388ironingsteam-1@2x.png"
      />
      <img
        className="home-how-to-clean-your-sneaker-icon"
        alt=""
        src="../home-howtocleanyoursneakersguide00-1@2x.png"
      />
      <img className="home-dp-1-2-icon" alt="" src="../home-dp1-2@2x.png" />
      <div className="header-div15">
        <img
          className="washaholic-logo-icon15"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div15">
          <div className="home-div16">Home</div>
          <div className="about-us-div16" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div16" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div16" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div16" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div15">Washaholic</div>
        <div
          className="header-login-button-div15"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div16">Login</div>
        </div>
      </div>
      <div className="footer-div4">
        <div className="footer-email-rectangle-15-div4" />
        <div className="footer-your-email-address4">Your email address</div>
        <img
          className="footer-mail-icbaseline-mail-icon4"
          alt=""
          src="../footer-mail-icbaselinemail.svg"
        />
        <div className="footer-subscribe-rectangle-16-div4" />
        <div className="footer-subscribe-div8">Subscribe</div>
        <img
          className="footer-background-icon4"
          alt=""
          src="../footer-background.svg"
        />
        <div className="footer-get-in-touch4">Get in touch!</div>
        <b className="footer-services-b4">Services</b>
        <b className="footer-resources-b4">Resources</b>
        <b className="footer-support-b4">Support</b>
        <div className="footer-we-provide-the-best-onl4">
          We provide the best online laundry service
        </div>
        <div className="footer-washing-ironing-shoes-c4">
          <p className="washing-p4">Washing</p>
          <p className="washing-p4">Ironing</p>
          <p className="washing-p4">Shoes Cleaning</p>
          <p className="special-wash4">Special Wash</p>
        </div>
        <div className="footer-services-contact-us-abo4">
          <p className="washing-p4">Services</p>
          <p className="washing-p4">Contact Us</p>
          <p className="special-wash4">About Us</p>
        </div>
        <div className="footer-contact-privacy-terms-o4">
          <p className="washing-p4">Contact</p>
          <p className="washing-p4">Privacy</p>
          <p className="special-wash4">Terms of Use</p>
        </div>
        <div className="footer-2022-laundry-designe4">
          © 2022 Laundry. Designed by students of SPIT
        </div>
        <div className="footer-frame-9-div4">
          <img
            className="footer-socials-fb-frame-icon4"
            alt=""
            src="../footer-socials-fb-frame4.svg"
          />
          <img
            className="footer-socials-fb-frame-icon4"
            alt=""
            src="../footer-socials-insta-frame4.svg"
          />
          <img
            className="footer-socials-fb-frame-icon4"
            alt=""
            src="../footer-socials-lkd-frame4.svg"
          />
          <img
            className="footer-socials-fb-frame-icon4"
            alt=""
            src="../footer-socials-pt-frame4.svg"
          />
          <img
            className="footer-socials-twt-frame-icon4"
            alt=""
            src="../footer-socials-twt-frame4.svg"
          />
        </div>
        <div className="footer-horizontal-line-div4" />
        <div className="footer-vertical-line-div4" />
        <div className="footer-email-rectangle-15-div4" />
        <div className="footer-your-email-address4">Your email address</div>
        <img
          className="footer-mail-icbaseline-mail-icon4"
          alt=""
          src="../footer-mail-icbaselinemail.svg"
        />
        <div className="footer-subscribe-rectangle-16-div4" />
        <div className="footer-subscribe-div9">Subscribe</div>
      </div>
    </div>
  );
};

export default Home;
