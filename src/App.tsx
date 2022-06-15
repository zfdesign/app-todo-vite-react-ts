import { ChangeEvent, FC, useState } from 'react'
import { IToDoInput, ITodo } from './Interfaces'
import ToDoInput from './Components/ToDoInput'
import ToDoList from './Components/ToDoList'
import './App.css'

const App: FC = () => {

  const content = {
    todoList: {
      title: "Still to do!",
    },
    todoListCompleted: {
      title: "Completed!"
    }
  }

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
        <ToDoInput addToDo={handleAddToDo} />
        {todoList.length === 0 && todoListCompleted.length === 0 && <p data-test-id="todoEmptyListMessage">Nothing here yet!</p>}
        <ToDoList listTitle={content.todoList.title} todoList={todoList} listTypeCompleted={false} onCompletedChange={handleSetCompleted} onRemoveTodo={handleRemoveTodo} />
        <ToDoList listTitle={content.todoListCompleted.title} todoList={todoListCompleted} listTypeCompleted={true} onCompletedChange={handleSetCompleted} onRemoveTodo={handleRemoveTodo} />
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
