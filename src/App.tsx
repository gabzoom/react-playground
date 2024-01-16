import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>
      <Home
        titulo="Componente Home"
        texto="Esse texto foi enviado pelo componente App"
      />

      <Contador />

      <Tarefa />
    </>
  )
}

export default App