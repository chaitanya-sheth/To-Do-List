let input = document.querySelector(".enteredText");
let addButton = document.querySelector(".addButton");
let tasks = document.querySelector(".tasks");

addButton.addEventListener("click", function () {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("inputs");
    newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="btns">
        <i class="fa-solid fa-xmark"></i>
      </div>
        `
    tasks.appendChild(newItem);
    input.value = '';
  } else {
    alert("Please Enter a Task");
  }
});

tasks.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
  }
});
