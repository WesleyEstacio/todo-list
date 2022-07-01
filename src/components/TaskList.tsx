import { PlusCircle, Clipboard, Trash } from 'phosphor-react'

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


                <section className={styles.tasks}>
                    {/* <div className={styles.noTask}>
                        <Clipboard size={56} />
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div> */}

                    <article className={styles.taskSingle}>
                        <input type="checkbox" />
                        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                        <button>
                            <Trash size={14} />
                        </button>
                    </article>

                    <article className={styles.taskSingle}>
                        <input type="checkbox" />
                        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                        <button>
                            <Trash size={14} />
                        </button>
                    </article>

                    <article className={styles.taskSingle}>
                        <input type="checkbox" />
                        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                        <button>
                            <Trash size={14} />
                        </button>
                    </article>
                </section>
            </main>
        </div>
    )
}