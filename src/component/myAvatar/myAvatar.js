import React from "react";
import './myAvatar.css';

export default function MyAvatar() {
  return (
    <img className={"MyAvatar"}
      src={require("@/assets/images/ayaka.png")}
      alt="ayaka" />
  );
}