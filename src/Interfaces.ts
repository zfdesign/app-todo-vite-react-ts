export interface ITodo {
    completed: boolean,
    text: string,
    timeCreated: null|number
}

export interface IToDoInput {
    addToDo: any
}

export interface IToDoList {
    listTitle: string,
    todoList: ITodo[],
    listTypeCompleted?: boolean,
    onCompletedChange?: any,
    onRemoveTodo?: any
}
