function toggleContent() {
   var content = document.getElementById("more-content");
   var button = document.getElementById("toggle-button");

   if (content.style.display === "none") {
       content.style.display = "block";
       button.textContent = "Leer Menos";
   } else {
       content.style.display = "none";
       button.textContent = "Leer Más";
   }
}