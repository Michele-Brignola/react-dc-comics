import "../css/main.css";

import ComicsData from "../data/comics";

export default function Main() {
  return (
    <main id="main">
      <div id="banner" />
      <div className="container">
        <div className="row row-cols-6 g-3">
          {ComicsData.map((data) => (
            <div key={data.id} className="col">
              <div className="h-100">
                <img src={data.thumb} alt={data.title} />
                <p>{data.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center p-3">
        <button type="button">LOAD MORE</button>
      </div>
    </main>
  );
}
