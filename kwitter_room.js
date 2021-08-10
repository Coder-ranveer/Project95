
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDGugHQn6NA548v4nbynZ3iomK_Gs-fzC4",
    authDomain: "kwitter-76b83.firebaseapp.com",
    databaseURL: "https://kwitter-76b83-default-rtdb.firebaseio.com",
    projectId: "kwitter-76b83",
    storageBucket: "kwitter-76b83.appspot.com",
    messagingSenderId: "437176650649",
    appId: "1:437176650649:web:39ce3d9b1c82aa5eee2108"
  };
  // Initialize Firebase
var welcomeusername=localStorage.getItem("input1");
console.log(welcomeusername);
document.getElementById("welcome").innerHTML="welcome"+welcomeusername;
function addRoom()
{
  roomname = document.getElementById("input2").value;
  console.log(roomname);
  firebase.database().ref("/users").child(roomname).update(
    {
       purpose: "adding room" 
    }
)
localStorage.setItem("roomname", roomname);
//window.location = "kwitter_page.html";
}
function redierect(name)
{
console.log(name);
localStorage.setItem("Room_name",name);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log(Room_names);
row = "<div class='rowroomname' id='"+Room_names+"' onclick='redirect(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row;
 //End code
 });});}
 getData();