import { useState } from 'react'
import styles from './Tarefa.module.css'
import { Circle, CheckCircle, Trash } from '@phosphor-icons/react'

export function Tarefa({ content, funsao }) {
    const [circleWeight, setCircleWeight] = useState('regular')
    
    const handleMouseEnter = () => {
        setCircleWeight('duotone')
    }
    const handleMouseLeave = () => {
        setCircleWeight('regular')
    }

    const handleClick = () => {
        funsao(content.id)
    }

    return (
        <div className={styles.container}>

            { content.completed == false ? (
                <button 
                    onClick={handleClick}
                    className={styles.status} 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    <Circle color='#4EA8DE' size={32} weight={circleWeight} />
                </button>) : ( 
                <button onClick={handleClick} className={styles.status}> 
                    <CheckCircle size={32} weight="fill" color='#5E60CE' /> 
                </button> )
            }

            <div className={styles.flexionado}>
                <p>{content.title}</p>
                <button className={styles.apagar}>
                    <Trash  size={32} />
                </button>
            </div>

        </div>
    )
}