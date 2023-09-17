import styles from './App.module.css'
import { Adicionar } from './componentes/Adicionar'
import { Header } from './componentes/Header'
import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <Adicionar />
    </div>
  )
}
