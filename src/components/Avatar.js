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
      <img src={`${body}`} alt="" />
      <img src={`${eyes}`} alt="" />
      <img src={`${hair}`} alt="" />
      <img src={`${mouth}`} alt="" />
      <img src={`${eyesbrows}`} alt="" />
      <img src={`${glasses}`} alt="" />
      <img src={`${cl1}`} alt="" />
      <img src={`${cl2}`} alt="" />
      <img src={`${cl3}`} alt="" />
      <img src="/character/character/noses/1.png" alt="" />
      <button onClick={randomThings}>Randomize!</button>
    </div>
  );
}

export default Avatar;
