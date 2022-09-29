export const EditForm = (props) => {
  const { onHandleUpdateFormSubmit, currentTodo, onHandleEditInputChange, onHandleEditCancelClick } = props;

  return (
    <form onSubmit={onHandleUpdateFormSubmit}>
      <label htmlFor='editTodo'>Edit Todo: </label>
      <input
        type='text'
        id='editTodo'
        value={currentTodo.value}
        onChange={onHandleEditInputChange}
      />
      <button type='submit'>更新</button>
      <button onClick={onHandleEditCancelClick}>取消</button>
    </form>
  )
}
