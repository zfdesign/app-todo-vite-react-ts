import PropTypes, { object } from "prop-types";
import React, { ChangeEvent, FC, useState, useRef } from 'react'
import { ITodo } from '../Interfaces'

const ToDoList: FC = ({ listTitle, todoList, listTypeCompleted, onCompletedChange, onRemoveTodo }) => {

    const handleSetCompleted = (i: number) => {
        onCompletedChange(i, listTypeCompleted)
    }

    const handleRemoveTodo = (i: number) => {
        onRemoveTodo(i, listTypeCompleted)
    }

    return (
        <div className="c-todoList">
            {todoList.length > 0 &&
            <div>
            <h2>{listTitle}</h2>
            <ul data-test-id="todoList">
                {todoList.map((t: any, i: number) => {
                    return <li key={i} data-test-id="todoItem">
                        <input type="checkbox" checked={listTypeCompleted} onChange={() => handleSetCompleted(i)} data-test-id="todoItemCheckbox" />
                        <span className={listTypeCompleted ? "u-line-through" : ""} data-test-id="todoItemText">{t.text}</span>
                        <button onClick={() => handleRemoveTodo(i)} data-test-id="todoItemRemove">Remove</button>
                    </li>
                })}
            </ul>
            </div>
            }
        </div>
    )

}

ToDoList.propTypes = {
    listTitle: PropTypes.string.isRequired,
    todoList: PropTypes.array.isRequired,
    listTypeCompleted: PropTypes.bool,
    onCompletedChange: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired
}

export default ToDoList