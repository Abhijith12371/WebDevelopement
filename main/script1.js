    async function fetchCommands() {
        let response = await fetch("commands.json");
        let commands = await response.json();
        return commands;
    }
    
    fetchCommands().then((commands) => {
        commands.forEach((element) => {
        console.log(element);
        let content1 = document.createElement("div");
        content1.classList.add("content");
        content1.innerHTML = `
            <div class="box">
            <h3>${element.description}</h3>
            <h3>Syntax: ${element.syntax}</h3>
            <div class="input-container">
            <textarea class="long-input" readonly>${element.example}</textarea>
                <div class="copy">
                <img src="copy-regular.svg" alt="">
                </div>
            </div>
            </div>
        `;
        document.body.appendChild(content1);
        let copyButton = content1.querySelector(".copy img");
        let inputField = content1.querySelector("textarea");

        let isCopySolid = false; 
        copyButton.addEventListener("click", () => {
            inputField.select();
            document.execCommand("copy");
            if (isCopySolid) {
            copyButton.src = "copy-regular.svg";
            } else {
            copyButton.src = "copy-solid.svg";
            }
            isCopySolid = !isCopySolid;
        });
        });
    });
    

    