import styles from "./ButtonContainer.module.css";
export default function ButtonContainer({ onButtonClicked }) {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.btnContainer}>
      {buttonNames.map((btns) => (
        <button className={styles.button} onClick={() => onButtonClicked(btns)}>
          {btns}
        </button>
      ))}
    </div>
  );
}
