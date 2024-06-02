let timeoutId; // Global variable to store timeout ID

document.querySelectorAll(".hobbies li").forEach((item) => {
  item.addEventListener("mouseover", (event) =>
    openModal(event.target.dataset.hobby)
  );
  item.addEventListener("mouseout", closeModal);
});

function openModal(hobby) {
  let modal = document.getElementById("myModal");
  let modalText = document.getElementById("modalText");

  switch (hobby) {
    case "anime":
      modalText.innerHTML =
        "Did you know that the word 'anime' is derived from the English word 'animation' and refers specifically to animation from Japan?";
      break;
    case "manga":
      modalText.innerHTML =
        "The world's longest-running manga series is 'Golgo 13,' which has been serialized since 1968 and has over 600 volumes!";
      break;
    case "books":
      modalText.innerHTML =
        "The term 'bookworm' dates back to the 1500s and originally referred to insects that would bore into books, eating the paper and bindings!";
      break;
    case "running":
      modalText.innerHTML =
        "Running is a great way to stay fit and healthy, and it releases endorphins that can improve your mood!";
      break;
    case "history":
      modalText.innerHTML =
        "Ukrainian history is rich and diverse, spanning centuries of culture, conflicts, and achievements!";
      break;
  }

  modal.style.display = "block"; // Show the modal
  clearTimeout(timeoutId); // Clear any existing timeout
}

function closeModal() {
  let modal = document.getElementById("myModal");
  timeoutId = setTimeout(function () {
    modal.style.display = "none";
  }, 2300);
}
