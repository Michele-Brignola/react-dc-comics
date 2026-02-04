import LogoDc from "../assets/img/dc-logo.png";
import "../css/header.css";

export default function Header() {
  return (
    <header id="header" className="container d-flex justify-content-between">
      <img className="py-3" src={LogoDc} alt="Logo"></img>
      <nav className="d-flex align-items-center">
        <a href="#">Characters</a>
        <a href="#">Comics</a>
        <a href="#">Movies</a>
        <a href="#">TV</a>
        <a href="#">Games</a>
        <a href="#">Collectables</a>
        <a href="#">Videos</a>
        <a href="#">Fans</a>
        <a href="#">News</a>
        <a href="#">Shop</a>
      </nav>
    </header>
  );
}
