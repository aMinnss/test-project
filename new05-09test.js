const tableBody = document.querySelector("#usersTable tbody");
const statussDiv = document.getElementById("status");
const refreshBtn = document.getElementById("refreshBtn");

function loadUsers() {
  statusDiv.textContent = "Загрузка...";
  statusDiv.className = "loading";
  tableBody.innerHTML = "";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      statusDiv.textContent = "";
      renderTable(data);
    } else {
      showError("Ошибка загрузки данных. Попробуйте позже.");
    }
  };

  xhr.onerror = function() {
    showError("Ошибка соединения.");
  };

  xhr.send();
}

function renderTable(users) {
  users.forEach(user => {
    const row = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = user.name;

    const email = document.createElement("td");
    email.textContent = user.email;

    const city = document.createElement("td");
    city.textContent = user.address.city;

    row.appendChild(name);
    row.appendChild(email);
    row.appendChild(city);
    tableBody.appendChild(row);
  });
}

function showError(message) {
  statusDiv.textContent = message;
  statusDiv.className = "error";
}

loadUsers();

refreshBtn.addEventListener("click", loadUsers);





const postList = document.getElementById("postList");
const statusDiv = document.getElementById("status");
const loadBtn = document.getElementById("loadBtn");

function loadPosts() {
  statusDiv.textContent = "Загрузка...";
  statusDiv.className = "loading";
  postList.innerHTML = "";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      statusDiv.textContent = "";
      renderPosts(data);
    } else {
      showError("Ошибка загрузки данных");
    }
  };

  xhr.onerror = function() {
    showError("Ошибка соединения");
  };

  xhr.send();
}

function renderPosts(posts) {
  posts.forEach(post => {
    const li = document.createElement("li");
    li.textContent = post.title;
    postList.appendChild(li);
  });
}

function showError(message) {
  statusDiv.textContent = message;
  statusDiv.className = "error";
}

loadBtn.addEventListener("click", loadPosts);