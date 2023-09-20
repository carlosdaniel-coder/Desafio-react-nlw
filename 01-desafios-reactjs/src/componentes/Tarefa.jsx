import styles from './Tarefa.module.css'
import { Circle, CheckCircle, Trash } from '@phosphor-icons/react'

export function Tarefa() {
    return (
        <div className={styles.container}>
            <button className={styles.status}>
                <Circle color='#4EA8DE' size={32} />
            </button>
            {/*<CheckCircle size={32} weight="fill" color='#5E60CE' />*/}
            <div className={styles.flexionado}>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <button className={styles.apagar}>
                    <Trash  size={32} />
                </button>
            </div>

        </div>
    )
}