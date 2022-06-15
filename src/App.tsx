import { useState, FC, ChangeEvent, useRef } from 'react'
import './Interfaces'
import NewToDo from './Components/NewTodo'
import './App.css'

const App: FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([])

  const handleAddToDo = (todo) => {
    setTodoList([...todoList, todo])
  }

  const handleRemoveTodo = (index: number) => {
    const list = todoList.filter((todo: ITodo, i: number) => {
      return i !== index
    })
    setTodoList(list)
  }

  const handleCompleteState = (index: number) => {
    const list = todoList.map((todo: ITodo, i: number) => {
      if (i === index) {
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodoList(list)
  }

  return (
    <div className="App" data-test-id="myToDoApp">
      <header className="App-header">
        <h1>My To Do List</h1>
      </header>
      <div className="c-todos">
        <NewToDo addToDo={handleAddToDo}  />
        <div className="c-todoList">
          {todoList.length > 0 ?
            <ul data-test-id="todoList">
              {todoList.map((t, i) => {
                return <li key={i} data-test-id="todoItem">
                  <input type="checkbox" checked={t.completed} onChange={() => handleCompleteState(i)} data-test-id="todoItemCheckbox" />
                  <span className={t.completed ? "u-line-through" : ""} data-test-id="todoItemText">{t.text}</span>
                  <button onClick={() => handleRemoveTodo(i)} data-test-id="todoItemRemove">Remove</button>
                </li>
              })
              }
            </ul>
            :
            <p data-test-id="todoEmptyListMessage">Nothing here yet!</p>
          }
        </div>
      </div>
      <footer>
        <p>
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
