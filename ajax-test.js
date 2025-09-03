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

const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest (method, url) {
    return new Promise((resolve, reject) => {
       const xhr = new XMLHttpRequest()
    
xhr.open(method, url)

xhr.responseType = 'json'

xhr.onload = () => {
    if (xhr.status >= 400) {
        reject(xhr.response)
    } else {
    resolve( xhr.response)
    }
}

xhr.onerror = () => {
    reject(xhr.response)
}

xhr.send () 
    })
}

sendRequest('GET', requestURL)
.then(data => console.log(data))
.catch(error => console.log(error))

 // --------------------------------------------------------------------------------------

 const xhr = new XMLHttpRequest();

 xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

 xhr.onload = function() {
    if(xhr.status === 200) {
        console.log("Данные:", xhr.responseText);
    } else {
            console.error("Ошибка загрузки")
        }
};

xhr.onerror = function() {
    console.error("Ошибка соединения");
};

xhr.send();

// new XMLHttpRequest() → создаём запрос
// .open() → готовим запрос (метод + адрес)
// .onload / .onerror → слушаем результат
// .send() → отправляем


const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/wrong-url");

xhr.onload = function() {
    if (xhr.status !== 200) {
        console.log(`Ошибка: ${xhr.status} ${xhr.statusText}`);
    }
};

xhr.onerror = function() {
    console.log("Ошибка соединения");
};

xhr.send();


const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

const newPost = {
    title: "Мой первый пост",
    body: "Привет! Это я учусь AJAX",
    userId: 1
};

xhr.onload = function() {
    if (xhr.status === 201) { // код 201 — Created
        console.log("Пост успешно создан:", JSON.parse(xhr.responseText));
    }
};

xhr.onerror = function() {
    console.log("Ошибка при отправке поста");
};

xhr.send(JSON.stringify(newPost));



const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

xhr.onload = function() {
    if (xhr.status === 200) {
        const post = JSON.parse(xhr.responseText);
        console.log(`Заголовок: ${post.title}`);
        console.log(`Текст: ${post.body}`);
    }
};

xhr.onerror = function() {
    console.log("Ошибка при загрузке поста");
};

xhr.send();



const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function() {
    if (xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);
        users.forEach(user => {
            console.log(`Имя: ${user.name}, Email: ${user.email}`);
        });
    }
};

xhr.onerror = function() {
    console.log("Ошибка загрузки пользователей");
};

xhr.send();

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

xhr.onload = function() {
    if (xhr.status === 200) {
        const post = JSON.parse(xhr.responseText);
        console.log(`Заголовок: ${post.title}`);
        console.log(`Текст: ${post.body}`);
    }
};

xhr.onerror = function() {
    console.log("Ошибка при загрузке поста");
};

xhr.send();



const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function() {
    if (xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);
        users.forEach(user => {
            console.log(`Имя: ${user.name}, Email: ${user.email}`);
        });
    }
};

xhr.onerror = function() {
    console.log("Ошибка загрузки пользователей");
};

xhr.send();


// ===================================================================

const textIdContainer = document.getElementById("post-container");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)

xhr.onload = function() {
    const data = JSON.parse(xhr.responseText);
    data.forEach(post => {

        const li = document.createElement("li");

        const title = document.createElement("h3");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        const userId = document.createElement("small");
        userId.textContent = post.userId;

        li.appendChild(title);
        li.appendChild(body);        
        li.appendChild(userId);

        textIdContainer.appendChild(li)
    })
}

xhr.onerror = function() {
    console.error('error_error')
}

xhr.send()


const textIdContainer2= document.getElementById("post-container");

const xhr = new XMLHttpRequest;

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts","true")

xhr.onload = function(){
    data.forEach(post => {


    })
}

























// ===================================================================

const textIdContainer5 = document.getElementById("post-container");

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)

xhr.onload = function() {
    const data = JSON.parse(xhr.responseText);
    data.forEach(post => {

        const li = document.createElement("li");

        const title = document.createElement("h3");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        const userId = document.createElement("small");
        userId.textContent = post.userId;

        li.appendChild(title);
        li.appendChild(body);        
        li.appendChild(userId);

        textIdContainer.appendChild(li)
    })
}

xhr.onerror = function() {
    console.error('error_error')
}

xhr.send()


const textIdContainer3= document.getElementById("post-container");

const xhr = new XMLHttpRequest;

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts","true")

xhr.onload = function(){
    data.forEach(post => {

        
    })
}

























