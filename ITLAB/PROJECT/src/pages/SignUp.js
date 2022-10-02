import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const onSignUpButtonContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onSignUpGoogle1IconClick = useCallback(() => {
    navigate("/google");
  }, [navigate]);

  const onSignUpFacebookIconClick = useCallback(() => {
    navigate("/google");
  }, [navigate]);

  const onSignUpLoginInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="signup-div">
      <div className="signup-button-div" onClick={onSignUpButtonContainerClick}>
        <div className="signup-button-create-account-div">Create Account</div>
        <div className="signup-buttoncreate-account-div">Create Account</div>
      </div>
      <img
        className="signup-360-f-339709048-zitr4wr-icon"
        alt=""
        src="../signup-360-f-339709048-zitr4wrvsoxckdjhncdtabsnwpihiar7-1@2x.png"
      />
      <div className="signup-rectangle-1-div" />
      <div className="signup-rectangle-2-div" />
      <div className="signup-rectangle-6-div" />
      <div className="signup-email-div">Email</div>
      <div className="signup-password-div">Password</div>
      <div className="signup-confirm-password-div">Confirm Password</div>
      <div className="signup-signup-div">SignUp</div>
      <div className="signup-rectangle-4-div" />
      <div className="signup-name-div">Name</div>
      <div className="signup-rectangle-5-div" />
      <div className="signup-phone-number-div">Phone Number</div>
      <img
        className="signup-ellipse-9-icon"
        alt=""
        src="../signup-ellipse-9.svg"
      />
      <img
        className="signup-ellipse-10-icon"
        alt=""
        src="../signup-ellipse-9.svg"
      />
      <img
        className="signup-google-1-icon"
        alt=""
        src="../signup-google-1@2x.png"
        onClick={onSignUpGoogle1IconClick}
      />
      <img
        className="signup-facebook-icon"
        alt=""
        src="../signup-facebook@2x.png"
        onClick={onSignUpFacebookIconClick}
      />
      <div className="signup-line-3-div" />
      <div className="signup-or-continue-with">or continue with</div>
      <div className="signup-line-4-div" />
      <div className="signup-already-have-an-account">
        <div className="signup-already-have-an-account1">
          <span>Already have an account?</span>
          <span className="span1">{` `}</span>
        </div>
      </div>
      <div className="signup-login-in-div" onClick={onSignUpLoginInTextClick}>
        Login In
      </div>
    </div>
  );
};

export default SignUp;
