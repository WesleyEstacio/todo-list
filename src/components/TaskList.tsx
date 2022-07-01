import { PlusCircle } from 'phosphor-react'

import styles from './TaskList.module.css'

export function TaskList() {
    return (
        <div className={styles.container}>
            <section className={styles.newTask}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                />

                <button
                    type='submit'              
                >
                    Criar <PlusCircle />
                </button>
            </section> 
        </div>
    )
}