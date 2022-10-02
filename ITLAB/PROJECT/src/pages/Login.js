import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onLoginGoogle1IconClick = useCallback(() => {
    navigate("/google");
  }, [navigate]);

  const onLoginFacebook1IconClick = useCallback(() => {
    navigate("/google");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onLoginSignUpTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="login-div14">
      <img
        className="login-ellipse-9-icon"
        alt=""
        src="../signup-ellipse-9.svg"
      />
      <img
        className="login-ellipse-10-icon"
        alt=""
        src="../signup-ellipse-9.svg"
      />
      <img
        className="login-360-f-339709048-zitr4wrv-icon"
        alt=""
        src="../signup-360-f-339709048-zitr4wrvsoxckdjhncdtabsnwpihiar7-1@2x.png"
      />
      <div className="login-login-to-your-account">Login to your account</div>
      <div className="login-rectangle-1-div" />
      <div className="login-rectangle-2-div" />
      <div className="login-email-div">Email</div>
      <div className="login-password-div">Password</div>
      <div className="login-remember-me-div">Remember me</div>
      <img
        className="login-google-1-icon"
        alt=""
        src="../signup-google-1@2x.png"
        onClick={onLoginGoogle1IconClick}
      />
      <img
        className="login-facebook-1-icon"
        alt=""
        src="../signup-facebook@2x.png"
        onClick={onLoginFacebook1IconClick}
      />
      <div className="login-button-div" onClick={onLoginButtonContainerClick}>
        <div className="login-buttonsign-in-div">{`Sign in `}</div>
      </div>
      <div className="login-line-3-div" />
      <div className="login-or-continue-with">or continue with</div>
      <div className="login-line-4-div" />
      <div className="login-dont-have-an-account">
        <span>Don’t have an account?</span>
        <span className="span2">{` `}</span>
      </div>
      <div className="login-rectangle-3-div" />
      <div className="login-sign-up-div" onClick={onLoginSignUpTextClick}>
        Sign Up
      </div>
    </div>
  );
};

export default Login;
