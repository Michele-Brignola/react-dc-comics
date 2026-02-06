import "../css/main.css";

import Card from "./Card";

export default function Main({ comicsData }) {
  return (
    <main id="main">
      <div id="banner"></div>
      <div className="container">
        <div className="row row-cols-6 g-3">
          {comicsData.map((data) => (
            <Card key={data.id} src={data.thumb}>
              {data.title}
            </Card>
          ))}
        </div>
      </div>
      <div className="text-center p-3">
        <button type="button">LOAD MORE</button>
      </div>
    </main>
  );
}
