import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {

  const handleEvent = () => {
    window.location.reload();
  }

  return (
    <header>
      <h1>
        <button style={{ backgroundColor: "#68D2E8", border: "0px", cursor: "pointer" }} onClick={handleEvent}><h1><HighlightIcon />KeepApp</h1></button>
      </h1>
    </header>
  );
}

export default Header;
