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

renderNotes();
function enterApp() {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("app").style.display = "block";
}
