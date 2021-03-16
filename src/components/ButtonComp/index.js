import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import "./style.scss";

function ButtonComp(props) {
  const theme = useContext(ThemeContext);
  return (
    <button className={theme} onClick={() => props.handleTheme()}>
      Cambiar tema
    </button>
  );
}

export default ButtonComp;
