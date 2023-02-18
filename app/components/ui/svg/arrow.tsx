import React from "react";

const Arrow = (fill = "blue", h = 10, w = 10) => {
  return (
    <svg viewBox="0 0 5 9" height={h} width={w} fill={fill}>
      <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
    </svg>
  );
};

export default Arrow;
