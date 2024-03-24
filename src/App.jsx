import "./App.css";
import Data from "./assets/data.json";

import logo from "./assets/logo.svg";

function App() {
  const Programmation = Data.map((elem) => {
    return (
      <div className="container block">
        <h1>{elem.time}</h1>
        <img src={elem.image} alt="" />
        <div>
          <h2>{elem.title}</h2>
          <p>{elem.type}</p>
          <div className="directTimeBlock">
            <h3>{elem.duration}</h3>
            <h4>{elem.direct === true ? "Direct" : ""} </h4>
            <h4>
              <h4>{elem.isUnseen === true ? "Inédit" : ""} </h4>{" "}
            </h4>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <header>
        <img src={logo} alt="" />
      </header>
      ;{Programmation}
    </>
  );
}

export default App;
