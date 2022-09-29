export const AddForm = (props) => {
  const { onHandleFormSubmit, inputText, onHandleInputChange } = props;

  return (
    <form onSubmit={onHandleFormSubmit}>
      <label htmlFor='addTodo'>Add Todo: </label>
      <input
        type='text'
        id='addTodo'
        value={inputText}
        onChange={onHandleInputChange}
      />
      <button type='submit'>追加</button>
    </form>
  )
}
