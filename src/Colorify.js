import React, { useContext, useState } from "react";
import { ThemeContext } from "./App";

export default function Colorify() {
  const theme = useContext(ThemeContext);
  // const [state, setState] = useState(theme.light);
  // const handleClick = () => {
  //   setState(...state,theme.dark);
  // };
  return (
    <button
      style={{
        backgroundColor: theme.background,
        color: theme.dark,
        height: 100,
        margin: 100
      }}
      // onClick={handleClick}
    >
      Hey! me a button and I am gonna blackout!
    </button>
  );
}

// what we have
// 1. background: black
// 2. foreground: white
