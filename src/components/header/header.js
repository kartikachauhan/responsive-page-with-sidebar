import React from "react";
import "./header.css";

export default function Header(props) {
  return (
    <div className="header" style={{zIndex: props.open ? "unset" : "1"}}>
      <div className="profile-icon">K</div>
    </div>
  );
}
