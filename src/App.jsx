import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Componetns/ButtonContainer";
import Display from "./Componetns/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const clickChanges = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result=eval(calVal);
      setCalVal(result);
    } else {
      let newValue = calVal + buttonText;
      setCalVal(newValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClicked={clickChanges} />
    </div>
  );
}

export default App;
