const today = new Date();
let thisYear = today.getFullYear(); // output: "2023"

let footer = document.querySelector("footer");
let copyright = document.createElement("p");

copyright.innerHTML = "Tony Baldessari © " + thisYear;

footer.appendChild(copyright);

const skills = ["HTML", "CSS", "JavaScript", "Git", "Github", "Linux"];

let skillSection = document.querySelector("#skills");

let skillList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillList.appendChild(skill);
}

// Get the form element
const messageForm = document.forms.leave_message;

// Add event listener to the form's submit event
messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form field values
  const usersName = messageForm.usersName.value;
  const usersEmail = messageForm.usersEmail.value;
  const usersMessage = messageForm.usersMessage.value;

  // Log the form field values for TESTING
  console.log("Name:", usersName);
  console.log("E-mail:", usersEmail);
  console.log("Message:", usersMessage);
  // Later with the final project DELETE THOSE CONSOLE.LOG ABOVE!!!!!

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  messageList.setAttribute('class', 'users-messages-list');

  let newMessage = document.createElement("li");
  newMessage.setAttribute('class', 'new-messages-li');
  newMessage.innerHTML = `
  <a href="mailto:${usersEmail}" class="user_mail">${usersName}</a>
  <span>${usersMessage}</span>
`;

  // Function to check if the message list is empty
  function isMessageListEmpty() {
    const messages = messageList.querySelectorAll("li");
    for (const message of messages) {
      if (!message.querySelector("button.edit")) {
        return false;
      }
    }
    return true;
  }

  // Function to show/hide the #messages section
  function toggleMessageSectionVisibility() {
    if (isMessageListEmpty()) {
      messageSection.style.display = "none";
    } else {
      messageSection.style.display = "block";
    }
  }

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.setAttribute('class', 'remove-btn');
  
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.type = "button";
  editButton.setAttribute('class', 'edit-btn');

  editButton.addEventListener("click", function () {
    const messageText = newMessage.querySelector("span");
    const messageTextInput = document.createElement("input");
    messageTextInput.type = "text";
    messageTextInput.value = messageText.innerText;

    // Replace the message text with the input field
    newMessage.replaceChild(messageTextInput, messageText);

    // Set focus on the input field
    messageTextInput.focus();

    // Function to handle saving the updated message
    function saveMessage() {
      const updatedMessage = document.createElement("span");
      updatedMessage.innerText = messageTextInput.value;

      // Replace the input field with the updated message
      newMessage.replaceChild(updatedMessage, messageTextInput);

      // Re-enable the edit button
      editButton.disabled = false;
    }

    // Event listener for input field keydown
    messageTextInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        saveMessage();
      }
    });

    // Disable the edit button while editing the message
    editButton.disabled = true;
  });

  removeButton.addEventListener("click", function () {
    // Event handling code goes here
    const entry = removeButton.parentNode;
    entry.remove();
    toggleMessageSectionVisibility(); // Check visibility
  });

  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);

  messageList.appendChild(newMessage);

  // Reset the Form
  messageForm.reset();
  toggleMessageSectionVisibility(); // Check visibility

  // You can perform further actions with the form field values here
});

// NAVBAR BURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

