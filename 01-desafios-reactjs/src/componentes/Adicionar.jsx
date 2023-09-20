import styles from './Adicionar.module.css'
import { PlusCircle } from '@phosphor-icons/react'

export function Adicionar() {
    return (
        <div className={styles.pesquisa}>
            <input placeholder='Adicione uma nova tarefa' type="text" />
            <button>Criar  <PlusCircle size={16} /></button>
        </div>
    )
}