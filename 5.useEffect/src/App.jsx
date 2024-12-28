import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState(
    "Adınızı buton ile yazabilirsiniz."
  );
  const [lastName, setLastName] = useState(
    "Soyadınızı buton ile yazabilirsiniz."
  );

  useEffect(() => {
    console.log("Her zaman çalışır.");
  });

  useEffect(() => {
    console.log("Sadece ilk render edildiğinde çalışır..");
    // Veritabanından ürünleri getir ve listele
  }, []);

  useEffect(() => {
    console.log(
      "İlk render edildiğinde ve firstName state değeri değiştiğinde çalışır."
    );
  }, [firstName]);

  useEffect(() => {
    console.log(
      "İlk render edildiğinde ve lastName state değeri değiştiğinde çalışır."
    );
  }, [lastName]);

  useEffect(() => {
    console.log(
      "İlk render edildiğinde ve firstName veya lastName state değerlerinde değişiklik olduğunda çalışır."
    );
  }, [firstName, lastName]);

  return (
    <div>
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <div>
        <button onClick={() => setFirstName("Lavinya Güneş")}>
          Adı Değiştir
        </button>
        <br />
        <br />
        <div>
          <button onClick={() => setLastName("Tarım")}>Soyadı Değiştir</button>
        </div>
      </div>
    </div>
  );
}

export default App;
