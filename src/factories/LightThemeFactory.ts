import ButtonFactory from "../interfaces/ButtonFactory";
import LightButton from "../components/Button/LightButton";
import React from "react";

const LightThemeFactory: ButtonFactory = {
  createButton: (label: string, onClick: () => void) => {
    return React.createElement(LightButton, { label, onClick });
  },
};

export default LightThemeFactory;
