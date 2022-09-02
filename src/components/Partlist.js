import React from "react";
const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};
export let bodyPart = [];
for (let i = 1; i < total.body; i++) {
  bodyPart.push(`/character/character/body/${i}.png`);
}
export let eyesPart = [];
for (let i = 1; i < total.eyes; i++) {
  eyesPart.push(`/character/character/eyes/${i}.png`);
}
export let hairPart = [];
for (let i = 1; i < total.hair; i++) {
  hairPart.push(`/character/character/hair/${i}.png`);
}

export let mouthsPart = [];
for (let i = 1; i < total.mouth; i++) {
  mouthsPart.push(`/character/character/mouths/${i}.png`);
}

export let eyebrowsPart = [];
for (let i = 1; i < total.eyebrows; i++) {
  eyebrowsPart.push(`/character/character/eyebrows/${i}.png`);
}
export let glassesPart = [];
for (let i = 1; i < total.glasses; i++) {
  glassesPart.push(`/character/character/accessories/glasses/${i}.png`);
}
export let clothing1Part = [];
for (let i = 1; i < total.clothing1; i++) {
  clothing1Part.push(`/character/character/clothes/layer_1/${i}.png`);
}
export let clothing2Part = [];
for (let i = 1; i < total.clothing2; i++) {
  clothing2Part.push(`/character/character/clothes/layer_2/${i}.png`);
}
export let clothing3Part = [];
for (let i = 1; i < total.clothing3; i++) {
  clothing3Part.push(`/character/character/clothes/layer_3/${i}.png`);
}
const Partlist = ({
  handleBody,
  handleEyes,
  handleHair,
  handleGlasses,
  handleMouths,
  handleEyebrows,
  handleClothing1,
  handleClothing2,
  handleClothing3,
  selectBody,
  selectEyes,
  selectHair,
  selectGlasses,
  selectMouth,
  selectEyebrows,
  selectCl1,
  selectCl2,
  selectCl3,
}) => {
  return (
    <div className="part-list">
      <div>
        <h1 className="heading">🍩 Body</h1>
        <div className="item">
          {bodyPart.map((item) => (
            <img
              className={
                selectBody === item ? "selected img--partList" : "img--partList"
              }
              key={item}
              onClick={() => handleBody(item)}
              src={item}
              alt=""
            />
          ))}
        </div>
        <h1 className="heading">💩 Eyes</h1>
        <div className="item">
          {eyesPart.map((item) => (
            <img
              className={
                selectEyes === item ? "selected img--partList" : "img--partList"
              }
              key={item}
              onClick={() => handleEyes(item)}
              src={item}
              alt=""
            />
          ))}
        </div>
        <h1 className="heading">🏈 Hair</h1>
        <div className="item">
          {hairPart.map((item) => (
            <img
              className={
                selectHair === item ? "selected img--partList" : "img--partList"
              }
              key={item}
              onClick={() => handleHair(item)}
              src={item}
              alt=""
            />
          ))}
        </div>
        <h1 className="heading">🍫 Mouth</h1>
        <div className="item">
          {glassesPart.map((item) => (
            <img
              className={
                selectGlasses === item
                  ? "selected img--partList"
                  : "img--partList"
              }
              key={item}
              onClick={() => handleGlasses(item)}
              src={item}
              alt=""
            />
          ))}
        </div>
        <h1 className="heading">🥔 Eyebrows</h1>
        <div className="item">
          {mouthsPart.map((item) => (
            <img
              className={
                selectMouth === item
                  ? "selected img--partList"
                  : "img--partList"
              }
              key={item}
              onClick={() => handleMouths(item)}
              src={item}
              alt=""
            />
          ))}
        </div>
        <h1 className="heading">🧤 Glasses</h1>
        <div className="item">
          {eyebrowsPart.map((item) => (
            <img
              className={
                selectEyebrows === item
                  ? "selected img--partList"
                  : "img--partList"
              }
              key={item}
              onClick={() => handleEyebrows(item)}
              src={item}
              alt=""
            />
          ))}
        </div>
        <h1 className="heading">🐗 Clothing (L1)</h1>
        <div className="item">
          {clothing1Part.map((item) => (
            <img
              className={
                selectCl1 === item ? "selected img--partList" : "img--partList"
              }
              key={item}
              onClick={() => handleClothing1(item)}
              src={item}
              alt=""
            />
          ))}
        </div>
        <h1 className="heading">🐾 Clothing (L2)</h1>
        <div className="item">
          {clothing2Part.map((item) => (
            <img
              className={
                selectCl2 === item ? "selected img--partList" : "img--partList"
              }
              key={item}
              onClick={() => handleClothing2(item)}
              src={item}
              alt=""
            />
          ))}
        </div>
        <h1 className="heading">🌑 Clothing (L3)</h1>
        <div className="item">
          {clothing3Part.map((item) => (
            <img
              className={
                selectCl3 === item ? "selected img--partList" : "img--partList"
              }
              key={item}
              onClick={() => handleClothing3(item)}
              src={item}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partlist;
