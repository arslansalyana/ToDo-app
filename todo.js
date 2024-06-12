const inputBox = document.getElementById('tasks');
const liContainer = document.getElementById('list-container')


function addTask (){
    if (inputBox.value === ''){
        alert('You must write something!');
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        liContainer.appendChild(li);

        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData ();
}

liContainer.addEventListener('click', (e)=>{
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData ();
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData ();
    }
})

function saveData () {
    localStorage.setItem('data', liContainer.innerHTML);
}
function getData() {
    liContainer.innerHTML = localStorage.getItem('data');
}

getData();