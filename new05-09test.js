const tableBody = document.querySelector("#usersTable tbody");
const statusDiv = document.getElementById("status");
const refreshBtn = document.getElementById("refreshBtn");

// функция загрузки данных
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

// функция отрисовки таблицы
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

// функция ошибки
function showError(message) {
  statusDiv.textContent = message;
  statusDiv.className = "error";
}

// при загрузке страницы сразу вызываем
loadUsers();

// по клику на кнопку обновляем
refreshBtn.addEventListener("click", loadUsers);