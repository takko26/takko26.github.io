document.getElementById("buildheader").innerHTML +=
  '<div class="navbar-main clearfix"><div class="navbar-container"><div class="navbar-buttons"><img class="icontext" id="icontako" src="resources/img/icontako.png" alt="nav-icon"><a class="nav-text-main ubuntufont whitetxt" href="index.html">&nbsp; TAKKOTITO</a><a class="nav-text-md ubuntufont whitetxt" href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16"> <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/></svg></a></div><div class="navbar-buttons"><a class="nav-text-md ubuntufont whitetxt" href="about.html"> ABOUT</a><a class="nav-text-md ubuntufont whitetxt" href="portfolio.html"> PORTFOLIO</a></div><div class="navbar-buttons"><a class="nav-text-md ubuntufont whitetxt" href="comm-info.html"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>&nbsp; COMMISSIONS</a></div></div></div><div class="navbar-back"> </div>';
if (document.getElementById("tako")) {
  var takoimg = document.getElementById("tako");
  var oddEven = 1;
  var takomode = 0;
  let int1;
  var hptotal = 250;
  var hpnow = hptotal;
  var ko = false;

  takoimg.onclick = function () { if (!ko) {checkFunc(1);} };

    function checkFunc(takomode) {
      switch (takomode) {
        case 0:
          clearInterval(int1);
          if (!ko) { int1 = setInterval(function () { changeBackground() }, 500); }
          break;
        case 1:
          clearInterval(int1);
          changeSprite("resources/img/ico/takko22_sprsheet.png", "0", "495");
          HPdie();
          setTimeout(function () { checkFunc(2) }, 500);
          break;
        case 2:
          clearInterval(int1);
          changeSprite("resources/img/ico/takko22_sprsheet.png", "-515", "456");
          if (!ko) {
            setTimeout(function () { checkFunc(0) }, 1000);
          }
          else {
            setTimeout(function () { checkFunc(0) }, 4000);
          }
          break;
        default:
          break;
      }
    }
  function changeBackground() {
    if (oddEven) {
      changeSprite("resources/img/ico/takko22_sprsheet.png", "-515", "0");
      oddEven = 0;
    }
    else {
      changeSprite("resources/img/ico/takko22_sprsheet.png", "0", "0");
      oddEven = 1;
    }
  }
  function changeSprite(img, sp1, sp2) {
    takoimg.style.background = "url(" + img + ")";
    takoimg.style.backgroundPosition = sp1 + "px " + sp2 + "px";
  }
  function HPdie() {
    dmg = Math.floor(Math.random() * (55 - 5)) + 5;
    hpnow = hpnow-dmg;
    hpnow = Math.min(Math.max(hpnow, 0), 250);
    if (hpnow > 0) {
      hpconverted = (Math.floor(hpnow*86/250));
      document.getElementById("action").style.backgroundColor = "#da431e";
      document.getElementById("action").style.width = hpnow+"px";
      document.getElementById("hp-p").textContent = ""+hpconverted;
      document.getElementById("dialogue").textContent = "-"+(86-hpconverted)+"HP of damage!";
    } else{
      ko = true;
      document.getElementById("action").style.width = "1px";
      document.getElementById("hpsprite").style.background = "url(resources/img/ico/hpbar2.png)";
      document.getElementById("hp-p").textContent = "0";
      document.getElementById("hpbar").style.backgroundColor = "rgb(0 0 0 / 0%)";
      document.getElementById("dialogue").textContent = "You defeated Takko! Gained 32xp";
      setTimeout(function () { HPreset(); }, 4000);
    }
  }
  function HPreset() {
    ko = false;
    hpnow = hptotal;
        document.getElementById("action").style.width = "250px";
        document.getElementById("action").style.backgroundColor = "#b2f028";
        document.getElementById("hpbar").style.backgroundColor = "#404040";
        document.getElementById("hp-p").textContent = "86";
        document.getElementById("dialogue").textContent = "Rematch!";
        document.getElementById("hpsprite").style.background = "url(resources/img/ico/hpbar1.png)";
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
