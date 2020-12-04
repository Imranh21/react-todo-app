import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, setTodos }) {
    return (
        <div>
            <ul className={styles.listGroup}>
                {todos.map(todo => {
                    return (
                        <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList

