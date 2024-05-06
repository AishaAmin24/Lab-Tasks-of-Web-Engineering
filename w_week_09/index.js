let users = [];
const container = document.getElementById("container");

const getUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((apiResult) => apiResult.json())
    .then((data) => {
      users = data;

      users.forEach((user) => {
        container.innerHTML += `<div class="user">
        <img
          src="https://api.dicebear.com/8.x/notionists/svg?seed=${user.username}"
          alt="avatar"
        />
        <div>name : ${user.name}</div>
        <div>username : ${user.username}</div>

        <div>email : ${user.email}</div>
      </div>
    `;
    let counter = 0;

    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.querySelector('#reset');
    
    if(){

    }
    incrementBtn.addEventListener('click', () => {
        counter++;
        counterValue.innerHTML = counter;
    });
    
   
    decrementBtn.addEventListener('click', () => {
        counter--;
        counterValue.innerHTML = counter;
    });
    
    
    resetBtn.addEventListener('click', reset);
    
    function reset() {
        counter = 0;
        counterValue.innerHTML = counter;
    }
       
      });
    });
getUsers();