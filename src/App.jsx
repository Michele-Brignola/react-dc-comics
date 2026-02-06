import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Merch from "./components/Merch";
import Footer from "./components/Footer";

import comicsData from "./data/comics";

export default function App() {
  return (
    <>
      <Header />
      <Main comicsData={comicsData} />
      <Merch />
      <Footer />
    </>
  );
}
