import React, { useState, useEffect } from "react";
import Avatar from "./components/Avatar";
import Partlist from "./components/Partlist";
import {
  bodyPart,
  eyesPart,
  hairPart,
  mouthsPart,
  eyebrowsPart,
  glassesPart,
  clothing1Part,
  clothing2Part,
  clothing3Part,
} from "./components/Partlist";
function App() {
  const [body, setBody] = useState("");
  const [eyes, setEyes] = useState("");
  const [hair, setHair] = useState("");
  const [mouth, setMouth] = useState("");
  const [eyesbrows, setEyesbrows] = useState("");
  const [glasses, setGlasses] = useState("");
  const [cl1, setCl1] = useState("");
  const [cl2, setCl2] = useState("");
  const [cl3, setCl3] = useState("");

  useEffect(() => randomThings(), []);
  const handleBody = (i) => {
    setBody(i);
  };
  const handleEyes = (i) => {
    setEyes(i);
  };

  const handleHair = (i) => {
    setHair(i);
  };
  const handleGlasses = (i) => {
    setGlasses(i);
  };
  const handleMouths = (i) => {
    setMouth(i);
  };
  const handleEyebrows = (i) => {
    setEyesbrows(i);
  };
  const handleClothing1 = (i) => {
    setCl1(i);
  };
  const handleClothing2 = (i) => {
    setCl2(i);
  };
  const handleClothing3 = (i) => {
    setCl3(i);
  };
  function randomThings() {
    setBody(bodyPart[Math.floor(Math.random() * bodyPart.length)]);
    setEyes(eyesPart[Math.floor(Math.random() * eyesPart.length)]);
    setHair(hairPart[Math.floor(Math.random() * hairPart.length)]);
    setMouth(mouthsPart[Math.floor(Math.random() * mouthsPart.length)]);
    setEyesbrows(eyebrowsPart[Math.floor(Math.random() * eyebrowsPart.length)]);
    setGlasses(glassesPart[Math.floor(Math.random() * glassesPart.length)]);
    setCl1(clothing1Part[Math.floor(Math.random() * clothing1Part.length)]);
    setCl2(clothing2Part[Math.floor(Math.random() * clothing2Part.length)]);
    setCl3(clothing3Part[Math.floor(Math.random() * clothing3Part.length)]);
  }
  return (
    <div className="container">
      <nav className="nav">
        <h1>CHARACTER</h1>
        <h2>🎄CUSTOMIZATION🎄</h2>
      </nav>
      <div className="main">
        <Avatar
          body={body}
          eyes={eyes}
          hair={hair}
          mouth={mouth}
          eyesbrows={eyesbrows}
          glasses={glasses}
          cl1={cl1}
          cl2={cl2}
          cl3={cl3}
          randomThings={randomThings}
        />
        <Partlist
          handleBody={handleBody}
          handleEyes={handleEyes}
          handleHair={handleHair}
          handleGlasses={handleGlasses}
          handleMouths={handleMouths}
          handleEyebrows={handleEyebrows}
          handleClothing1={handleClothing1}
          handleClothing2={handleClothing2}
          handleClothing3={handleClothing3}
          selectBody={body}
          selectEyes={eyes}
          selectHair={hair}
          selectGlasses={glasses}
          selectMouth={mouth}
          selectEyebrows={eyesbrows}
          selectCl1={cl1}
          selectCl2={cl2}
          selectCl3={cl3}
        />
      </div>
    </div>
  );
}

export default App;
