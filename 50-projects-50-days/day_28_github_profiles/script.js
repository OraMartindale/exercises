const API_URL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

form.addEventListener('submit', event => {
  event.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = '';
  }
});

const getUser = username => {
  axios.get(`${API_URL}${username}`)
    .then(response => {
      const { data } = response;
      createUserCard(data);
      getRepos(data.login);
    })
    .catch(error => {
      if (error.response.status === 404) {
        createErrorCard('User not found.');
      }
    });
};

const getRepos = username => {
  axios.get(`${API_URL}${username}/repos?sort=created`)
    .then(response => {
      const { data } = response;
      addReposToCard(data);
    })
    .catch(error => {
      console.error(error);
      createErrorCard('Problem fetching repos.');
    });
};

const createUserCard = user => {
  const { avatar_url, name, login, bio, followers, following, public_repos } = user;
  main.innerHTML = `
  <div class="card">
    <div>
      <img src="${avatar_url}" alt="" class="avatar">
    </div>
    <div class="user-info">
      <h2>${name ? name : login }</h2>
      <p>
        ${bio ? bio : ''}
      </p>
      <ul>
        <li>${followers} <strong>Followers</strong></li>
        <li>${following} <strong>Following</strong></li>
        <li>${public_repos} <strong>Repos</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>
  `;
};

const createErrorCard = message => {
  main.innerHTML = `
    <div class="card">
      <h1>${message}</h1>
    </div>
  `;
};

const addReposToCard = repos => {
  const reposElement = document.getElementById('repos');
  repos
    .slice(0, 5)
    .forEach(repo => {
      const repoElement = document.createElement('a');
      repoElement.classList.add('repo');
      repoElement.href = repo.html_url;
      repoElement.target = '_blank';
      repoElement.innerText = repo.name;

      reposElement.appendChild(repoElement);
    });
};
