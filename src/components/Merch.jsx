import "../css/merch.css";

import DigitalComicsLogo from "../assets/img/buy-comics-digital-comics.png";
import MerchLogo from "../assets/img/buy-comics-merchandise.png"
import SubscriptionhLogo from "../assets/img/buy-comics-subscriptions.png"
import LocatorLogo from "../assets/img/buy-comics-shop-locator.png"
import VisaLogo from "../assets/img/buy-dc-power-visa.svg"

export default function Merch() {
  return (
    <main id="merch">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="merch-item">
          <img src={DigitalComicsLogo} alt="Digital" />
          <p>DIGITAL COMICS</p>
        </div>
        <div className="merch-item">
          <img src={MerchLogo} alt="Digital" />
          <p>DC MERCHANDISE</p>
        </div>
        <div className="merch-item">
          <img src={SubscriptionhLogo} alt="Digital" />
          <p>SUBSCRIPTION</p>
        </div>
        <div className="merch-item">
          <img src={LocatorLogo} alt="Digital" />
          <p>COMIC SHOP LOCATOR</p>
        </div>
        <div className="merch-item">
          <img src={VisaLogo} alt="Digital" />
          <p>DC POWER VISA</p>
        </div>
      </div>
    </main>
  );
}
