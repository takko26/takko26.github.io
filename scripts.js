document.getElementById("buildheader").innerHTML += 
"<div class='title1 clearfix'>"+
"<div style='float: left;'>"+
"<h1 class='ubuntufont'><img class='icontako' src='img/icontako.png'> Takotito</h1>"+
"</div> <div class='takomenu'> <nav>"+
        "<a class='menulink' href='index.html'>Home</a>"+
        "<a class='menulink' href='comm-info.html'>Commission Information</a>"+
        "<a class='menulink' href='portfolio.html'>Portfolio</a>"+
        "<div class='animation start-home'></div>"+
"</nav> </div> </div>";
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
