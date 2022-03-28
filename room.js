
   var firebaseConfig = {
      apiKey: "AIzaSyCq-jwd7M4QrCoNy6O8Ro18mRZwD-k8GxA",
      authDomain: "let-s-chat-c6b6f.firebaseapp.com",
      databaseURL: "https://let-s-chat-c6b6f-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-c6b6f",
      storageBucket: "let-s-chat-c6b6f.appspot.com",
      messagingSenderId: "421891685386",
      appId: "1:421891685386:web:16e840316863e157e833f3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


function logout(){
      window.location= "index.html";
      }
      
      function addRoom(){
      room_name= document.getElementById("add_room").value;
      firebase.database().ref("/").child(room_name).update({
      Room: room_name
      });
      }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


