// make connection
const socket = io.connect("http://localhost:5000");

// Query DOM
const output = document.getElementById("output"),
  handle = document.getElementById("handle"),
  message = document.getElementById("message"),
  btn = document.getElementById("send"),
  feedback = document.getElementById("feedback");

// Emit events
btn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
});
message.addEventListener("keypress",()=>{
  socket.emit('typing',handle.value);
})

// Listen for events
socket.on("chat", (data) => {
  feedback.innerHTML = "";
  output.innerHTML += `<p><strong>${data.handle} : </strong>${data.message}</p>`;
});
socket.on("typing", (data) => {
  feedback.innerHTML = `<p><em>${data} is typing a message... </em></p>`;
});
