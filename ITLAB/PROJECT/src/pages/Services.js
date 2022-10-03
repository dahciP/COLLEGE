import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);
  
  const onServicesSeeAllTextClick = useCallback(() => {
    navigate("/add-details");
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
    <div className="services-div11">
      <div className="services-services-div">Services</div>
      <div className="services-wash1-div">Wash</div>
      <div className="services-special-combo-div">Special Combo</div>
      <div className="services-wash-div">Wash</div>
      <div className="services-combo-div">Combo</div>
      <div className="services-shoes-wash-div">Shoes Wash</div>
      <div className="services-dry-cleaning-div">Dry Cleaning</div>
      <div className="services-ironing-div">Ironing</div>
      <div className="services-special-wash-div">Special Wash</div>
      <img
        className="services-ellipse-1-icon"
        alt=""
        src="../services-ellipse-1.svg"
      />
      <img
        className="services-ellipse-2-icon"
        alt=""
        src="../services-ellipse-2.svg"
      />
      <img
        className="services-laundry-machine-1-icon"
        alt=""
        src="../services-laundrymachine-1@2x.png"
      />
      <img
        className="services-ellipse-3-icon"
        alt=""
        src="../services-ellipse-3.svg"
      />
      <img
        className="services-ellipse-4-icon"
        alt=""
        src="../services-ellipse-4.svg"
      />
      <img
        className="services-ellipse-5-icon"
        alt=""
        src="../services-ellipse-5.svg"
      />
      <img
        className="services-ellipse-6-icon"
        alt=""
        src="../services-ellipse-6.svg"
      />
      <img
        className="services-ellipse-7-icon"
        alt=""
        src="../services-ellipse-7.svg"
      />
      <img
        className="services-ellipse-8-icon"
        alt=""
        src="../services-ellipse-8.svg"
      />
      <img
        className="services-washing-machine-2-icon"
        alt=""
        src="../services-washingmachine-2@2x.png"
      />
      <img
        className="services-laundry-basket-1-icon"
        alt=""
        src="../services-laundrybasket-1@2x.png"
      />
      <img
        className="services-ironing-1-icon"
        alt=""
        src="../services-ironing-1@2x.png"
      />
      <img
        className="services-shoes-1-icon"
        alt=""
        src="../services-shoes-1@2x.png"
      />
      <img
        className="services-dry-cleaning-2-icon"
        alt=""
        src="../services-drycleaning-2@2x.png"
      />
      <div className="services-see-all-div" onClick={onServicesSeeAllTextClick}>
        See All
      </div>
      <img
        className="services-stiching-1-icon"
        alt=""
        src="../services-stiching-1@2x.png"
      />
      <img
        className="services-special-tag-1-icon"
        alt=""
        src="../services-specialtag-1@2x.png"
      />
      <div className="header-div11">
        <img
          className="washaholic-logo-icon11"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div11">
          <div className="home-div14"  onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about-us-div11" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div11" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div11" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div11" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div11">Washaholic</div>
        <div
          className="header-login-button-div11"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div11">Login</div>
        </div>
      </div>
      <div className="footer-div2">
        <div className="footer-email-rectangle-15-div2" />
        <div className="footer-your-email-address2">Your email address</div>
        <img
          className="footer-mail-icbaseline-mail-icon2"
          alt=""
          src="../footer-mail-icbaselinemail.svg"
        />
        <div className="footer-subscribe-rectangle-16-div2" />
        <div className="footer-subscribe-div4">Subscribe</div>
        <img
          className="footer-background-icon2"
          alt=""
          src="../footer-background2.svg"
        />
        <div className="footer-get-in-touch2">Get in touch!</div>
        <b className="footer-services-b2">Services</b>
        <b className="footer-resources-b2">Resources</b>
        <b className="footer-support-b2">Support</b>
        <div className="footer-we-provide-the-best-onl2">
          We provide the best online laundry service
        </div>
        <div className="footer-washing-ironing-shoes-c2">
          <p className="washing-p2">Washing</p>
          <p className="washing-p2">Ironing</p>
          <p className="washing-p2">Shoes Cleaning</p>
          <p className="special-wash2">Special Wash</p>
        </div>
        <div className="footer-services-contact-us-abo2">
          <p className="washing-p2">Services</p>
          <p className="washing-p2">Contact Us</p>
          <p className="special-wash2">About Us</p>
        </div>
        <div className="footer-contact-privacy-terms-o2">
          <p className="washing-p2">Contact</p>
          <p className="washing-p2">Privacy</p>
          <p className="special-wash2">Terms of Use</p>
        </div>
        <div className="footer-2022-laundry-designe2">
          © 2022 Laundry. Designed by students of SPIT
        </div>
        <div className="footer-frame-9-div2">
          <img
            className="footer-socials-fb-frame-icon2"
            alt=""
            src="../footer-socials-fb-frame2.svg"
          />
          <img
            className="footer-socials-fb-frame-icon2"
            alt=""
            src="../footer-socials-insta-frame2.svg"
          />
          <img
            className="footer-socials-fb-frame-icon2"
            alt=""
            src="../footer-socials-lkd-frame2.svg"
          />
          <img
            className="footer-socials-fb-frame-icon2"
            alt=""
            src="../footer-socials-pt-frame2.svg"
          />
          <img
            className="footer-socials-twt-frame-icon2"
            alt=""
            src="../footer-socials-twt-frame2.svg"
          />
        </div>
        <div className="footer-horizontal-line-div2" />
        <div className="footer-vertical-line-div2" />
        <div className="footer-email-rectangle-15-div2" />
        <div className="footer-your-email-address2">Your email address</div>
        <img
          className="footer-mail-icbaseline-mail-icon2"
          alt=""
          src="../footer-mail-icbaselinemail.svg"
        />
        <div className="footer-subscribe-rectangle-16-div2" />
        <div className="footer-subscribe-div5">Subscribe</div>
      </div>
    </div>
  );
};

export default Services;
