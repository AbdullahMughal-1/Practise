
const input = document.querySelector("input");
const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", function (event) {
    event.preventDefault();

    const email = input.value.trim();
    const message = document.createElement("h4");

    if (
        email.endsWith("@gmail.com") ||
        email.endsWith("@protonmail.com") ||
        email.endsWith("@yahoo.com")
    ) {}
    else {
        message.textContent = "Please enter a valid email";
    }

    output.innerHTML = ""; 
    output.appendChild(message);
});
