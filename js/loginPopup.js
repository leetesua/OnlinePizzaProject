// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onclick = function(event2) {
    if (event2.target == modal2) {
        modal2.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function btntest_onclick() {
   var a = document.getElementsByClassName(signupbtn)
   if(a.type == "submit")
   {
       window.location.href = "index.html";
   }
}

