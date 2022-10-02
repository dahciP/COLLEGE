import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderAndFooter.css";

const HeaderAndFooter = () => {
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
    <div className="header-and-footer">
      <div className="footer-div">
        <div className="footer-email-rectangle-15-div" />
        <div className="footer-your-email-address">Your email address</div>
        <img
          className="footer-mail-icbaseline-mail-icon"
          alt=""
          src="../footer-mail-icbaselinemail.svg"
        />
        <div className="footer-subscribe-rectangle-16-div" />
        <div className="footer-subscribe-div">Subscribe</div>
        <img
          className="footer-background-icon"
          alt=""
          src="../footer-background.svg"
        />
        <div className="footer-get-in-touch">Get in touch!</div>
        <b className="footer-services-b">Services</b>
        <b className="footer-resources-b">Resources</b>
        <b className="footer-support-b">Support</b>
        <div className="footer-we-provide-the-best-onl">
          We provide the best online laundry service
        </div>
        <div className="footer-washing-ironing-shoes-c">
          <p className="washing-p">Washing</p>
          <p className="washing-p">Ironing</p>
          <p className="washing-p">Shoes Cleaning</p>
          <p className="special-wash">Special Wash</p>
        </div>
        <div className="footer-services-contact-us-abo">
          <p className="washing-p">Services</p>
          <p className="washing-p">Contact Us</p>
          <p className="special-wash">About Us</p>
        </div>
        <div className="footer-contact-privacy-terms-o">
          <p className="washing-p">Contact</p>
          <p className="washing-p">Privacy</p>
          <p className="special-wash">Terms of Use</p>
        </div>
        <div className="footer-2022-laundry-designe">
          © 2022 Laundry. Designed by students of SPIT
        </div>
        <div className="footer-frame-9-div">
          <img
            className="footer-socials-fb-frame-icon"
            alt=""
            src="../footer-socials-fb-frame.svg"
          />
          <img
            className="footer-socials-fb-frame-icon"
            alt=""
            src="../footer-socials-insta-frame.svg"
          />
          <img
            className="footer-socials-fb-frame-icon"
            alt=""
            src="../footer-socials-lkd-frame.svg"
          />
          <img
            className="footer-socials-fb-frame-icon"
            alt=""
            src="../footer-socials-pt-frame.svg"
          />
          <img
            className="footer-socials-twt-frame-icon"
            alt=""
            src="../footer-socials-twt-frame.svg"
          />
        </div>
        <div className="footer-horizontal-line-div" />
        <div className="footer-vertical-line-div" />
        <div className="footer-email-rectangle-15-div" />
        <div className="footer-your-email-address">Your email address</div>
        <img
          className="footer-mail-icbaseline-mail-icon"
          alt=""
          src="../footer-mail-icbaselinemail.svg"
        />
        <div className="footer-subscribe-rectangle-16-div" />
        <div className="footer-subscribe-div1">Subscribe</div>
      </div>
      <div className="header-div">
        <img
          className="washaholic-logo-icon"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div">
          <div className="home-div">Home</div>
          <div className="about-us-div" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div">Washaholic</div>
        <div
          className="header-login-button-div"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div">Login</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAndFooter;
