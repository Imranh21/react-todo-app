import React from 'react'
import styles from './Todo.module.css'

function Todo({ todo, todos, setTodos }) {

    const deleteItem = () => {
        const newTodos = todos.filter((item) => item.id !== todo.id) 
        setTodos(newTodos)
    }

    const Checked = () => {
        setTodos(todos.map((el) => {
            if (el.id === todo.id){
                return {
                    ...el, completed: !el.completed
                }
            }
            return el;
        }))
    }

    return (
        <>
        <div className={styles.container}>
            <input className={styles.checkBox} onClick={Checked} type="checkbox"></input>
            <li className={`${styles.list} ${todo.completed ? styles.completed : ""}`}>{todo.text}</li>
            <button onClick={deleteItem} className={styles.button}>Delete</button>
        </div>
        </>
    )
}

export default Todo
