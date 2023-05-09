const namePersonnel = localStorage.getItem('name-Personnel');
const site = localStorage.getItem('site-name');
const task = localStorage.getItem('task-description');

document.getElementById('name-Personnel').value = window.localStorage["name-Personnel"];
document.getElementById('site-name').value = window.localStorage["site-name"];
document.getElementById('task-description').value = window.localStorage["task-description"];

localStorage.clear();



// const form = document.getElementById('form');
// const nameP = document.getElementById('nameP');
// const site = document.getElementById('site');
// const task = document.getElementById('task');

// const init = function(e) {
//     let btn = document.querySelector("nameP")

//     btn.addEventListener('click', function(){
//         localStorage.setItem('nameP', namePValue)
//         window.document.location = './submit.html'
//     })
// }
// form.addEventListener('submit',function(e){
//     e.preventDefault();

    // const namePValue = nameP.value;
//     const siteValue = site.value;
//     const taskValue = task.value;

//     sessionStorage.setItem('nameP', namePValue);
//     sessionStorage.setItem('site', siteValue);
//     sessionStorage.setItem('task', taskValue);

// });

// document.addEventListener('DOMContentLoaded', function() {
//     Init();
// });