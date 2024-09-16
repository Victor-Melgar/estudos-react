// 4 - template expression

function TemplateExpression() {
    const name = "Gabriel";

    const data = {
        age: 18,
        job: "Programador",
    }

  return (
    <div>
        <p>A soma é: {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Você tem {data.age} anos e você é um {data.job}</p>
    </div>
  )
}

export default TemplateExpression