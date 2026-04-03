let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
    let container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach((n, index) => {
        let div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
            ${n}
            <button class="deleteBtn" onclick="deleteNote(${index})">❌</button>
        `;

        container.appendChild(div);
    });
}

function addNote() {
    let input = document.getElementById("noteInput");

    if (input.value === "") {
        alert("Isi dulu dong 😤");
        return;
    }

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

renderNotes();