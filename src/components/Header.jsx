import "../css/header.css";

import Logo from "./Logo";

export default function Header() {
  const HeaderLinks = [
    {
      id: 1,
      href: "#",
      text: "CHARACTERS",
    },
    {
      id: 2,
      href: "#",
      text: "COMICS",
    },
    {
      id: 3,
      href: "#",
      text: "MOVIES",
    },
    {
      id: 4,
      href: "#",
      text: "TV",
    },
    {
      id: 5,
      href: "#",
      text: "GAMES",
    },
    {
      id: 6,
      href: "#",
      text: "COLLECTABLES",
    },
    {
      id: 7,
      href: "#",
      text: "VIDEOS",
    },
    {
      id: 8,
      href: "#",
      text: "FANS",
    },
    {
      id: 9,
      href: "#",
      text: "NEWS",
    },
    {
      id: 10,
      href: "#",
      text: "SHOP",
    },
  ];

  return (
    <header id="header">
      <div className="container d-flex justify-content-between">
        <Logo />
        <nav className="d-flex align-items-center">
          {HeaderLinks.map((info) => (
            <a href={info.href} key={info.id}>
              {info.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
