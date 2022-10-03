import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Search1.css";

const Search1 = () => {
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
    <div className="search1-div">
      <div className="search1-rectangle-19-div" />
      <img
        className="search1-search-interface-symbo-icon"
        alt=""
        src="../search1-searchinterfacesymbol-1@2x.png"
      />
      <div className="search1-abc-div">abc</div>
      <img
        className="search1-feathersearch-icon"
        alt=""
        src="../search1-feathersearch.svg"
      />
      <b className="search1-item-not-found">Item not found</b>
      <div className="search1-try-searching-the-item">
        <p className="try-searching-the">Try searching the item with</p>
        <p className="a-different-keyword">a different keyword.</p>
      </div>
      <div className="header-div4">
        <img
          className="washaholic-logo-icon4"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div4">
          <div className="home-div14"  onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about-us-div4" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div4" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div4" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div4" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div4">Washaholic</div>
        <div
          className="header-login-button-div4"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div4">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Search1;
