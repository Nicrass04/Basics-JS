console.clear();

let todoList = ["JavaScript lernen"];

let newTodo = prompt("Bitte geben Sie den neuen Todo-Eintrag ein:");
todoList.push(newTodo);

console.log(`Das ist noch zu tun:`);
for (i = 0; i <= todoList.length; i++) {
  console.log(todoList[i]);
}
