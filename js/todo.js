/* array에서 어떤 요소를 지우는 것 💡
 * 실제로 array에서 그걸 지우는 게 아님
 * 지우고 싶은 item을 빼고 >>새 array<<를 만드는 것!
 * 그걸 어케 함? >>> filter 함수 사용
 */

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// 배열 생성
let toDos = []; // todo가 작성되면 이 배열에 Push

const TODOS_KEY = "todos"

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // "todos" : keyname(로컬 저장소의)
  // stringify: 배열로 바꾸거나 string으로 바꿔줌
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
//  console.log(typeof li.id); >> string임(처음 저장할 때 saveToDos의 stringify에 의해)
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
  saveToDos();    // 이걸 불러줘야 삭제됨!!
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);   // <li>는 자식으로 <span>을 가짐
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // console.log(toDoInput.value);
  const newTodo = toDoInput.value;
  toDoInput.value = "";   // 입력 후 엔터 누르면 '화면에 보이는' todo 값 사라짐
                          // but) newTodo의 데이터가 사라지는 건 아님!

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };        
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

// localStorage 내 todo가 null이 아닌 경우
if (savedToDos) {  //(같음) saveToDos !== null
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;  // 새로고침 했을 때 전에 썼던
                        // 리스트가 안 날아가도록 여기서 복원
  parsedToDos.forEach(paintTodo);
}

