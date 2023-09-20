import styles from './App.module.css'
import { Adicionar } from './componentes/Adicionar'
import { Header } from './componentes/Header'
import { Tabela } from './componentes/Tabela'
import { Tarefa } from './componentes/Tarefa'
import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <Adicionar />
      <div className={styles.wrapper}>
        <Tabela />
        <Tarefa />
        <Tarefa />
        <Tarefa />
      </div>
    </div>
  )
}
