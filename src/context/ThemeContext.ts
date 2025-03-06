import React from 'react';
import ButtonFactory from '../interfaces/ButtonFactory';
import LightThemeFactory from '../factories/LightThemeFactory';

const ThemeContext = React.createContext<ButtonFactory>(LightThemeFactory);

export default ThemeContext;
