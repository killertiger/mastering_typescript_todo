const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("#todoform")! as HTMLFormElement;

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log("SUBMITTED!");
}

form.addEventListener("submit", handleSubmit);

// btn?.addEventListener("click", function() {
//     console.log(input.value);
//     input.value = "";
//     // console.log("Button clicked");
// });