import styles from './App.module.css'
import { Adicionar } from './componentes/Adicionar'
import { Header } from './componentes/Header'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Adicionar />

      </div>
    </div>
  )
}
