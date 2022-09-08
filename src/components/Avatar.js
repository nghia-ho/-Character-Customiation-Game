import React from "react";

function Avatar({
  body,
  eyes,
  hair,
  mouth,
  eyesbrows,
  glasses,
  cl1,
  cl2,
  cl3,
  randomThings,
}) {
  return (
    <div className="avatar">
      <img src="/character/character/body/1.png" alt="" />
      <img src={`/character/character/body/${body}.png`} alt="" />
      <img src={`/character/character/eyes/${eyes}.png`} alt="" />
      <img src={`/character/character/hair/${hair}.png`} alt="" />
      <img src={`/character/character/mouths/${mouth}.png`} alt="" />
      <img src={`/character/character/eyebrows/${eyesbrows}.png`} alt="" />
      <img
        src={`/character/character/accessories/glasses/${glasses}.png`}
        alt=""
      />
      <img src={`/character/character/clothes/layer_1/${cl1}.png`} alt="" />
      <img src={`/character/character/clothes/layer_2/${cl2}.png`} alt="" />
      <img src={`/character/character/clothes/layer_3/${cl3}.png`} alt="" />
      <img src="/character/character/noses/1.png" alt="" />
      <button onClick={randomThings}>Randomize!</button>
    </div>
  );
}

export default Avatar;
