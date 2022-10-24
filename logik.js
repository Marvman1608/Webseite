//Als erstes verbergen!!!
document.getElementById("Bild3").style.display = "none";
document.getElementById("Bild1").style.display = "none";
document.getElementById("Bild2").style.display = "none";
document.getElementById("Textteil-left").style.display = "none";
document.getElementById("navigation").style.display = "none";
document.getElementById("footer").style.display = "none";

function Anzeigen(nr) {
   if (nr === 1) {
    document.getElementById("Bild3").style.display = "none";
    document.getElementById("Bild1").style.display = "block";
    document.getElementById("Bild2").style.display = "block";
    document.getElementById("Textteil-left").style.display = "block";
    document.getElementById("navigation").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("Startseite").style.display = "none";
   }
   if (nr === 2) {
    document.getElementById("Bild3").style.display = "block";
    document.getElementById("Bild1").style.display = "none";
    document.getElementById("Bild2").style.display = "none";
    document.getElementById("Textteil-left").style.display = "none";
    document.getElementById("navigation").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("Startseite").style.display = "none";
   }
   if (nr === 3) {
      document.getElementById("Startseite").style.display = "block";
      document.getElementById("Bild3").style.display = "none";
      document.getElementById("Bild1").style.display = "none";
      document.getElementById("Bild2").style.display = "none";
      document.getElementById("Textteil-left").style.display = "none";
      document.getElementById("navigation").style.display = "none";
      document.getElementById("footer").style.display = "none";
}
}
