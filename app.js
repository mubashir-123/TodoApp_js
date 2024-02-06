
import { db } from "./config.js";
import { collection, getDocs, addDoc, Timestamp, query, orderBy, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const todo = document.querySelector("#todo");
const ul = document.querySelector("#ul");
const from = document.querySelector("#form");

let arr = [];

//Render Data on Screen
const render=()=> {
    ul.innerHTML = '';
    arr.map((item)=> {
        ul.innerHTML += `<div><li class="text-white flex flex-wrap justify-evenly">${item.title} <div>
        <button class="bg-red-500 rounded-lg px-2 py-1 text-white Delete">Delete</button>
        <button class="bg-green-600 rounded-lg px-2 py-1 text-white Edit">Edit</button>
        </div></li><hr></div>`;
    });
}


//Read data from Firestore
const sortedQuery = await query(collection(db, "todoApp"), orderBy('date', 'desc'));
const querySnapshot = await getDocs(sortedQuery);
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => `,doc.data());
    const obj = {
        docId: doc.id,
        ...doc.data()
    }
    arr.push(obj);
    render();
});

//Add Data 
from.addEventListener('submit',async (event)=>{
    event.preventDefault();
        const obj = {
            title: todo.value,
            date: Timestamp.fromDate(new Date()),
            //uid: userUid
        }
        arr.unshift(obj);
        console.log(arr);
        render();
        try {
            const docRef = await addDoc(collection(db, "todoApp"),obj);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    todo.value = "";
});

//Delete data
const Delete = document.querySelectorAll('.Delete');
Delete.forEach((item,i)=>{
item.addEventListener('click',async ()=>{
    console.log("Button Deleted");
    await deleteDoc(doc(db, "todoApp", arr[i].docId));
    arr.splice(i, 1);
    render();
    });
});

//Edit data
const Edit = document.querySelectorAll('.Edit');
Edit.forEach((item,i)=>{

    item.addEventListener('click',async ()=>{
    let edit = prompt('Enter Todo');
    
    const washingtonRef = doc(db, "todoApp", arr[i].docId);
    await updateDoc(washingtonRef, {
       title: edit
    });
    arr.splice(i, 1, edit);
    render();
    });
});

// function deleteAll() {
//     ul.innerHTML = "";
//     arr = [];
//     console.log(arr);
//     render();
// }
