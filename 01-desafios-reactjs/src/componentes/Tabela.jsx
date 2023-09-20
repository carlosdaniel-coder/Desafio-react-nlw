import styles from './Tabela.module.css'
import { ClipboardText } from '@phosphor-icons/react'

export function Tabela() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <p className={styles.one}>Tarefas criadas<span>0</span></p>
                <p className={styles.two}>Concluídas<span>0</span></p>
            </div>
            {/*
                <div className={styles.resutados}>
                    <ClipboardText size={70} />
                    <p className={styles.primeiro}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.segundo}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            */}

        </div>
    )
}