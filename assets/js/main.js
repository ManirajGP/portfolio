// Icon Animation
function startAnimation() {
  document.getElementById('bg').style.animation = 'drawBg 3s ease forwards, fillColor 2s ease 3s forwards';
  document.getElementById('grRounded1').style.animation = 'drawRounded 3s ease forwards, fillWhite 2s ease 3s forwards';
  document.getElementById('grRounded2').style.animation = 'drawRounded 3s ease forwards, fillWhite 2s ease 3s forwards';
  document.getElementById('grRounded3').style.animation = 'drawRounded 3s ease forwards, fillWhite 2s ease 3s forwards';
}

startAnimation(); // Start the animation immediately

// Mobile Menu
// Get all elements with the class "mblNavBtn"
var mblopnclsbtn = document.querySelectorAll(".mblNavBtn");

// Iterate through the NodeList and add an event listener to each element
mblopnclsbtn.forEach(function(mblopnclsbtn) {
    mblopnclsbtn.addEventListener("click", function() {
    var btmnu = document.getElementById("btmnu");
    if (btmnu.classList.contains("bg-glassy")) {
      btmnu.classList.remove("bg-glassy");
      btmnu.classList.remove("border");
      btmnu.classList.remove("border-5");
      btmnu.classList.remove("border-top-0");
      btmnu.classList.remove("border-bottom-0");
    } else {
      btmnu.classList.add("bg-glassy");
      btmnu.classList.add("border");
      btmnu.classList.add("border-5");
      btmnu.classList.add("border-top-0");
      btmnu.classList.add("border-bottom-0");
    }
  });
});

// Footer -Current Year Update
document.getElementById("currentYear").textContent = new Date().getFullYear();