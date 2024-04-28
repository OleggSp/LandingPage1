import "./footer.scss";
import Logo from "./../../images/Logo.svg";
import apple from "./../../images/apple.svg";
import google from "./../../images/google.svg";
import footer_first from "./../../images/footer_first.svg";
import footer_second from "./../../images/footer_second.svg";
import footer_third from "./../../images/footer_third.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__first">
          <img src={Logo} alt="logo" className="footer__logo" />
          <p className="footer__text">
            Maximize your investment in the capital market world with the
            convenience and various features provided by Tradiant.
          </p>
          <p className="footer__sub">Unduh Aplikasi</p>
          <div className="footer__group">
            <button className="footer__appstore">
              <img src={apple} alt="apple_icon" />
              <p className="footer__appstore__text">
                Download on the{" "}
                <span className="footer__appstore__hightext">AppStore</span>
              </p>
            </button>
            <button className="footer__appstore">
              <img src={google} alt="google_icon" />
              <p className="footer__appstore__text">
                GET IT ON{" "}
                <span className="footer__appstore__hightext">Google Play</span>
              </p>
            </button>
          </div>
        </div>
        <div className="footer__middle">
          <ul className="footer__middle__companies footer__list">
            <li className="footer__middle__link footer__title">Companies</li>
            <li className="footer__middle__link">About Us</li>
            <li className="footer__middle__link">Journey</li>
            <li className="footer__middle__link">Blog</li>
            <li className="footer__middle__link">Contact</li>
            <li className="footer__middle__link">Help</li>
          </ul>
          <ul className="footer__middle__resources footer__list">
            <li className="footer__middle__link footer__title">Resources</li>
            <li className="footer__middle__link">About Us</li>
            <li className="footer__middle__link">Journey</li>
            <li className="footer__middle__link">Blog</li>
            <li className="footer__middle__link">Contact</li>
            <li className="footer__middle__link">Help</li>
          </ul>
          <ul className="footer__middle__help footer__list">
            <li className="footer__middle__link footer__title">Help</li>
            <li className="footer__middle__link">House Rules</li>
            <li className="footer__middle__link">Our Terms</li>
            <li className="footer__middle__link">Privacy & Policy</li>
          </ul>
          <ul className="footer__middle__contact footer__list">
            <li className="footer__middle__link footer__title">Contact Us</li>
            <li className="footer__middle__group">
              <img src={footer_first} alt="img" />
              <span className="footer__midle__item">(480) 555-0103</span>
            </li>
            <li className="footer__middle__group">
              <img src={footer_second} alt="img" />
              <span className="footer__midle__item">
                6391 Elgin St.Celina, Delaware 10299
              </span>
            </li>
            <li className="footer__middle__group">
              <img src={footer_third} alt="img" />
              <span className="footer__midle__item">hub@tradiant.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
