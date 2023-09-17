import styles from './Adicionar.module.css'
import { PlusCircle } from 'phosphor-react'

export function Adicionar() {
    return (
        <div className={styles.pesquisa}>
            <input type="text" />
            <button><PlusCircle /></button>
        </div>
    )
}