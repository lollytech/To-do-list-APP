
const Todo = ({ todo, numbering, onDelete, onEdit }) => {
  return (
    <div className="todo">
      <div style={{display: "flex", alignItems: "center"}}>
      <p style={{marginRight: 5}}>{numbering}.</p>
      <p>{todo}</p>
      </div>
      <div className="actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Todo