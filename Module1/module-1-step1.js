// Function for adding a greeting to a message.
function addGreeting(message) {
  // Add "Hello! The message is: " to the string.
  let greeting = "Hello! The message is: ";
  return `${greeting}${message}`;
}

// Send a message informing someone of this unit's code.
let unitCode = "IFQ714";
newMessage = addGreeting(unitCode);

// Show the message in the console.
console.log(newMessage);
