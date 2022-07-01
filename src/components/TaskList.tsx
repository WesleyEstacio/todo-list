import { PlusCircle, Clipboard, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'

import styles from './TaskList.module.css'

interface Task {
    id: number;
    title: string;
    isComplete: boolean;
}

export function TaskList() {
    const [tasks,setTasks] = useState<Task[]>([])
    const [newTaskTitle,setNewTaskTitle] = useState('')
    const [haveTasks, setHaveTasks] = useState(false)

    const HAVE_TASKS = tasks.length === 0    


    
    useEffect(() => {
        HAVE_TASKS ? setHaveTasks(false) : setHaveTasks(true)
    }, [tasks]) // Verificar se existem tasks



    function handleCreateNewTask() {
        if(!newTaskTitle) return

        const newTask = {
            id: Math.random(),
            title: newTaskTitle,
            isComplete: false
        }

        setTasks(oldState => [...oldState, newTask])
        setNewTaskTitle('')
    }   // Criar nova Task

    function handleRemoveTask(id: number) {
        const filteredTasks = tasks.filter(task => task.id != id)

        setTasks(filteredTasks)
    }   //Remover uma Task
 

    
    return (
        <div className={styles.container}>
            <section className={styles.newTask}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    value={newTaskTitle}
                />

                <button
                    type='submit'
                    onClick={handleCreateNewTask}
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
                        <span>0 de 3</span>
                    </div>
                </header>

                <section className={styles.tasks}>
                    {!haveTasks ? 
                        <div className={styles.noTask}>
                            <Clipboard size={56} />
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    :
                        null
                    }
                        
                    {tasks.map(task => (
                        <article className={styles.taskSingle}>
                            <input 
                                type="checkbox" 
                            />
                            <p>{task.title}</p>
                            <button
                                type='button'
                                onClick={() => handleRemoveTask(task.id)}
                            >
                                <Trash size={14} />
                            </button>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    )
}