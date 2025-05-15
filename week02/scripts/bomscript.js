const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_____'); 

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = 'X';

button.addEventListener('click', function() {
    if (input.value.trim() !== '') { 
        li.textContent = input.value;
        li.append(deleteButton);
        list.append(li);
     }
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
    input.value = '';
    input.focus();
});

