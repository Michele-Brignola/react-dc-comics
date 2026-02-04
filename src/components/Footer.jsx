import "../css/footer.css";

import DCBigLogo from "../assets/img/dc-logo-bg.png";
import FacebookLogo from "../assets/img/footer-facebook.png";
import TwitterLogo from "../assets/img/footer-twitter.png";
import YoutubeLogo from "../assets/img/footer-youtube.png";
import PinterestLogo from "../assets/img/footer-pinterest.png";
import MapLogo from "../assets/img/footer-periscope.png";

export default function Footer() {
  return (
    <footer id="footer">
      <section id="links">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <div>
              <h1>DC COMICS</h1>
              <ul>
                <li>
                  <a href="#">Characters</a>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <img src={DCBigLogo} alt="" />
        </div>
      </section>

      <section id="socials">
        <div className="container d-flex justify-content-between align-items-center">
          <button type="button">SIGH-UP NOW!</button>
          <div className="d-flex align-items-center">
            <h1>FOLLOW US</h1>
            <a href="#">
              <img src={FacebookLogo} alt="Facebook" />
            </a>
            <a href="#">
              <img src={TwitterLogo} alt="Twitter" />
            </a>
            <a href="#">
              <img src={YoutubeLogo} alt="Youtube" />
            </a>
            <a href="#">
              <img src={PinterestLogo} alt="Pinterest" />
            </a>
            <a href="#">
              <img src={MapLogo} alt="Map" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
