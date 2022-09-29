import { useEffect, useState } from "react";
import { AddForm } from "./components/AddForm";
import { EditForm } from "./components/EditForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const todoStatuses = [
    {
      value: 'untouched',
      textContent: '未着手'
    },
    {
      value: 'active',
      textContent: '進行中'
    },
    {
      value: 'completed',
      textContent: '完了'
    }
  ];

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setTodos([
      {
        key: new Date().getTime(),
        value: inputText,
        status: 'untouched'
      },
      ...todos
    ]);

    setInputText('');
  }

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
  }

  const handleDeleteClick = (key) => {
    const newTodos = todos.filter(todo => todo.key !== key);
    setTodos(newTodos);
  }

  const handleEditCancelClick = () => {
    setIsEditing(false);
    setInputText('');
    setCurrentTodo({});
  }

  const handleEditInputChange = (e) => {
    setCurrentTodo({
      ...currentTodo,
      value: e.target.value
    });
  }

  const handleUpdateFormSubmit = (e) => {
    e.preventDefault();

    const updateTodos = todos.map((todo) => {
      if (todo.key === currentTodo.key) {
        todo.value = currentTodo.value;
      }
      return todo;
    })

    setTodos(updateTodos);
    setCurrentTodo({});
    setIsEditing(false);
  }

  const handleSelectChange = (key, status) => {
    const newTodos = todos.map((todo) => {
      if (todo.key === key) {
        todo.status = status;
      }
      return todo;
    })

    setTodos(newTodos);
  }

  return (
    <div>
      <h2>TODOアプリ</h2>
      {isEditing ? (
        <EditForm
          onHandleUpdateFormSubmit={handleUpdateFormSubmit}
          currentTodo={currentTodo}
          onHandleEditInputChange={handleEditInputChange}
          onHandleEditCancelClick={handleEditCancelClick}
        />
      ) : (
        <AddForm
          onHandleFormSubmit={handleFormSubmit}
          inputText={inputText}
          onHandleInputChange={handleInputChange}
        />
      )}
      <TodoList
        todos={todos}
        onHandleSelectChange={handleSelectChange}
        todoStatuses={todoStatuses}
        onHandleEditClick={handleEditClick}
        onHandleDeleteClick={handleDeleteClick}
      />
    </div>
  );
}

export default App;
