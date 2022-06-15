import PropTypes from "prop-types";
import React, { ChangeEvent, FC, useState, useRef } from 'react'
import { ITodo } from '../Interfaces'

const NewToDo: FC = ({ addToDo }) => {
    
    const todoTextInput = useRef<HTMLInputElement>(null)

    const [text, setTodoText] = useState<string>("")
    const [created, setTodoCreated] = useState<null|number>(null)
    const [completed, setTodoCompleted] = useState<boolean>(false)

    const handleAddToDo = () => {
        const timestamp: number = created || new Date().getTime()
        const newTodo: ITodo = {
            completed: completed,
            text: text,
            timeCreated: timestamp
        }

        // Lift state to parent
        addToDo(newTodo)
        
        // Focus back the To Do input
        if (null !== todoTextInput.current) {
            todoTextInput.current.focus();
        }

        // Clear (reset) To Do
        setTodoText("")
        setTodoCreated(null)
        setTodoCompleted(false)
    }
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value)
    }

    return (
        <div className="new-todo">
            <label htmlFor="todoText">Add new item</label>
            <input
                type="text"
                id="todoText"
                className="c-forField"
                ref={todoTextInput}
                onChange={($event) => handleInputChange($event)}
                value={text}
                data-test-id="todoText" />
            <button type="button" onClick={handleAddToDo} data-test-id="addTodo">Add</button>
        </div>
    )
}

NewToDo.propTypes = {
    addToDo: PropTypes.func.isRequired
}

export default NewToDo
