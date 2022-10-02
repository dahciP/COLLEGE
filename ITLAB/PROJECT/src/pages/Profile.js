import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const onProfileGroup1ViewDetailsTextClick = useCallback(() => {
    navigate("/history2");
  }, [navigate]);

  const onProfileGroup1ViewDetailsText1Click = useCallback(() => {
    navigate("/history2");
  }, [navigate]);

  const onProfileGroup1ViewDetailsText2Click = useCallback(() => {
    navigate("/history2");
  }, [navigate]);

  const onProfileViewHistoryTextClick = useCallback(() => {
    navigate("/history2");
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
    <div className="profile-div7">
      <div className="profile-group2-div">
        <div className="profile-group2-rectangle-18-div" />
        <img
          className="profile-group2-ellipse-17-icon"
          alt=""
          src="../profile-group2-ellipse-17.svg"
        />
        <div className="profile-group2-areous-ahmad-div">Areous Ahmad</div>
        <a
          className="profile-group2-areousgoldvill"
          href="mailto:areous@goldville.org"
          target="_blank"
        >
          areous@goldville.org
        </a>
        <div className="profile-group2-edit-info-div">edit info</div>
        <div className="profile-group2-line-6-div" />
        <div className="profile-group2-road-d3-house-2">
          Road D3 House 23, Pen Slack VIllage Lokogoma abuja
        </div>
      </div>
      <div className="profile-previous-orders-div">Previous Orders</div>
      <img
        className="profile-image-4-icon"
        alt=""
        src="../profile-image-4@2x.png"
      />
      <div className="profile-rectangle-19-div" />
      <div className="profile-group1-div">
        <div className="profile-group1-rectangle-10-div" />
        <img
          className="profile-group1-clothes-rail-wi-icon"
          alt=""
          src="../profile-group1-clothesrailwithtshirts-232147669592-1@2x.png"
        />
        <div className="profile-group1-clothes-cleanin-div">
          Clothes Cleaning
        </div>
        <div className="profile-group1-water-wash-and">
          water wash and drying
        </div>
        <div className="profile-group1-rectangle-11-div" />
        <div className="profile-group1-rectangle-17-div" />
        <div className="profile-group1-rectangle-16-div" />
        <div
          className="profile-group1-view-details-div"
          onClick={onProfileGroup1ViewDetailsTextClick}
        >
          View details
        </div>
        <div className="profile-group1-rectangle-12-div" />
        <img
          className="profile-group1-clothes-rail-wi-icon1"
          alt=""
          src="../profile-group1-clothesrailwithtshirts-232147669592-2@2x.png"
        />
        <div className="profile-group1-clothes-ironing-div">
          Clothes Ironing
        </div>
        <div className="profile-group1-ironing-div">ironing</div>
        <div className="profile-group1-rectangle-13-div" />
        <div className="profile-group1-rectangle-14-div" />
        <img
          className="profile-group1-clothes-rail-wi-icon2"
          alt=""
          src="../profile-group1-clothesrailwithtshirts-232147669592-1@2x.png"
        />
        <div className="profile-group1-shoes-cleaning-div">Shoes Cleaning</div>
        <div className="profile-group1-shoes-wash-and">
          shoes wash and drying
        </div>
        <div className="profile-group1-rectangle-15-div" />
        <img
          className="profile-group1-download-1-icon"
          alt=""
          src="../profile-group1-download-1@2x.png"
        />
        <img
          className="profile-group1-clothes-rail-wi-icon2"
          alt=""
          src="../profile-group1-download-1-1@2x.png"
        />
        <div
          className="profile-group1-view-details-div1"
          onClick={onProfileGroup1ViewDetailsText1Click}
        >
          View details
        </div>
        <div
          className="profile-group1-view-details-div2"
          onClick={onProfileGroup1ViewDetailsText2Click}
        >
          View details
        </div>
      </div>
      <div
        className="profile-view-history-div"
        onClick={onProfileViewHistoryTextClick}
      >
        View history
      </div>
      <div className="header-div7">
        <img
          className="washaholic-logo-icon7"
          alt=""
          src="../washaholic-logo@2x.png"
        />
        <div className="navbar-frame-div7">
          <div className="home-div7">Home</div>
          <div className="about-us-div7" onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className="about-us-div7" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about-us-div7" onClick={onSubscriptionsTextClick}>
            Subscriptions
          </div>
          <div className="about-us-div7" onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
        <div className="washaholic-div7">Washaholic</div>
        <div
          className="header-login-button-div7"
          onClick={onHeaderLoginButtonContainerClick}
        >
          <div className="login-div7">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
