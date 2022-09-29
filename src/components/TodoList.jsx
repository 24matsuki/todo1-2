export const TodoList = (props) => {
  const { todos, onHandleSelectChange, todoStatuses, onHandleEditClick, onHandleDeleteClick } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.key}>
          <select value={todo.status} onChange={(e) => onHandleSelectChange(todo.key, e.target.value)} >
            {todoStatuses.map((todoStatus) => (
              <option
                // selected={todo.status === todoStatus.value}
                value={todoStatus.value}
              >
                {todoStatus.textContent}
              </option>
            ))}
          </select>
          {todo.value}
          <button onClick={() => onHandleEditClick(todo)}>
            編集
          </button>
          <button onClick={() => onHandleDeleteClick(todo.key)}>
            削除
          </button>
        </li>
      ))}
    </ul>
  )
}
