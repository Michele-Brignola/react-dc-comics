import LogoDc from "../assets/img/dc-logo.png";
import "../css/header.css";

export default function Header() {
  return (
    <header id="header">
      <div className="container d-flex justify-content-between">
        <img className="py-3" src={LogoDc} alt="Logo"></img>
        <nav className="d-flex align-items-center">
          <a href="#">CHARACTERS</a>
          <a href="#">COMICS</a>
          <a href="#">MOVIES</a>
          <a href="#">TV</a>
          <a href="#">GAMES</a>
          <a href="#">COLLECTABLES</a>
          <a href="#">VIDEOS</a>
          <a href="#">FANS</a>
          <a href="#">NEWS</a>
          <a href="#">SHOP</a>
        </nav>
      </div>
    </header>
  );
}
