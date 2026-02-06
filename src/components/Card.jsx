export default function Card({ src, children }) {
  return (
    <div className="col">
      <div className="h-100">
        <img src={src} alt={children} />
        <p>{children}</p>
      </div>
    </div>
  );
}
