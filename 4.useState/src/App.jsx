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
  const [userInfo, setUserInfo] = useState({
    username: "alicantarim",
    password: "11223344",
  });
  const [count, setCount] = useState(0);

  const handleChange = () => {
    // debugger;  -> Debug yapar. console dan inspect'i açarak Source üzerinden takip edebilirsin.
    setFirstName("Lavinya Güneş");
  };

  const arttir = () => setCount(count + 1);

  const azalt = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  console.log("component render edildi.");

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
          <div>
            {"username: "}
            {userInfo.username}
          </div>
          <div>
            {"password: "}
            {userInfo.password}
          </div>
        </div>
        <br />
        <div>{count}</div>
        <br />
        <div>
          <button onClick={handleChange}>İsmi Değiştir</button>
        </div>
        <br />
        <div>
          <button onClick={arttir}>Arttır</button>
        </div>
        <br />
        <div>
          <button onClick={azalt}>Azalt</button>
        </div>
      </div>
    </>
  );
}

export default App;
