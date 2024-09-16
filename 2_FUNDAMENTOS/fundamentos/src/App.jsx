import './App.css'

// 2 -importando componente
import FirstComponent from './components/FirstComponent'

// 4 - template expression
import TemplateExpression from './components/TemplateExpression'

// 5 - hierarquia de componentes
import MyComponent from './components/MyComponent'

// 6 - events
import Events from './components/Events'

function App() {
  

  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </div>
  )
}

export default App
