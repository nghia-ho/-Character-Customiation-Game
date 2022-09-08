import React from "react";

function Part({ total, path, selected, title, handleClick }) {
  let part1 = [];
  for (let i = 1; i < total; i++) {
    part1.push(`/character/character/${path}/${i}.png`);
  }
  return (
    <>
      <h1 className="heading">{title}</h1>
      <div className="item">
        {part1.map((item) => (
          <img
            className={
              selected ===
              (item.length > 40
                ? item.split("/")[5].slice(0, -4)
                : item.split("/")[4].slice(0, -4))
                ? "selected img--partList"
                : "img--partList"
            }
            key={item}
            onClick={() =>
              handleClick(
                item.length > 40
                  ? item.split("/")[5].slice(0, -4)
                  : item.split("/")[4].slice(0, -4)
              )
            }
            src={item}
            alt=""
          />
        ))}
      </div>
    </>
  );
}

export default Part;
