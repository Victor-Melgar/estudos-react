import './App.css'

// 2 - css de componente
import MyComponent from './components/MyComponent'

// 6 - css modules
import Title from './components/Title'

function App() {
  {/* 4 - inline style dinamico */}
  const n = 15
  const m = 20

  {/* 5 - classe dinamica */}
  const redTitle = true

  const titleBlack = false
  
  return (
    <>
      <div className="App">
        {/* 1 - css global */}
        <h1>CSS no React</h1>
        {/* 2 - css de componente */}
        <MyComponent />
        <p>Pegou o CSS do componente</p>
        {/* 3 -inline style */}
        <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}
        >
          Este elemento tem estilos inline
        </p>
        {/* 4 - inline style dinamico */}
        <h2 style={n > 10 ? {color: "purple"} : {color: "green"}}>CSS dinâmico</h2>
        <h2 style={m > 25 ? {color: "green"} : {color: "magenta"}}>CSS dinâmico 2</h2>
        {/* 5 - classe dinamica */}
        <h2 className={redTitle ? "red-title" : "title"}>
          Este título vai ter uma classe
        </h2>
        <h2 className={titleBlack ? "red-title" : "title-black"}>
          Este título vai ter uma classe
        </h2>
        {/* 6 - css modules */}
        <Title />
      </div>
    </>
  )
}

export default App
