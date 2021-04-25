const addButton = document.getElementById('add');
const notes = JSON.parse(localStorage.getItem('notes'));

const addNewNote = (text = '') => {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <div class="tools">
      <button class="edit">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  const editButton = note.querySelector('.edit');
  const deleteButton = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked(text);

  editButton.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });
  deleteButton.addEventListener('click', () => {
    note.remove();
    updateLocalStorage();
  });
  textArea.addEventListener('input', event => {
    const { value } = event.target;

    main.innerHTML = marked(value);

    updateLocalStorage();
  });

  document.body.appendChild(note);
};

const updateLocalStorage = () => {
  const textAreas = document.querySelectorAll('textarea');
  const notes = [];

  textAreas.forEach(textArea => notes.push(textArea.value));

  localStorage.setItem('notes', JSON.stringify(notes));
};

if (notes) {
  notes.forEach(note => addNewNote(note));
}
addButton.addEventListener('click', () => addNewNote());
