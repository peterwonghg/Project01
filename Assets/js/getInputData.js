const form = document.getElementById('form');
const namePersonnel = document.getElementById('namePersonnel');
const site = document.getElementById('site');
const task = document.getElementById('task');

form.addEventListener('submit',function(e){
    e.preventDefault();

const namePersonnelValue = namePersonnel.value;
const siteValue = site.value;
const taskValue = task.value;



localStorage.setItem('name-Personnel', namePersonnelValue);
localStorage.setItem('site-name', siteValue);
localStorage.setItem('task-description', taskValue);

window.location.href = "stop.html";
})