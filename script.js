var menuToggle='closed';

function toggleNav() {

    if (menuToggle=='closed'){
      document.getElementById("mySidenav").style.width = "20em";
      var x = document.getElementById("mySidenav");
      var y = x.getElementsByTagName("P");
      var i;
      for (i = 0; i < y.length; i++) {
        y[i].style.display = "inline-block";
      }
      menuToggle='open'
    }

    else if (menuToggle=='open'){
      document.getElementById("mySidenav").style.width = "7em";
      var x = document.getElementById("mySidenav");
      var y = x.getElementsByTagName("P");
      var i;
      for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
      }
      menuToggle='closed'
    }
}

/* Set the width of the side navigation to 20em */
function openNav() {
    document.getElementById("mySidenav").style.width = "90%";
}

/* Set the width of the side navigation to 5em */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function upNav() {
    document.getElementById("payPanel").style.height = "100em";
}
