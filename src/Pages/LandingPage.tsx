import "./LandingPage.scss";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

import card_first from "./../images/card_first.svg";
import card_second from "./../images/card_second.svg";
import card_third from "./../images/card_third.svg";

import container5 from "./../images/container5.svg";
import container4 from "./../images/container4.svg";
import container1 from "./../images/container1.svg";
import container2 from "./../images/container2.svg";
import sponsor1 from "./../images/sponsor1.svg";
import sponsor2 from "./../images/sponsor2.svg";

function LandingPage() {
  return (
    <div className="LandingPage">
      <Header />
      <div className="LandingPage__container1">
        <div className="LandingPage__container1_info">
          <div className="LandingPage__container1_smr">Smart Investation</div>
          <div className="LandingPage__container1_title">
            Invest Your Money With Us <br />
            and <span className="blue_txt">Get Amazing Profit</span>
          </div>
          <div className="LandingPage__container1_subtitle">
            Maximize your investment in the capital market world with the <br />
            convenience and various features provided by Tradiant.
          </div>
          <div className="LandingPage__container1_buttons">
            <button className="LandingPage__container1__btn blue">
              Get Started
            </button>
            <button className="LandingPage__container1__btn white">
              See How it Works
            </button>
          </div>
          <div className="LandingPage__container1__footer">
            <div className="LandingPage__container1__footer_txt">
              Registered and supervised by:
            </div>
            <div className="LandingPage__container1__footer_images">
              <img src={sponsor1} alt="sponsor1" className="sponsor1" />
              <img src={sponsor2} alt="sponsor2" className="sponsor2" />
            </div>
          </div>
        </div>
        <img src={container1} alt="" className="LandingPage__container1_img" />
      </div>
      <div className="LandingPage__container2">
        <h2 className="LandingPage__container2__title">
          Invest in their stock and be part of the business
        </h2>
        <img src={container2} alt="" className="LandingPage__container2__img" />
      </div>
      <div className="LandingPage__container3">
        <div className="LandingPage__container3__txt">
          <p className="LandingPage__container3__bluetxt">
            Why choose Tradiant ?
          </p>
          <h1 className="LandingPage__container3__title">
            Specially designed for stock market
          </h1>
        </div>
        <div className="LandingPage__container3_colums">
          <div className="LandingPage__container3__colum">
            <img
              src={card_first}
              alt="card_first"
              className="LandingPage__container3__card"
            />
            <div className="LandingPage__container3__info">
              <h2 className="LandingPage__container3_title">Quick Faster</h2>
              <p className="LandingPage__container3__subtitle">
                Information spreads faster with the help of <br />
                the Tradiant community. With Tradiant, you <br />
                will be more updated with the latest
                <br />
                information.
              </p>
            </div>
          </div>
          <div className="LandingPage__container3__colum">
            <img
              src={card_second}
              alt="card_second"
              className="LandingPage__container3__card"
            />
            <div className="LandingPage__container3__info">
              <h2 className="LandingPage__container3_title">
                Manage your wallets
              </h2>
              <p className="LandingPage__container3__subtitle">
                Make your finances easier and safer with
                <br />
                Tradiant and make every transaction more
                <br />
                secure and quality.
              </p>
            </div>
          </div>
          <div className="LandingPage__container3_colum">
            <img
              src={card_third}
              alt="card_third"
              className="LandingPage__container3__card"
            />
            <div className="LandingPage__container3__info">
              <h2 className="LandingPage__container3_title">
                Update Your Statictics
              </h2>
              <p className="LandingPage__container3__subtitle">
                Update your general stats faster with direct
                <br />
                notifications from Tradiant and make your
                <br />
                next transaction more quality.
                <br />
                information..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="LandingPage__container4">
        <img
          src={container4}
          alt="human"
          className="LandingPage__container4_img"
        />
        <div className="LandingPage__container4_info">
          <p className="LandingPage__container4__bluetxt">Our Feature</p>
          <h2 className="LandingPage__container4__title">
            Receive update market
            <br />
            quickly everytime
          </h2>
          <p className="LandingPage__container4__subtitle">
            Equipped with comprehensive analysis tools
            <br />
            and Artificial Intelligent, it makes it easier and gives you a
            profitable
            <br />
            experience in the form of market updates quickly everytime, so
            <br />
            it is not too late to make the best investment decisions.
          </p>
          <button className="LandingPage__container4__btn">Get Started</button>
        </div>
      </div>
      <div className="LandingPage__container5">
        <div className="LandingPage__container5_info">
          <p className="LandingPage__container5__bluetxt">Our Feature</p>
          <h2 className="LandingPage__container5__title">
            Receive update market
            <br />
            quickly everytime
          </h2>
          <p className="LandingPage__container5__subtitle">
            Using the Tradiant Application is an easy way to invest
            <br />
            and benefit, equipped with comprehensive analysis tools
            <br />
            and Artificial Intelligent (AI) that helps automation in
            <br />
            monitoring and transactions.
          </p>
          <button className="LandingPage__container5__btn">Get Started</button>
        </div>
        <img src={container5} alt="" className="LandingPage__container5_img" />
      </div>
      <div className="LandingPage__container6">
        <div className="LandingPage__container6__form">
          <div className="LandingPage__container6__info">
            <p className="LandingPage__container6__bluetxt">Our Newsletter</p>
            <h2 className="LandingPage__container6__title">
              Stay updated with our
              <br />
              weekly newsletter
            </h2>
            <p className="LandingPage__container6__subtitle">
              a collection of the hottest stock market news sent every week to{" "}
              <br />
              your email
            </p>
          </div>
          <div className="LandingPage__container6__SignUp">
            <h4 className="LandingPage__container6__title2">
              Signup For Newsletter
            </h4>
            <div className="LandingPage__container6__lines">
              <input
                type="email"
                placeholder="Email address"
                className="LandingPage__container6__line"
              />
              <input
                type="password"
                placeholder="password"
                className="LandingPage__container6__line"
              />
            </div>
            <button className="LandingPage__container6__btn">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default LandingPage;
