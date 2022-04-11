document.getElementById("buildheader").innerHTML +=
  '<div class="navbar-main clearfix"><div class="navbar-container"><div class="navbar-buttons"><img class="icontext" id="icontako" src="resources/img/icontako.png" alt="nav-icon"><a class="nav-text-main ubuntufont whitetxt">&nbsp; TAKKOTITO</a></div><div class="navbar-buttons"><a class="nav-text-md ubuntufont whitetxt" href="index.html"> HOME</a><a class="nav-text-md ubuntufont whitetxt" href="about.html"> ABOUT</a><a class="nav-text-md ubuntufont whitetxt" href="portfolio.html"> PORTFOLIO</a></div><div class="navbar-buttons"><a class="nav-text-md ubuntufont whitetxt" href="comm-info.html"> COMMISSION INFO</a></div></div></div><div class="navbar-back"> </div>';
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
