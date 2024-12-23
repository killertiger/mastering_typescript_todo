const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("#todoform")! as HTMLFormElement;
const list = document.getElementById("todolist")!;

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodoText = input.value;
    const newLi = document.createElement("LI");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(newTodoText);
    newLi.append(checkbox);
    list.append(newLi);
    input.value = "";
}

form.addEventListener("submit", handleSubmit);

// btn?.addEventListener("click", function() {
//     console.log(input.value);
//     input.value = "";
//     // console.log("Button clicked");
// });