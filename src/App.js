import React, { useState } from "react";
import ButtonComp from "./components/ButtonComp";
import Content from "./components/Content";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("light");
  function handleTheme() {
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <ThemeProvider value={theme}>
      <ButtonComp handleTheme={handleTheme} />
      <Content />
    </ThemeProvider>
  );
}

export default App;
