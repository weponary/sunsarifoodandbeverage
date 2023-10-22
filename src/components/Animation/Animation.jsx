import logo from "../../assets/img/logo.jpg";
export const AnimationLoader = () => {
  return (
    <div className="animationContainer">
      <div className="animationLogoContainer">
        <img src={logo} alt="logo" className="animationLogo" />
      </div>
    </div>
  );
};
