import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./App";

export default function Colorify() {
  const theme = useContext(ThemeContext);
  const [mode, setMode] = useState(theme.light);
  const handleChange = () => {
    setMode(theme.dark);
  };
  return (
    <button
      style={{
        backgroundColor: mode.background,
        color: mode.foreground,
        height: 100,
        margin: 100
      }}
      onClick={handleChange}
    >
      Hey! me a button and I am gonna blackout!
    </button>
  );
}
