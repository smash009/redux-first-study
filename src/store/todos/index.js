const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션 생성 함수
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 0;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

// 초깃값
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초",
      done: true,
    },
    {
      id: 2,
      text: "리덕스 사용",
      done: false,
    },
  ],
};

// 리듀서 함수
function todos(state = initialState, action) {
  if (action.type === CHANGE_INPUT) {
    return {
      ...state,
      input: action.input,
    };
  } else if (action.type === INSERT) {
    return {
      ...state,
      todo: state.todos.concat(action.todo),
    };
  }

  return state;
}

export default todos;
