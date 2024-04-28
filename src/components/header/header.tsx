import "./header.scss";
import Logo from "./../../images/Logo.svg";
const header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <img src={Logo} alt="" className="header__logo" />

        <div className="header__links">
          <a href="#" className="header__link">
            About us
          </a>
          <a href="#" className="header__link ">
            Why Us?
          </a>
          <a href="#" className="header__link">
            Blog
          </a>
        </div>
      </div>

      <div className="header__buttons">
        <a href="#" className="sign up">
          Sign up
        </a>
        <a href="#" className="sign in">
          Sign in
        </a>
      </div>
    </header>
  );
};
export default header;
