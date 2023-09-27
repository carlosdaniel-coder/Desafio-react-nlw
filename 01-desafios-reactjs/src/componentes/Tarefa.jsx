import styles from './Tarefa.module.css';
import { Trash } from '@phosphor-icons/react';
import IconN from '../assets/normal.svg';
import IconNH from '../assets/normalhover.svg';
import IconC from '../assets/checked.svg';
import IconCH from '../assets/checkedhover.svg';
import { useState } from 'react';

export function Tarefa({ content, funsao1, funsao2 }) {
    const [icone, setIcone] = useState(IconN)

    const handleMouseHoverEnter = () => {
        setIcone(icone === IconN ? IconNH : IconCH);
      };
    
      const handleMouseHoverLeave = () => {
        setIcone(icone === IconNH || icone === N ? IconN : IconC);
      };
    
      const handleClick = () => {
        funsao1(content.id);
        setIcone(icone === IconN || icone === IconNH ? IconC : IconN);
      };

    const excluir = () => {
        funsao2(content.id)
    }


    return (
        <div 
            className={styles.container} 
            style={{border: content.completed === false ? 
                '1px solid var(--cinza-400)' : '1px solid var(--cinza-500)'
            }}
        >

            <button 
                onClick={handleClick}
                className={styles.status} 
                onMouseEnter={handleMouseHoverEnter}
                onMouseLeave={handleMouseHoverLeave}
            >
                <img src={icone} alt="" />
            </button>


            <div className={styles.flexionado}>

                <p style={{ color: content.completed === false ? 
                        'var(--cinza-100)' : 'var(--cinza-300)', 
                    textDecoration: content.completed === false ? 
                        '' : 'line-through'}}
                >{content.title}</p>

                <button onClick={excluir} className={styles.apagar}>
                    <Trash  size={32} />
                </button>
            </div>
        </div>
        
    )
}