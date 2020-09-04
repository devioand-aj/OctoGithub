import React from "react";

const Avatar = ({ backgroundColor = "#fff", size = 100, image }) => {
  return (
    <div
      style={{
        backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: `${size + 10}px`,
        height: `${size + 10}px`,
        borderRadius: (size + 10) / 2,
      }}
    >
      <img
        src={image}
        alt="avatar.."
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: size / 2,
        }}
      />
    </div>
  );
};

export default Avatar;
