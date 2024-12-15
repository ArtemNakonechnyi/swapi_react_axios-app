import React from "react";

function Header({ setEntityType }) {
  return (
    <div className="header">
      <div onClick={() => setEntityType("people")} className="button">
        People
      </div>
      <div onClick={() => setEntityType("planets")} className="button">
        Planets
      </div>
      <div onClick={() => setEntityType("starships")} className="button">
        Starships
      </div>
    </div>
  );
}

export default Header;
