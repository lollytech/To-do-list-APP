
const Form = ({ todo, setTodo, onSubmitTodo, error }) => {
  console.log(todo);
  const setRequest = (key, value) => {
    setTodo((item) => {
      return {
        ...item,
        id: Math.floor(Math.random() * 1000),
        [key]: value
      }
    });
  }
  return (
    <>
      <form onSubmit={onSubmitTodo}>
        <div className="input-wrapper">
          <input
            type="text"
            minLength={3}
            // value={todo?.item}
            onChange={(e) =>
              setRequest("item", e.target.value)
            }
            placeholder="Enter Todo..."
            required
          />
        </div>
        <div className="submit-btn">
          <button type="submit" className="enter">
            Enter
          </button>
        </div>
      </form>
      <p style={{ color: "red" }}>{error && error}</p>
    </>
  );
}

export default Form