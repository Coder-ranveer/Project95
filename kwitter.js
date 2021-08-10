function addUser()
{
  add = document.getElementById("input1").value;
  localStorage.setItem("username",add);
  window.location = "kwitter_room.html";  
}