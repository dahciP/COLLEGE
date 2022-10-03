import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Search2.css";

const Search2 = () => {
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
    <div className="search2-div">
      <div className="search2-rectangle-19-div" />
      <img
        className="search2-search-interface-symbo-icon"
        alt=""
        src="../search1-searchinterfacesymbol-1@2x.png"
      />
      <div className="search2-shoes-div">Shoes</div>
      <img
        className="search2-rectangle-20-icon"
        alt=""
        src="../search2-rectangle-20.svg"
      />
      <img
        className="search2-shoes-2-icon"
        alt=""
        src="../search2-shoes-2@2x.png"
      />
      <div className="shoes-cleaning-div">Shoes cleaning</div>
      <div className="header-div5">
        <img
          className="washaholic-logo-icon5"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div5">
          <div className="home-div14"  onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about-us-div5" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div5" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div5" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div5" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div5">Washaholic</div>
        <div
          className="header-login-button-div5"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div5">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Search2;
