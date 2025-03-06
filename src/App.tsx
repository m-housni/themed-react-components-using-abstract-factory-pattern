import React from "react";
import ThemeContext from "./context/ThemeContext";
import DarkThemeFactory from "./factories/DarkThemeFactory";
import LightThemeFactory from "./factories/LightThemeFactory";
import ThemedButton from "./components/Button/ThemedButton";



const App: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);
  return (
    <ThemeContext.Provider value={isDark ? DarkThemeFactory : LightThemeFactory}>
      <div className={`min-h-screen p-5 ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
        <button onClick={() => setIsDark(!isDark)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
          Toggle Theme
        </button>
        <ThemedButton label="Btn 1" onClick={() => alert("Button 1 Clicked")} />
        <ThemedButton label="Btn 2" onClick={() => alert("Button 2 Clicked")} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

