const API_URL = 'https://randomuser.me/api/?results=20';

const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

filter.addEventListener('input', event => filterData(event.target.value));

const filterData = searchTerm => {
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
};

const getData = () => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      result.innerHTML = '';

      data.results.forEach(user => {
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
          <img src="${user.picture.large}" alt="${user.name.first}">
          <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
          </div>
        `;

        result.appendChild(li);
      });

    })
    .catch(console.error)
};

getData();
