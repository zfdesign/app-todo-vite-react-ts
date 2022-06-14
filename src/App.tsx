import { useState, FC, ChangeEvent, useRef } from 'react'
import './Interfaces'
import './App.css'
import { ITodo } from './Interfaces'

const App: FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [timeCreated, setTimeCreated] = useState<number>(0)
  const [completeState, setCompleteState] = useState<boolean>(false)
  const [todoList, setTodoList] = useState<ITodo[]>([])

  const todoTextInput = useRef<HTMLInputElement>(null)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setTodo(value)
  }

  const handleAddToDo = () => {
    const timeCreated = new Date().getTime()
    const newTodo = { completeState: completeState, timeCreated: timeCreated, text: todo }
    setTodoList([...todoList, newTodo])
    setTodo("")
    setTimeCreated(0)
    setCompleteState(false)
    if (null !== todoTextInput.current) {
      todoTextInput.current.focus();
    }
  }

  const handleDeleteTodo = (index: number) => {
    const list = todoList.filter((todo: ITodo, i: number) => {
      return i !== index
    })
    setTodoList(list)
  }

  const handleCompleteState = (index: number) => {
    const list = todoList.map((todo: ITodo, i: number) => {
      if (i === index) {
        todo.completeState = !todo.completeState
      }
      return todo
    })

    setTodoList(list)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My To Do List</h1>
      </header>
      <div className="c-todos">
      <div className="new-todo">
        <label htmlFor="todoText">Add new item</label>
        <input type="text" id="todoText" className="c-forField" ref={todoTextInput}
         onChange={handleInputChange} value={todo} />
        <button type="button" onClick={handleAddToDo}>Add</button>
      </div>
      <div className="c-todoList">
        {todoList.length > 0 ? 
        <ul>
          { todoList.map((t, i) => {
            return <li key={i}>
              <input type="checkbox" checked={t.completeState} onChange={() => handleCompleteState(i)} />
              <span className={t.completeState ? "u-line-through" : ""}>{t.text}</span>
              <button onClick={() => handleDeleteTodo(i)}>Remove</button>
              </li>
          })
          }
        </ul>
        :
        <p>Nothing here yet!</p>
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
