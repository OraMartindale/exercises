const contents = document.querySelectorAll('.content');
const links = document.querySelectorAll('li');

links.forEach((link, index) => {
  link.addEventListener('click', () => {
    contents.forEach(content => content.classList.remove('show'));
    contents[index].classList.add('show');
    links.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});
