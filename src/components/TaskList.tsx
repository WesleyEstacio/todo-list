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

            <main className={styles.taskList}>
                <header className={styles.taskInfo}>
                    <div>
                        <p>Tarefas criadas</p>
                        <span>0</span>
                    </div>

                    <div>
                        <p>Concluídas</p>
                        <span>0</span>
                    </div>
                </header>

            </main>
        </div>
    )
}