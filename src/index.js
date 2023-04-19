import { legacy_createStore } from "redux";

//redux는 데이터가 한 곳에 모이는것.
//reducer는 함수다
//modifier는 data를(reducer) 수정하는것이다. 유일하게 하나의 함수만 data를 수정(modify)할 수 있다.

//JS
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

//상수의 사용: 작성 오류 방지.
const ADD = "ADD";
const MINUS = "MINUS";

//modifier
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

//store
const countStore = legacy_createStore(countModifier);

//onChange()
const onChange = () => {
  number.innerText = countStore.getState();
};

//subscribe()
countStore.subscribe(onChange);

//hnadler
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

//addEventListener
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
