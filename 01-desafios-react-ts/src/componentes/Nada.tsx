import styles from './Nada.module.css';
import {ClipboardText} from '@phosphor-icons/react'

export function Nada() {
    return (
        <div className={styles.resutados}>
            <ClipboardText size={70} />
            <p className={styles.primeiro}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.segundo}>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}