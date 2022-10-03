import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
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
    <div className="about-us-div14">
      <div className="aboutus-rectangle-5-div" />
      <div className="aboutus-about-us-div">
        <span className="about-span">About</span>
        <span className="us-span">
          <span className="span5">{` `}</span>
          <span>Us</span>
        </span>
      </div>
      <div className="aboutus-teams-div">Teams</div>
      <div className="aboutus-offices-div">Offices</div>
      <div className="aboutus-process-manager-div">Process Manager</div>
      <div className="aboutus-technical-head1-div">Technical Head</div>
      <div className="aboutus-marketing-head-div">Marketing Head</div>
      <div className="aboutus-technical-head-div">Technical Head</div>
      <div className="aboutus-thanks-for-your-intere">{`Thanks for your interest in Laundry Spin! We are Online Dry Cleaners & Laundry Service provider in Pune, Mumbai, Delhi & Bengaluru, India. We’ve worked hard to create a consistent and seamless clothing care experience with free pick up and drop offs. Our services include Dry Cleaning & Laundry service. We look forward to taking care of you soon!`}</div>
      <img
        className="aboutus-rectangle-26-icon"
        alt=""
        src="../aboutus-rectangle-26@2x.png"
      />
      <img
        className="aboutus-rectangle-27-icon"
        alt=""
        src="../aboutus-rectangle-27@2x.png"
      />
      <img
        className="aboutus-rectangle-28-icon"
        alt=""
        src="../aboutus-rectangle-28@2x.png"
      />
      <img
        className="aboutus-image-6-icon"
        alt=""
        src="../aboutus-image-6@2x.png"
      />
      <img
        className="aboutus-image-7-icon"
        alt=""
        src="../aboutus-image-7@2x.png"
      />
      <img
        className="aboutus-man-1-icon"
        alt=""
        src="../aboutus-man-1@2x.png"
      />
      <div className="header-div14">
        <img
          className="washaholic-logo-icon14"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div14">
          <div className="home-div14"  onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about-us-div15" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div15" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div15" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div15" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div14">Washaholic</div>
        <div
          className="header-login-button-div14"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div15">Login</div>
        </div>
      </div>
      <div className="footer-div3">
        <div className="footer-email-rectangle-15-div3" />
        <div className="footer-your-email-address3">Your email address</div>
        <img
          className="footer-mail-icbaseline-mail-icon3"
          alt=""
          src="../footer-mail-icbaselinemail.svg"
        />
        <div className="footer-subscribe-rectangle-16-div3" />
        <div className="footer-subscribe-div6">Subscribe</div>
        <img
          className="footer-background-icon3"
          alt=""
          src="../footer-background3.svg"
        />
        <div className="footer-get-in-touch3">Get in touch!</div>
        <b className="footer-services-b3">Services</b>
        <b className="footer-resources-b3">Resources</b>
        <b className="footer-support-b3">Support</b>
        <div className="footer-we-provide-the-best-onl3">
          We provide the best online laundry service
        </div>
        <div className="footer-washing-ironing-shoes-c3">
          <p className="washing-p3">Washing</p>
          <p className="washing-p3">Ironing</p>
          <p className="washing-p3">Shoes Cleaning</p>
          <p className="special-wash3">Special Wash</p>
        </div>
        <div className="footer-services-contact-us-abo3">
          <p className="washing-p3">Services</p>
          <p className="washing-p3">Contact Us</p>
          <p className="special-wash3">About Us</p>
        </div>
        <div className="footer-contact-privacy-terms-o3">
          <p className="washing-p3">Contact</p>
          <p className="washing-p3">Privacy</p>
          <p className="special-wash3">Terms of Use</p>
        </div>
        <div className="footer-2022-laundry-designe3">
          © 2022 Laundry. Designed by students of SPIT
        </div>
        <div className="footer-frame-9-div3">
          <img
            className="footer-socials-fb-frame-icon3"
            alt=""
            src="../footer-socials-fb-frame3.svg"
          />
          <img
            className="footer-socials-fb-frame-icon3"
            alt=""
            src="../footer-socials-insta-frame3.svg"
          />
          <img
            className="footer-socials-fb-frame-icon3"
            alt=""
            src="../footer-socials-lkd-frame3.svg"
          />
          <img
            className="footer-socials-fb-frame-icon3"
            alt=""
            src="../footer-socials-pt-frame3.svg"
          />
          <img
            className="footer-socials-twt-frame-icon3"
            alt=""
            src="../footer-socials-twt-frame3.svg"
          />
        </div>
        <div className="footer-horizontal-line-div3" />
        <div className="footer-vertical-line-div3" />
        <div className="footer-email-rectangle-15-div3" />
        <div className="footer-your-email-address3">Your email address</div>
        <img
          className="footer-mail-icbaseline-mail-icon3"
          alt=""
          src="../footer-mail-icbaselinemail.svg"
        />
        <div className="footer-subscribe-rectangle-16-div3" />
        <div className="footer-subscribe-div7">Subscribe</div>
      </div>
    </div>
  );
};

export default AboutUs;
