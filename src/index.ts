const btn = document.getElementById("btn");
const input = document.getElementById("todoinput") as HTMLInputElement;
console.log(btn);

btn?.addEventListener("click", function() {
    console.log(input.value);
    input.value = "";
    // console.log("Button clicked");
});