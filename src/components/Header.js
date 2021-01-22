import React from "react";

import HighlightIcon from "@material-ui/icons/Highlight";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <HighlightIcon />
        Keeper
      </h1>
    </header>
  );
};

export default Header;
