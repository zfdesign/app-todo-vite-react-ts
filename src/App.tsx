import { useState, FC } from 'react'
import { ITodo } from './Interfaces'
import NewToDo from './Components/NewTodo'
import './App.css'

const App: FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([])
  const [todoListCompleted, setTodoListCompleted] = useState<ITodo[]>([])

  const handleAddToDo = (todo: ITodo) => {
    // When editing
    if (todo.completed) {
      setTodoListCompleted([...todoListCompleted, todo])
    } else {
      setTodoList([...todoList, todo])
    }
  }

  const handleRemoveTodo = (index: number, completed: boolean) => {
    if (completed) {
      const list = todoListCompleted.filter((t, i: number) => {
        return i !== index
      })
      setTodoListCompleted(list)
    } else {
      const list = todoList.filter((t, i: number) => {
        return i !== index
      })
      setTodoList(list)
    }
  }

  const handleSetCompleted = (index: number) => {
    const todo = todoList[index]
    const list = todoList.filter((t, i: number) => i !== index)
    // Remove from `todoList`
    setTodoList(list)

    // Add to `todoListCompleted`
    todo.completed = true
    setTodoListCompleted([...todoListCompleted, todo])
  }
  
  const handleSetIncomplete = (index: number) => {
    const todo = todoListCompleted[index]
    const list = todoListCompleted.filter((t, i: number) => i !== index)
    // Remove from `todoListCompleted`
    setTodoListCompleted(list)
    
    // Add to `todoList`
    todo.completed = false
    setTodoList([...todoList, todo])
  }

  return (
    <div className="App" data-test-id="myToDoApp">
      <header className="App-header">
        <h1>My To Do List</h1>
      </header>
      <div className="c-todos">
        <NewToDo addToDo={handleAddToDo} />
        {todoList.length === 0 && todoListCompleted.length === 0 && <p data-test-id="todoEmptyListMessage">Nothing here yet!</p>}
        {/* TODO: ToDoListComponent props: [listTitle, todoList, onCompletedChange, handleRemoveTodo] */}
        <div className="c-todoList">
          {todoList.length > 0 &&
            <div data-test-id="todoList">
              <h2>Still to do!</h2>
              <ul data-test-id="todoList">
                {todoList.map((t, i) => {
                  return <li key={i} data-test-id="todoItem">
                    <input type="checkbox" onChange={() => handleSetCompleted(i)} data-test-id="todoItemCheckbox" />
                    <span data-test-id="todoItemText">{t.text}</span>
                    <button onClick={() => handleRemoveTodo(i, false)} data-test-id="todoItemRemove">Remove</button>
                  </li>
                })}
              </ul>
            </div>
          }
        </div>

        <div className="c-todoList-completed">
          {todoListCompleted.length > 0 &&
            <div data-test-id="todoList">
              <h2>Completed!</h2>

              <ul data-test-id="todoList-completed">
                {todoListCompleted.map((t, i) => {
                  return <li key={i} data-test-id="todoItem">
                    <input type="checkbox" checked onChange={() => handleSetIncomplete(i)} data-test-id="todoItemCheckbox" />
                    <span className="u-line-through" data-test-id="todoItemText">{t.text}</span>
                    <button onClick={() => handleRemoveTodo(i, true)} data-test-id="todoItemRemove">Remove</button>
                  </li>
                })
                }
              </ul>
            </div>
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
