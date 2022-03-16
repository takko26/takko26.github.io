document.getElementById("buildheader").innerHTML += 
'<div class="navbar-main clearfix"><div class="navbar-container"><div class="navbar-buttons"><a class="nav-text-main ubuntufont whitetxt"><img id="icontako" src="resources/img/icontako.png" alt="nav-icon"> &nbsp; TAKKOTITO</a></div><div class="navbar-buttons"><a class="nav-text-md ubuntufont whitetxt" href="index.html"> HOME</a><a class="nav-text-md ubuntufont whitetxt" href="about.html"> ABOUT</a><a class="nav-text-md ubuntufont whitetxt" href="portfolio.html"> PORTFOLIO</a></div><div class="navbar-buttons"><a class="nav-text-md ubuntufont whitetxt" href="comm-info.html"> COMMISSION INFO</a></div></div></div><div class="navbar-back"> </div>';
if (document.getElementById("tako")) {
    document.getElementById("tako").onmouseover = function () { HPdie() };
    document.getElementById("tako").onmouseleave = function () { HPreset() };
    function HPdie() {
        document.getElementById("action").style.backgroundColor = "#da431e";
        document.getElementById("action").style.width = "0%";
    }
    function HPreset() {
        document.getElementById("action").style.backgroundColor = "#46c058";
        document.getElementById("action").style.width = "100%";
    }
}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
if (document.getElementById("defaultOpen")) {
    document.getElementById("defaultOpen").click();
  }