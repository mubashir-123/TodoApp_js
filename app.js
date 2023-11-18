const todo = document.querySelector("#todo");
const ul = document.querySelector("#ul");

let arr = [];

function render(){
    for(let i=0;i<arr.length;i++){
        ul.innerHTML += `<div><li class="text-white flex flex-wrap justify-evenly">${arr[i]} <div><button class="bg-red-500 rounded-lg px-2 py-1 text-white" onClick ="Delete(${i})" >Delete</button><button class="bg-green-600 rounded-lg px-2 py-1 text-white" onClick ="Edit(${i})" >Edit</button></div></li><hr></div>`;
      }
}
function addTodo(){
     ul.innerHTML = "";
    arr.push(todo.value);
    render();
      todo.value = "";
}
function Delete(i){
    ul.innerHTML = "";
    arr.splice(i,1);
    render();
}
function Edit(i){
    ul.innerHTML = "";
    let edit = prompt('Enter Todo');
    arr.splice(i,1,edit);
    render();
}