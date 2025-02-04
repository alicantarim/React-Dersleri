import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // Buraya Javascript Kodları yazılır.
  let a = 34;
  const university =
    "Uluslararası Kıbrıs Üniversitesi - Elektrik Elektronik Mühendisliği";
  let v1 = 70;
  let v2 = 85;

  let sonuc = true;

  let skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "iOS",
    "SwiftUIKit",
    "Java - SpringBoot",
  ];

  return (
    // HTML Kodları yqzılır.
    // Eğer JS kodları yazacaksan { } içerisinde yazılır. Jsx: { }

    <div>
      <p>Alican Tarım</p>
      <p>Software Engineer | iOS Developer</p>
      <p>Yaşım: {a} dür.</p>
      <p>{university} mezunuyum.</p>
      <p>Number Test: {(v1 + v2) / 2}</p>

      {sonuc ? <p>Ehliyet alma hakkınız var</p> : <p>Ehliyet alamazsınız.</p>}

      <p>SOFT SKILLS</p>
      {skills.map((skill, index) => (
        <div
          style={{
            backgroundColor: "orange",
            border: "1px solid black",
          }}
          key={index}
        >
          {skill}
        </div>
      ))}
    </div>
  );
}

// Komponenti export ederek dışarıda kullanabiliriz. Kullanacağımız yerde komponenti import etmeliyiz.
export default App;
