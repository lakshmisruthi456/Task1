function validateForm() { 
  // Get values 
  const name = document.getElementById("name").value.trim(); 
  const email = document.getElementById("email").value.trim(); 
  const message = document.getElementById("message").value.trim(); 
 
  // Basic Validation 
  if (!name  !message) { 
    alert("Please fill in all fields."); 
    return false; 
  } 
 
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
  if (!email.match(emailPattern)) { 
    alert("Please enter a valid email address."); 
    return false; 
  } 
  alert("Form submitted successfully!"); 
 
  document.querySelector("form").reset(); 
  document.getElementById("taskList").innerHTML = ""; 
  document.getElementById("gallery").innerHTML = ""; 
 
  return false; // Prevent actual form submission (since there's no backend) 
} 
 
// To-Do list 
function addTask() { 
  const taskInput = document.getElementById("taskInput"); 
  const taskText = taskInput.value.trim(); 
 
  if (taskText === "") { 
    alert("Please enter a task!"); 
    return; 
  } 
 
  const taskList = document.getElementById("taskList"); 
 
  const li = document.createElement("li"); 
  li.textContent = taskText; 
 
  const deleteBtn = document.createElement("button"); 
  deleteBtn.textContent = "Delete"; 
  deleteBtn.onclick = function () { 
    taskList.removeChild(li); 
  }; 
 
  li.appendChild(deleteBtn); 
  taskList.appendChild(li); 
 
  taskInput.value = ""; 
} 
function addImage() { 
  const input = document.getElementById("imageInput"); 
  const gallery = document.getElementById("gallery"); 
 
  const file = input.files[0]; 
  if (!file) { 
    alert("Please choose an image to upload!"); 
    return; 
  } 
 
  const reader = new FileReader(); 
  reader.onload = function (e) { 
    const imgWrapper = document.createElement("div"); 
    imgWrapper.classList.add("image-wrapper"); 
 
    const img = document.createElement("img"); 
    img.src = e.target.result; 
 
    const removeBtn = document.createElement("button"); 
    removeBtn.textContent = "×"; 
    removeBtn.onclick = function () { 
      gallery.removeChild(imgWrapper); 
    }; 
 
    imgWrapper.appendChild(img); 
    imgWrapper.appendChild(removeBtn); 
    gallery.appendChild(imgWrapper); 
  }; 
 
  reader.readAsDataURL(file); 
  input.value = ""; // reset input 
}
