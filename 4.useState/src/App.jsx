import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("Alican");
  const [lastName, setLastNAME] = useState("Tarım");
  const [names, setNames] = useState([
    "Kübra",
    "İbrahim",
    "Nevriye",
    "Canercan",
    "Ahmet",
  ]);

  const handleChange = () => {
    // debugger;  -> Debug yapar. console dan inspect'i açarak Source üzerinden takip edebilirsin.
    setFirstName("Lavinya Güneş");
  };

  return (
    <>
      <div>
        <div>{firstName + " " + lastName}</div>
        <br />
        <div>
          {names.map((name, index) => (
            <div key={index}> {name}</div>
          ))}
        </div>
        <br />
        <div>
          <button onClick={handleChange}>İsmi Değiştir</button>
        </div>
      </div>
    </>
  );
}

export default App;
