import "../css/card.css";

export default function Card({ src, children }) {
  return (
    <div className="col">
      <div>
        <img src={src} alt={children} />
      </div>
      <p>{children}</p>
    </div>
  );
}
