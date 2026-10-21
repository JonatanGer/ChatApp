const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();
//Kontrollerar användarnamnet innan man får börja chatta
const usernameInput = document.getElementById("usernameInput");
const joinButton = document.getElementById("joinButton");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messagesList = document.getElementById("messagesList");


let username = "";

//Kontrollerar användarnamnet innan man får börja chatta
joinButton.addEventListener("click", function () {
    const name = usernameInput.value.trim();

    if (name === "") {
        alert("Du måste skriva ett användarnamn");
        return;
    }

    username = name;

    usernameInput.disabled = true;
    joinButton.disabled = true;
    messageInput.disabled = false;
    sendButton.disabled = false;
});


//Visar meddelanden som kommer från servern
connection.on("ReceiveMessage", function (username, message) {
    const li = document.createElement("li");
    li.textContent = username + ": " + message;
    messagesList.appendChild(li);
});

//Skickar meddelandet till servern
sendButton.addEventListener("click", async function () {
    const message = messageInput.value.trim();

    if (username === "" || message === "") {
        alert("Du måste skriva ett meddelande");
        return;
    }

    try {
        await connection.invoke("SendMessage", username, message);
        messageInput.value = "";
    } catch (error) {
        alert("Kunde inte skicka meddelandet");
        console.error(error);
    }
});

//Startar anslutningen till servern
sendButton.disabled = true
messageInput.disabled = true;
joinButton.disabled = true;

connection.start()
    .then(function () {
        joinButton.disabled = false;
    })
    .catch(function (error) {
        console.error(error);
        alert("Kunde inte ansluta till chatten");
    });
