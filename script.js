onload = () => {
    document.body.classList.remove("container");
  };
const toggleBtn = document.getElementById("toggleNoteBtn");
const note = document.getElementById("note");

let isVisible = false;

toggleBtn.addEventListener("click", () => {
  if (!isVisible) {
    note.classList.remove("hidden");
    setTimeout(() => note.classList.add("show"), 10);
    toggleBtn.textContent = "CLOSE";
  } else {
    note.classList.remove("show");
    setTimeout(() => note.classList.add("hidden"), 400);
    toggleBtn.textContent = "OPEN";
  }
  isVisible = !isVisible;
});
