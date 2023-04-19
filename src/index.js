import { legacy_createStore } from "redux";

//redux는 데이터가 한 곳에 모이는것.
//reducer는 함수다
//modifier는 data를(reducer) 수정하는것이다. 유일하게 하나의 함수만 data를 수정(modify)할 수 있다.

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
  return count;
};

const countStore = legacy_createStore(countModifier);

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
