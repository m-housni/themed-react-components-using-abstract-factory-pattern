import React from "react";
import ThemeContext from "./context/ThemeContext";
import DarkThemeFactory from "./factories/DarkThemeFactory";
import LightThemeFactory from "./factories/LightThemeFactory";
import Controls from "./components/Controls";

const App: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);
  const theme = isDark ? DarkThemeFactory : LightThemeFactory;

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={`min-h-screen p-5 ${
          isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <button
          onClick={() => setIsDark(!isDark)}
          className={`${
            isDark
              ? "bg-black text-white px-4 py-2 rounded float-right"
              : "bg-white text-black border border-gray-300 px-4 py-2 rounded float-right"
          }`}
        >
          {isDark ? "Dark" : "Light"}
        </button>
        <Controls />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
