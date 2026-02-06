export default function LinkMenu({ titolo, items }) {
  return (
    <>
      <h1>{titolo}</h1>
      <ul>
        {items.map(({id, href, text}) => (
          <li key={id}>
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </>
  );
}