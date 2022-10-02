import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Google.css";

const Google = () => {
  const navigate = useNavigate();

  const onGoogleButtonContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onGoogleLoginInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGoogleSignUpTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="google-div">
      <img
        className="google-360-f-339709048-zitr4wr-icon"
        alt=""
        src="../signup-360-f-339709048-zitr4wrvsoxckdjhncdtabsnwpihiar7-1@2x.png"
      />
      <div className="google-lets-you-in">Let’s you in</div>
      <div className="google-rectangle-1-div" />
      <div className="google-rectangle-2-div" />
      <div className="google-continue-with-google">Continue with Google</div>
      <div className="google-continue-with-facebook">
        Continue with Facebook
      </div>
      <img
        className="google-google-1-icon"
        alt=""
        src="../google-google-1@2x.png"
      />
      <img
        className="google-facebook-1-icon"
        alt=""
        src="../google-facebook-1@2x.png"
      />
      <div className="google-line-1-div" />
      <div className="google-or-div">or</div>
      <div className="google-line-2-div" />
      <div className="google-button-div" onClick={onGoogleButtonContainerClick}>
        <div className="google-buttonsign-in-with-pass">
          Sign in with password
        </div>
      </div>
      <div className="google-dont-have-an-account">
        <span>Don’t have an account?</span>
        <span className="span3">{` `}</span>
      </div>
      <div className="google-already-have-an-account">
        <span>Already have an account?</span>
        <span className="span4">{` `}</span>
      </div>
      <div className="google-login-in-div" onClick={onGoogleLoginInTextClick}>
        Login In
      </div>
      <div className="google-sign-up-div" onClick={onGoogleSignUpTextClick}>
        Sign Up
      </div>
    </div>
  );
};

export default Google;
