var firebaseConfig = {
  apiKey: "AIzaSyDjKxuAT63I7dAdEcqjrp7_dqvEvTvGGWA",
  authDomain: "ecetsolutions-e7fd2.firebaseapp.com",
  databaseURL: "https://ecetsolutions-e7fd2.firebaseio.com",
  projectId: "ecetsolutions-e7fd2",
  storageBucket: "ecetsolutions-e7fd2.appspot.com",
  messagingSenderId: "618179079881",
  appId: "1:618179079881:web:28d712d07ce3217eb16718",
  measurementId: "G-3R84FDC73Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //alert("logged in");
    $("#mail-label").text(user.email)
    $(".discuss1").hide();
    $(".dropleft").show();
    $(".close").click();
    localStorage.setItem("usermail",user.email);
  } else {
    //alert("logged out");
    $(".dropleft").hide();
    $(".discuss1").show();
    localStorage.removeItem("usermail");
    
  }
}); 


function login() {
    //alert("o");
    var uname = document.getElementById("uname").value;
    var upass = document.getElementById("upass").value;
    //alert(uname+upass);
    if(uname != "" && upass != "") {
      $(".loadin").empty();
      $(".loadin").append("<div class=\"loader\"></div>");
      firebase.auth().signInWithEmailAndPassword(uname, upass).then( function() {
          $(".loadin").empty();
          $(".loadin").append("Log in");
          //alert("logged in");
      }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode+":"+errorMessage);
          $(".loadin").empty();
          $(".loadin").append("Log in");
      });
    }
  }
  
function logout() {
  firebase.auth().signOut().then(function() {
      //alert("logged out");
      window.open("index.html","_self");
  }).catch(function(error) {
    alert(error);
  });
}

function register() {
  //var rname = document.getElementById("uname").value;
  var remail = document.getElementById("remail").value;
  var rpass = document.getElementById("rpass").value;
  if(remail != "" && rpass != "") {
      $(".regin").empty();
      $(".regin").append("<div class=\"loader\"></div>");
      firebase.auth().createUserWithEmailAndPassword(remail, rpass).then(function() {
      //alert("registered");
      $(".regin").empty();
      $(".regin").append("Register");
      $(".close").click();
      //alert(firebase.auth().email);
      $("#wuser").text(remail)
      $(".regbutton").click();
      }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode+":"+errorMessage);
      $(".regin").empty();
      $(".regin").append("Register");
      });
  }
}

function glog() {
var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
  //alert("logged in");
  $(".close").click();
  localStorage.setItem("usermail",firebase.auth().currentUser.email);

}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  alert(errorCode+":"+errorMessage);
});
}

function forgot() {
//alert("a");
var uname = document.getElementById("uname").value;
if(uname == "") {
  alert("enter email");
}
else {
  //alert(uname);
  var auth = firebase.auth();
  var email = uname;
  auth.sendPasswordResetEmail(email).then(function() {
    alert("check your email");
  }).catch(function(error) {
    // An error happened.
    alert(error);
  });
}
}

$("#nav-home-tab").click(()=> {
  $("#nav-home-tab").css('background-color', '#2196f3');
  $("#nav-home-tab").css('color', '#fff');
  $("#nav-profile-tab").css('background-color', '#fff');
  $("#nav-profile-tab").css('color', '#000');
});

$("#nav-profile-tab").click(()=> {
  $("#nav-profile-tab").css('background-color', '#2196f3');
  $("#nav-profile-tab").css('color', '#fff');
  $("#nav-home-tab").css('background-color', '#fff');
  $("#nav-home-tab").css('color', '#000');
});

$("#nav-home-tab2").click(()=> {
  $("#nav-home-tab2").css('background-color', '#2196f3');
  $("#nav-home-tab2").css('color', '#fff');
  $("#nav-profile-tab2").css('background-color', '#fff');
  $("#nav-profile-tab2").css('color', '#000');
});

$("#nav-profile-tab2").click(()=> {
  $("#nav-profile-tab2").css('background-color', '#2196f3');
  $("#nav-profile-tab2").css('color', '#fff');
  $("#nav-home-tab2").css('background-color', '#fff');
  $("#nav-home-tab2").css('color', '#000');
});
/*function forgot() {

}
function glog() {

}
function register() {

}
function logout() {

}
function login() {

}*/