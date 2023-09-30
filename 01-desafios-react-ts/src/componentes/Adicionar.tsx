import styles from './Adicionar.module.css';
import { PlusCircle } from '@phosphor-icons/react';
import { Tarefa } from './Tarefa';
import { ChangeEvent, FormEvent, useState} from 'react';
import { v4 as uuidv4} from 'uuid';
import { Nada } from './Nada';

interface Content {
    title: string;
    id: string;
    completed: boolean;
}

export function Adicionar() {
    const [letrasLive, setLetrasLive] = useState('');
    const [task, setTask] = useState<Content[]>([]);
    const [focus, setFocus] = useState(false)


    function handleLiveLetras( event : ChangeEvent<HTMLInputElement> ) {
        const parte = (event.target.value).slice(22)
        setLetrasLive(parte)
    }

    function handleMaisUmaTarefa(event : FormEvent) {
        event.preventDefault()
        const formatNovaTarefa: Content = { title: letrasLive, id: uuidv4(), completed: false}
        setTask([...task, formatNovaTarefa])
        setLetrasLive('')
    }

    function checked(propId: string) {
        const taskCopy = [...task];

        const tarefaIndex = taskCopy.findIndex(tarefa => tarefa.id === propId)
        if (tarefaIndex !== -1) {
            const tarefaAtual = { ...taskCopy[tarefaIndex] }
            tarefaAtual.completed = !tarefaAtual.completed;
            taskCopy[tarefaIndex] = tarefaAtual;
            setTask(taskCopy);
        }
    }

    const handleFocus = () => {
        if (focus === false) {
            setFocus(true)
        } else {
            setFocus(false)
        }
    }

    function excluir(propId: string) {
        const updateItems = task.filter(item => item.id !== propId);
        setTask(updateItems)
    }

    const count = () => {
        return task.filter(tasks => tasks.completed === true).length;
    }

    return (
        <div>
            <form onSubmit={handleMaisUmaTarefa} className={styles.pesquisa}>
                <input 
                    onChange={handleLiveLetras} 
                    placeholder='Adicione uma nova tarefa' 
                    type="text" 
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                    value={ (focus ? 'Descrição da tarefa | ' : '') + letrasLive}
                />
                <button disabled={letrasLive.length <= 0} >Criar<PlusCircle size={16} /></button>
            </form>

            <div className={styles.container}>
                <div className={styles.info}>
                    <p className={styles.one}>Tarefas criadas<span>{task.length}</span></p>
                    <p className={styles.two}>Concluídas<span>{count()} de {task.length}</span></p>
                </div>

                {task.length === 0 ? <Nada /> : (

                    task.map(prop => {
                        return (
                            <Tarefa 
                                content={prop} 
                                key={prop.id} 
                                funsao1={checked} 
                                funsao2={excluir}
                            />
                            
                        )
                    })
                )}

            </div>

        </div>
    )
}