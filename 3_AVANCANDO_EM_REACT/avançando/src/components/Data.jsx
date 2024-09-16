import { useState } from "react";

const Data = () => {
  let someData = 10;

  const [anotherNumber, setAnotherNumber] = useState(15);

  let someData2 = 50;
  const [number1, number2] = useState(50);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
      </div>

     {/* Meu exemplo de um jeito diferente */}
      <div>
        <p>Valor: {someData2}</p>
        <button onClick={() => number1(50)}>Mudar variável</button>
        <p>Valor: {number1}</p>
        <button onClick={() => number2(100)}>Mudar state</button>
      </div>
    </div>
  )
}

export default Data