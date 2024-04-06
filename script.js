async function fetchCommands() {
    let response = await fetch("commands.json");
    let commands = await response.json();
    return commands;
}

fetchCommands().then(commands => {
    let content = document.querySelector(".content");
    commands.forEach(command => {
        let box = document.createElement("div");
        box.className = "box";

        let description = document.createElement("h3");
        description.textContent = command.description;
        box.appendChild(description);

        let syntax = document.createElement("h3");
        syntax.textContent = "Syntax: " + command.syntax;
        box.appendChild(syntax);

        let inputContainer = document.createElement("div");
        inputContainer.className = "input-container";

        let exampleInput = document.createElement("input");
        exampleInput.type = "text";
        exampleInput.value = command.example;
        exampleInput.readOnly = true; // Set input to readonly
        inputContainer.appendChild(exampleInput);

        let copyIcon = document.createElement("img");
        copyIcon.src = "copy-regular.svg";
        copyIcon.alt = "Copy";
        copyIcon.addEventListener("click", () => {
            exampleInput.select();
            document.execCommand("copy");
            alert("Copied to clipboard!");
        });
        copyIcon.style.cursor = "pointer";
        inputContainer.appendChild(copyIcon);

        box.appendChild(inputContainer);

        content.appendChild(box);
    });
});
