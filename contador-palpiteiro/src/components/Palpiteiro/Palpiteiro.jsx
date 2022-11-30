import { useState, useEffect } from "react";

const Palpiteiro= ({ valor }) => {

  const [palpite, setPalpite] = useState(
    "Não sou capaz de opinar!"
  );

  useEffect(() => {
    if (valor == 0) {
      setPalpite("E tem zero no bingo é?")
    } else if (valor == 1) {
      setPalpite("Hello World!")
    } else if (valor == 6) {
      setPalpite("Queremos ele: o hexa!")
    } else if (valor == 7) {
      setPalpite("7 x 1? Pain!")
    }  else if (valor == 10) {
      setPalpite("De bolaaaa...")
    } else if (valor == 11) {
      setPalpite("As canelas de odete.")
    } else if (valor == 12) {
      setPalpite("Vitamina B12.")
    } else if (valor == 13) {
      setPalpite("Brilha uma estrela!")
    } else if (valor == 22) {
      setPalpite("Dois patinhos na lagoa.")
    } else if (valor == 33) {
      setPalpite("Idade de cristo.")
    } else if (valor < 0) {
      setPalpite("Opa! Vai pa onde?")
    } else {
      setPalpite("Não sou capaz de opinar!")
    }
  }, [valor]);

  return(
    <>
      <h3>Palpitômetro</h3>
      <p>{palpite}</p>
      <img src="https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-97-png.png" 
            alt=""
            width="40px" />       
    </>
  );
};

export default Palpiteiro;