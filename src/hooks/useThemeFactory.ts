import React from 'react';
import ThemeContext from '../context/ThemeContext';

const useThemeFactory = () => React.useContext(ThemeContext);

export default useThemeFactory;
