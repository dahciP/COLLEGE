import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Search3.css";

const Search3 = () => {
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
    <div className="search3-div">
      <div className="search3-rectangle-19-div" />
      <img
        className="search3-search-interface-symbo-icon"
        alt=""
        src="../search1-searchinterfacesymbol-1@2x.png"
      />
      <div className="search3-search-div">Search</div>
      <div className="header-div6">
        <img
          className="washaholic-logo-icon6"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div6">
          <div className="home-div14"  onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about-us-div6" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div6" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div6" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div6" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div6">Washaholic</div>
        <div
          className="header-login-button-div6"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div6">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Search3;
