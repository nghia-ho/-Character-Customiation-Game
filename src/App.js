import React, { useState, useEffect } from "react";
import Avatar from "./components/Avatar";
import Partlist from "./components/Partlist";
import { total } from "./components/Partlist";
function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [hair, setHair] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [eyesbrows, setEyesbrows] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [cl1, setCl1] = useState(0);
  const [cl2, setCl2] = useState(0);
  const [cl3, setCl3] = useState(0);

  useEffect(() => randomThings(), []);

  function randomThings() {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setEyesbrows(Math.floor(Math.random() * total.eyebrows));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setCl1(Math.floor(Math.random() * total.clothing1));
    setCl2(Math.floor(Math.random() * total.clothing2));
    setCl3(Math.floor(Math.random() * total.clothing3));
    console.log(total.body);
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
          handleBody={setBody}
          handleEyes={setEyes}
          handleHair={setHair}
          handleGlasses={setMouth}
          handleMouths={setEyesbrows}
          handleEyebrows={setGlasses}
          handleClothing1={setCl1}
          handleClothing2={setCl2}
          handleClothing3={setCl3}
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
