let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  let container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((n, i) => {
    let div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
      ${n}
      <button class="deleteBtn" onclick="deleteNote(${i})">✖</button>
    `;

    container.appendChild(div);
  });
}

function addNote() {
  let input = document.getElementById("noteInput");

  if (input.value === "") return;

  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes));

  input.value = "";
  renderNotes();
}

function deleteNote(i) {
  notes.splice(i, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

function toggleMode() {
  document.body.classList.toggle("dark");
}

function enterApp() {
  let welcome = document.getElementById("welcomeScreen");
  let app = document.getElementById("app");

  welcome.style.opacity = "0";

  setTimeout(() => {
    welcome.style.display = "none";
    app.style.display = "block";
  }, 300);
}
renderNotes();
