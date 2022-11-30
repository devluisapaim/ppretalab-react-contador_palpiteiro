import { useState } from "react";
import Palpiteiro from "../Palpiteiro/Palpiteiro";
import styles from "./Contador.module.css";

const ContadorPalpiteiro = () => {
  const [numero, setNumero] = useState(0);

  const somarUm = () => {
    setNumero((valor) => valor + 1);
  };

  const subtrairUm = () => {
    setNumero((valor) => valor - 1);
  };

  return (
    <>
      <button className={styles.botao} onClick={somarUm}>+</button>
      <p>{numero}</p>
      <button className={styles.botao} onClick={subtrairUm}>-</button>
      <br />
      <Palpiteiro valor={numero}/>
    </>
  );
};

export default ContadorPalpiteiro;
