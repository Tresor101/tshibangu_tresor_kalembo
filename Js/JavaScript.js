function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    }

    // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
function myFunctionwhite(){
    document.getElementById("main").style.background = "url('https://thumbs.gfycat.com/BlissfulScentedAustraliancattledog-max-1mb.gif')";
    document.getElementById("main").style.color="black"; document.getElementById("home").style.color="black";
    document.getElementById("service").style.color="black"; document.getElementById("portfolio").style.color="black"; 
    document.getElementById("about").style.color="black";document.getElementById("paragraph").style.color="black";
  }
function myFunctiondarkblue(){
    document.getElementById("main").style.background = 
    "url('https://64.media.tumblr.com/ad2c41f9eb80739d26acbce9c44a65f4/f5cba0d8087dd807-28/s540x810/8322292d06b9629b6f4eb7e6ead0261505c3b961.gifv')";
    document.getElementById("main").style.color="white"; document.getElementById("home").style.color="white"; 
    document.getElementById("service").style.color="white";document.getElementById("portfolio").style.color="white"; 
    document.getElementById("about").style.color="white";document.getElementById("paragraph").style.color="white";
  }
  