import ButtonFactory from "../interfaces/ButtonFactory";
import DarkButton from "../components/Button/DarkButton";
import React from "react";

const DarkThemeFactory: ButtonFactory = {
  createButton: (label, onClick) => {
    return React.createElement(DarkButton, { label, onClick });
  },
};

export default DarkThemeFactory;
