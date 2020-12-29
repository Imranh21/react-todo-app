import React from 'react'
import styles from './TodoForm.module.css'

function TodoForm({inputValue, setInputValue, todos, setTodos}) {

    const OnChangeHandler = e => {
        
        setInputValue(e.target.value);
    }

    const OnSubmitHandler = e => {
        e.preventDefault();

        if (inputValue.length !== 0) {
            setTodos([
                {id: Math.random() * 1000, text: inputValue, completed: false}, ...todos
            ])
        }

        setInputValue("");
        
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={OnSubmitHandler}>
                <input className={styles.input} type="text" placeholder="Write todo" value={inputValue} onChange={OnChangeHandler}></input>
                <button className={styles.button}>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm
