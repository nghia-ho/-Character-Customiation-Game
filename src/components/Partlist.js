import React from "react";
import Part from "./Part";
export const total = {
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
        <Part
          total={total.body}
          path="body"
          selected={selectBody}
          title="🍩 Body"
          handleClick={handleBody}
        />
        <Part
          total={total.eyes}
          path="eyes"
          selected={selectEyes}
          title="💩 Eyes"
          handleClick={handleEyes}
        />
        <Part
          total={total.hair}
          path="hair"
          selected={selectHair}
          title="🏈 Hair"
          handleClick={handleHair}
        />
        <Part
          total={total.mouth}
          path="mouths"
          selected={selectMouth}
          title="🍫 Mouth"
          handleClick={handleMouths}
        />
        <Part
          total={total.eyebrows}
          path="eyebrows"
          selected={selectEyebrows}
          title="🥔 Eyebrows"
          handleClick={handleEyebrows}
        />
        <Part
          total={total.glasses}
          path="accessories/glasses"
          selected={selectGlasses}
          title="🧤 Glasses"
          handleClick={handleGlasses}
        />
        <Part
          total={total.clothing1}
          path="clothes/layer_1"
          selected={selectCl1}
          title="🐾 Clothing (L1)"
          handleClick={handleClothing1}
        />
        <Part
          total={total.clothing2}
          path="clothes/layer_2"
          selected={selectCl2}
          title="🐾 Clothing (L2)"
          handleClick={handleClothing2}
        />
        <Part
          total={total.clothing3}
          path="clothes/layer_3"
          selected={selectCl3}
          title="🌑 Clothing (L3)"
          handleClick={handleClothing3}
        />
      </div>
    </div>
  );
};

export default Partlist;
