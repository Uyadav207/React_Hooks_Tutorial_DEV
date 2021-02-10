import "./styles.css";
import React from "react";
import Children from "./Children";

const themes = {
  light: {
    foreground: "#000",
    background: "#fff"
  },
  dark: {
    foreground: "#fff",
    background: "#222"
  }
};

export const ThemeContext = React.createContext(themes.light);

export default function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Children />
    </ThemeContext.Provider>
  );
}
