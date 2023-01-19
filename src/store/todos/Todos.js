const TodoItem = ({}) => {
  return (
    <div>
      <input type="'checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
};

const Todos = ({
  input,
  todo,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;
