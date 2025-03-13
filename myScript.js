const inputBox = document.getElementById('inputBox');
const list = document.getElementById('list');

function addTask(){
    if(inputBox.value === ''){
        alert ('You must Write Something!');
    } 
    else{

       let taskCounter = 0;
        taskCounter++;

        let li = document.createElement("li")
        let radio = document.createElement("input")
        radio.type = "radio"
        radio.id = "one"+ taskCounter
        radio.style.transform='scale(1.5)';
        radio.style.cursor= 'pointer';

        let label = document.createElement ("label");
        label.htmlFor = radio.id;
        label.textContent = inputBox.value;
        label.style.marginTop = '2%';
        label.style.marginLeft = '2%';

        let trash = document.createElement('a');
        trash.href = "#"
        trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
        trash.addEventListener ("click", function(e){
        e.preventDefault();
        li.remove();
          })

        let line = document.createElement ('hr');
        line.style.margin = '3%';
        line.style.border = '0.5px solid #76B7CD';


        li.appendChild(radio)
        li.appendChild(label)
        li.appendChild(trash)
        li.appendChild(line)


        list.appendChild (li)
       
    }
}

document.addEventListener("DOMContentLoaded", function () {
let trashIcons = document.querySelectorAll('#list li a')
    trashIcons.forEach(function(trash){
            trash.addEventListener('click', function(e){
                e.preventDefault();
                this.parentElement.remove();
            }

    )}
    )})


function clearCompleted(){
    let tasks = document.querySelectorAll('#list li')

    tasks.forEach(function(task){
            let radio = task.querySelector("input[type='radio']");
            if (radio.checked){
            task.remove()
            }
        
    })
       
    }

   