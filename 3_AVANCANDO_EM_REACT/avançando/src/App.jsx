import './App.css'

// 2 - imagem em assets
import night from "./assets/night.jpg";

// 3 - useState
import Data from './components/Data';

// 4 - renderização de lista
import ListRender from './components/ListRender';

// 7 - render condicional
import ConditionalRender from './components/ConditionalRender';

// 8 - props
import ShowUserName from './components/ShowUserName';

// 9 - destruturando props
import CarDetails from './components/CarDetails';

// 11 - renderização de listas com componente
const cars = [
  {id: 1, brand: "Ferrari", color: "Preto", km: 0},
  {id: 2, brand: "KIA", color: "Branco", km: 20000},
  {id: 3, brand: "Renault", color: "Azul", km: 32000},
]

function App() {

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img.jpg" alt="Alguma Imagem" />
      {/* 2 - imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - renderização de lista */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - propts */}
      <ShowUserName name="Gabriel" />
      {/* 9 - destruturando props */}
      <CarDetails brand="Bmw" km={999} color="Azul"/>
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="Ferrari" km={1200} color="Vermelho"/>
      <CarDetails brand="Fiat" km={1000} color="Branco"/>
      {/* 11 - renderização de listas com componente */}
      {cars.map((car) => (
        <CarDetails key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
        />
      ))}
    </div>
  )
}

export default App
