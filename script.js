const chatBox = document.getElementById("chatBox");

function addMessage(text, sender) {
  const message = document.createElement("div");

  message.classList.add("message", sender);

  message.innerText = text;

  chatBox.appendChild(message);

  // Auto scroll
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("userInput");

  const text = input.value.trim();

  if (!text) return;

  // User message
  addMessage(text, "user");

  input.value = "";

  // Fake AI response
  setTimeout(() => {
    addMessage(
      "This is a demo AI response 🤖",
      "ai"
    );
  }, 1000);
}