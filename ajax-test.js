const correctGreeting = document.getElementById('greeting');
correctGreeting.textContent = 'Добро пожаловать!';

 // --------------------------------------------------------------------------------------

const list1 = document.getElementById('userList');
const loading = document.getElementById('loading');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    loading.remove(); // удаляем "Загрузка..."
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name + ' - город: ' + user.address.city;
        list.appendChild(li);
    });
});

 // --------------------------------------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data))


async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    console.log(users)
}
getUsers()



const list = document.getElementById('userList');

async function loadUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = 'Имя:' + user.name + ' Email:' + user.email + ' Город:' + user.address.city;
        list.appendChild(li);
    }); 
}

document.getElementById('loadBtn').addEventListener('click', loadUsers);

 // --------------------------------------------------------------------------------------

const promise1 = new Promise((resolve, reject) => {
    const success = true;

    if(success) {
        resolve('Успех! ✅');
    } else {
        reject('Ошибка ❌')
    }
});

promise
    .then(result => {
        console.log("Результат:", result);
    })
    .catch(error => {
        console.log("Произошла ошибка:", error);
    })


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Что-то пошло не так')
    }, 2000);
})

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Произошла ошибка:", error)
    })

 // --------------------------------------------------------------------------------------

async function loadData() {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.log('Ошибкаааа:', error);
    }
}

loadData()

 // --------------------------------------------------------------------------------------

const person = { name: "Amina", hobby: "reading" }
const obj = JSON.stringify(person)
console.log(obj)

const backToObj = JSON.parse(obj)
console.log(backToObj)

 // --------------------------------------------------------------------------------------

const newUser = {
    name: "Leila",
    email: "leila@example.com"
};

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'  // говорим серверу, что отправляем JSON
    },
    body: JSON.stringify(newUser)  // превращаем объект в JSON
})
.then(response => response.json())
.then(data => {
    console.log("Ответ сервера:", data);
})
.catch(error => {
    console.log("Ошибка:", error);
});

 // --------------------------------------------------------------------------------------



function sendRequest () {

const xhr = new XMLHttpRequest()
    
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

xhr.responseType = 'json'

xhr.onload = () => {
    if (xhr.status >= 400) {
        console.error(xhr.response)
    } else {
    console.log( xhr.response)
    }
}

xhr.onerror = () => {
    console.log(xhr.response)
}

xhr.send ()
}

































