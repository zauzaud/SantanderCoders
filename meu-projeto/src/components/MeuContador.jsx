import { useState } from "react";
import styles from "./button.module.css";

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }
  function diminuir() {
    setContador(contador - 1);
  }

  if (contador > 5) {
    return (
      <div>
        <h1>Valor muito alto</h1>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Meu Contador</h1>
      <h3>{contador}</h3>
      <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
      <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
      {contador > 9 ? <h3>Contador maior que 9</h3> : null}{" "}
      {/* if ternário, se
      contador for maior que 9, exibe o texto, caso contrário, não exibe nada */}
    </div>
  );
}
