import styles from './Adicionar.module.css'
import { PlusCircle, ClipboardText } from '@phosphor-icons/react'
import { Tarefa } from './Tarefa'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export function Adicionar() {
    const [letrasLive, setLetrasLive] = useState('')
    const [task, setTask] = useState([]);


    function handleLiveLetras() {
        setLetrasLive(event.target.value)
    }

    function maisUmaTarefa() {
        event.preventDefault()
        const formatNovaTarefa = { title: letrasLive, id: uuidv4(), completed: false}
        setTask([...task, formatNovaTarefa])
        setLetrasLive('')
    }

    function checked(propId) {
        const taskCopy = [...task];

        const tarefaIndex = taskCopy.findIndex(tarefa => tarefa.id === propId)
        if (tarefaIndex !== -1) {
            const tarefaAtual = { ...taskCopy[tarefaIndex] }
            tarefaAtual.completed = !tarefaAtual.completed;
            taskCopy[tarefaIndex] = tarefaAtual;
            setTask(taskCopy);
        }
    }

    return (
        <div>
            <form onSubmit={maisUmaTarefa} className={styles.pesquisa}>
                <input 
                    onChange={handleLiveLetras} 
                    placeholder='Adicione uma nova tarefa' 
                    type="text" 
                    value={letrasLive}
                />
                <button>Criar<PlusCircle size={16} /></button>
            </form>

            <div className={styles.container}>
            <div className={styles.info}>
                <p className={styles.one}>Tarefas criadas<span>{task.length}</span></p>
                <p className={styles.two}>Concluídas<span>0</span></p>
            </div>
            {/*
                <div className={styles.resutados}>
                    <ClipboardText size={70} />
                    <p className={styles.primeiro}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.segundo}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            */}
            {task.map(prop => {
                return <Tarefa content={prop} key={prop.id} funsao={checked} />
            })}

        </div>

        </div>
    )
}