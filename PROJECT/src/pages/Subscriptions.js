import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Subscriptions.css";

const Subscriptions = () => {
  const navigate = useNavigate();

  const onSubscriptionsRectangle7Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSubscriptionsRectangle8Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSubscriptionsRectangle9Click = useCallback(() => {
    navigate("/login");
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
    <div className="subscriptions-div2">
      <div className="subscriptions-monthly-subscrip-div">
        Monthly Subscriptions Plans
      </div>
      <div className="subscriptions-rectangle-1-div" />
      <div className="subscriptions-rectangle-2-div" />
      <div
        className="subscriptions-rectangle-7-div"
        onClick={onSubscriptionsRectangle7Click}
      />
      <div className="subscriptions-1000-div">{`₹1000 `}</div>
      <div className="subscriptions-sign-up1-div">Sign up</div>
      <img
        className="subscriptions-check-mark-1-icon"
        alt=""
        src="../subscriptions-checkmark-1@2x.png"
      />
      <div className="subscriptions-bed-linen-and-to">Bed linen and towles</div>
      <div className="subscriptions-ironing1-div">Ironing</div>
      <div className="subscriptions-dry-cleaning1-div">Dry cleaning</div>
      <div className="subscriptions-seperate-wash-of">
        Seperate wash of light and dark clothes
      </div>
      <div className="subscriptions-blankets-and-bul">
        Blankets and Bulk items
      </div>
      <img
        className="subscriptions-delete-button-2-icon"
        alt=""
        src="../subscriptions-deletebutton-2@2x.png"
      />
      <img
        className="subscriptions-delete-button-3-icon"
        alt=""
        src="../subscriptions-deletebutton-2@2x.png"
      />
      <img
        className="subscriptions-delete-button-7-icon"
        alt=""
        src="../subscriptions-deletebutton-2@2x.png"
      />
      <div className="subscriptions-rectangle-3-div" />
      <div className="subscriptions-rectangle-4-div" />
      <img
        className="subscriptions-check-mark-2-icon"
        alt=""
        src="../subscriptions-checkmark-1@2x.png"
      />
      <img
        className="subscriptions-check-mark-3-icon"
        alt=""
        src="../subscriptions-checkmark-1@2x.png"
      />
      <img
        className="subscriptions-check-mark-10-icon"
        alt=""
        src="../subscriptions-checkmark-1@2x.png"
      />
      <img
        className="subscriptions-check-mark-4-icon"
        alt=""
        src="../subscriptions-checkmark-1@2x.png"
      />
      <div className="subscriptions-bed-linen-and-to1">
        Bed linen and towles
      </div>
      <div className="subscriptions-ironing2-div">Ironing</div>
      <div className="subscriptions-dry-cleaning2-div">Dry cleaning</div>
      <div className="subscriptions-seperate-wash-of1">
        Seperate wash of light and dark clothes
      </div>
      <div className="subscriptions-blankets-and-bul1">
        Blankets and Bulk items
      </div>
      <img
        className="subscriptions-delete-button-6-icon"
        alt=""
        src="../subscriptions-deletebutton-2@2x.png"
      />
      <img
        className="subscriptions-delete-button-8-icon"
        alt=""
        src="../subscriptions-deletebutton-2@2x.png"
      />
      <div className="subscriptions-rectangle-5-div" />
      <div className="subscriptions-rectangle-6-div" />
      <img
        className="subscriptions-check-mark-5-icon"
        alt=""
        src="../subscriptions-checkmark-1@2x.png"
      />
      <img
        className="subscriptions-check-mark-6-icon"
        alt=""
        src="../subscriptions-checkmark-1@2x.png"
      />
      <img
        className="subscriptions-check-mark-7-icon"
        alt=""
        src="../subscriptions-checkmark-1@2x.png"
      />
      <img
        className="subscriptions-check-mark-8-icon"
        alt=""
        src="../subscriptions-checkmark-1@2x.png"
      />
      <img
        className="subscriptions-check-mark-9-icon"
        alt=""
        src="../subscriptions-checkmark-1@2x.png"
      />
      <div className="subscriptions-bed-linen-and-to2">
        Bed linen and towles
      </div>
      <div className="subscriptions-ironing3-div">Ironing</div>
      <div className="subscriptions-dry-cleaning3-div">Dry cleaning</div>
      <div className="subscriptions-seperate-wash-of2">
        Seperate wash of light and dark clothes
      </div>
      <div className="subscriptions-blankets-and-bul2">
        Blankets and Bulk items
      </div>
      <div className="subscriptions-conditions-appl-div">
        *conditions applied
      </div>
      <div className="subscriptions-conditions-appl-div1">
        *conditions applied
      </div>
      <div className="subscriptions-conditions-appl-div2">
        *conditions applied
      </div>
      <div className="subscriptions-1500-div">₹1500</div>
      <div className="subscriptions-2000-div">₹2000</div>
      <div className="subscriptions-individual">Individual</div>
      <div className="subscriptions-family-div">Family</div>
      <div className="subscriptions-couple-div">Couple</div>
      <img
        className="subscriptions-single-001-man-icon"
        alt=""
        src="../subscriptions-single-001man.svg"
      />
      <img
        className="subscriptions-003-relationship-icon"
        alt=""
        src="../subscriptions-003relationship.svg"
      />
      <img
        className="subscriptions-002-team-icon"
        alt=""
        src="../subscriptions-002team.svg"
      />
      <div
        className="subscriptions-rectangle-8-div"
        onClick={onSubscriptionsRectangle8Click}
      />
      <div
        className="subscriptions-rectangle-9-div"
        onClick={onSubscriptionsRectangle9Click}
      />
      <div className="subscriptions-sign-up-div">Sign up</div>
      <div className="subscriptions-sign-up-div1">Sign up</div>
      <img
        className="subscriptions-special-tag-1-icon"
        alt=""
        src="../subscriptions-specialtag-1@2x.png"
      />
      <div className="header-div2">
        <img
          className="washaholic-logo-icon2"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div2">
          <div className="home-div2">Home</div>
          <div className="about-us-div2" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div2" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div2" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div2" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div2">Washaholic</div>
        <div
          className="header-login-button-div2"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div2">Login</div>
        </div>
      </div>
      <div className="footer-div1">
        <div className="footer-email-rectangle-15-div1" />
        <div className="footer-your-email-address1">Your email address</div>
        <img
          className="footer-mail-icbaseline-mail-icon1"
          alt=""
          src="../footer-mail-icbaselinemail.svg"
        />
        <div className="footer-subscribe-rectangle-16-div1" />
        <div className="footer-subscribe-div2">Subscribe</div>
        <img
          className="footer-background-icon1"
          alt=""
          src="../footer-background.svg"
        />
        <div className="footer-get-in-touch1">Get in touch!</div>
        <b className="footer-services-b1">Services</b>
        <b className="footer-resources-b1">Resources</b>
        <b className="footer-support-b1">Support</b>
        <div className="footer-we-provide-the-best-onl1">
          We provide the best online laundry service
        </div>
        <div className="footer-washing-ironing-shoes-c1">
          <p className="washing-p1">Washing</p>
          <p className="washing-p1">Ironing</p>
          <p className="washing-p1">Shoes Cleaning</p>
          <p className="special-wash1">Special Wash</p>
        </div>
        <div className="footer-services-contact-us-abo1">
          <p className="washing-p1">Services</p>
          <p className="washing-p1">Contact Us</p>
          <p className="special-wash1">About Us</p>
        </div>
        <div className="footer-contact-privacy-terms-o1">
          <p className="washing-p1">Contact</p>
          <p className="washing-p1">Privacy</p>
          <p className="special-wash1">Terms of Use</p>
        </div>
        <div className="footer-2022-laundry-designe1">
          © 2022 Laundry. Designed by students of SPIT
        </div>
        <div className="footer-frame-9-div1">
          <img
            className="footer-socials-fb-frame-icon1"
            alt=""
            src="../footer-socials-fb-frame1.svg"
          />
          <img
            className="footer-socials-fb-frame-icon1"
            alt=""
            src="../footer-socials-insta-frame1.svg"
          />
          <img
            className="footer-socials-fb-frame-icon1"
            alt=""
            src="../footer-socials-lkd-frame1.svg"
          />
          <img
            className="footer-socials-fb-frame-icon1"
            alt=""
            src="../footer-socials-pt-frame1.svg"
          />
          <img
            className="footer-socials-twt-frame-icon1"
            alt=""
            src="../footer-socials-twt-frame1.svg"
          />
        </div>
        <div className="footer-horizontal-line-div1" />
        <div className="footer-vertical-line-div1" />
        <div className="footer-email-rectangle-15-div1" />
        <div className="footer-your-email-address1">Your email address</div>
        <img
          className="footer-mail-icbaseline-mail-icon1"
          alt=""
          src="../footer-mail-icbaselinemail.svg"
        />
        <div className="footer-subscribe-rectangle-16-div1" />
        <div className="footer-subscribe-div3">Subscribe</div>
      </div>
    </div>
  );
};

export default Subscriptions;
