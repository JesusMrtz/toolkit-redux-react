import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/API/todosAPI"


export const TodoApp = () => {
  // const { isLoading, data: todos } = useGetTodosQuery();
  // console.log(todos);

  const [todoId, setTodoId] = useState(1);
  const { isLoading, data: todo } = useGetTodoQuery(todoId);
  console.log(todo);

  function todoPerPage(page) {
    setTodoId(() => page);
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h2>Is loading: { isLoading ? 'True' : 'False' } </h2>
      <pre>{ JSON.stringify(todo) }</pre>
      <button type="button" disabled={ todoId < 2 } onClick={() => todoPerPage(todoId - 1)}>
        Previus Todo
      </button>
      <button type="button" onClick={() => todoPerPage(todoId + 1)}>Next Todo</button>
      {/* <ul>
        {
          todos.map(todo => (
            <li key={ todo.id }>
              { todo.title } <strong>{ todo.completed && '--- Done' }</strong>
              </li>
          ))
        }
      </ul> */}
    </>
  )
}