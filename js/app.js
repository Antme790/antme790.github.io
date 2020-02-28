var button = document.querySelector(".hamburger");
var menu = document.querySelector(".menuItems");
var head = document.querySelector("nav");
var lis = document.querySelectorAll("#top ul li");
var logo = document.querySelector(".logo");
var guide = document.querySelector(".bottomGuide");
var hero = document.querySelector(".heroInfo");
var offset = null;
var offsetOpacity = null;
var offsetOutput = "";

button.addEventListener("click", function() {
  if(!menu.classList.contains("menuItems-open")) {
    menu.classList.remove("DNONE");
    setTimeout(() => {
      menu.classList.add("menuItems-open");
      menu.classList.add("opacity-full");
    }, 50);
    setTimeout(function() {
      // Add opacity to all lis
      for (var i = 0; i < lis.length; i++) {
          (function (i) {
            setTimeout(function () {
              lis[i].style.opacity = "1";
            }, 300 + (200*i));
          })(i);
        };
      
      // Add movement to all lis
      for (var i = 0; i < lis.length; i++) {
          (function (i) {
            setTimeout(function () {
              lis[i].style.transform = "translateY(0)";
            }, 300 + (200*i));
          })(i);
        };
      }, 200);
  } else {
      menu.classList.remove("menuItems-open");
      setTimeout(() => {
        menu.classList.remove("opacity-full");
      }, 600);
      // Set li opacity back to 0 after menu closes
      lis.forEach(function(li) {
          setTimeout(function() {
              li.style.opacity = "0";
          }, 610)
      });
      // move li back after menu closes
      for (var i = 0; i < lis.length; i++) {
        (function (i) {
          setTimeout(function () {
            lis[i].style.transform = "translateY(-1rem)";
          }, 601);
        })(i);
      };
      // Set display:none on menu after it closes
      setTimeout(function(){
        if(!menu.classList.contains("menuItems-open")) {
          menu.classList.add("DNONE");
        }
      }, 600);
  }
});

// Animate nav on scroll
window.onscroll = function() {scrollOpacity(), scrollFunction()};

function scrollFunction() {
  // Animate when window scrolls past 100vh
  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    if(!head.classList.contains("nav-open")) {
      // Move nav top top and hide it
      head.classList.add("nav-fixed");
      setTimeout(() => {
        // Add transtion to nav
        head.classList.add("nav-animation");
        setTimeout(() => {
          // Animate nav slide-down
          head.classList.add("nav-open");
        }, 300);
      }, 100);
    }
    // Animate when window scrolls back to or less than 100vh-height of nav
  } else if(document.body.scrollTop < window.innerHeight || document.documentElement.scrollTop < window.innerHeight) {
    head.classList.remove("nav-open", "nav-animation", "nav-fixed");
  }
}

function scrollOpacity() {
  // Execute if window is not scrolled past 100vh
  if(document.documentElement.scrollTop < window.innerHeight) {
    // Convert pixel offset from window top to a percentage value
    offset =  Math.round((document.documentElement.scrollTop / window.innerHeight)*100);
    // Multiply the remainder up to target opacity with offset percent
    offsetOpacity = 0.6 + ((0.35/95)*offset);
    // Save final output
    offsetOutput = "rgba(44, 44, 44, " + offsetOpacity + ")"
    // Apply Output to nav inline CSS
    head.style.backgroundColor = offsetOutput;

    // fade out guide on scroll based on offset
    guide.style.opacity = (50-offset)/100;
    // Set full opacity if pages is scrolled to top
    if(offset == 0) {
      guide.style.opacity = "1";
    }
    
    // fade out title text on scroll based on offset
    hero.style.opacity = (80-offset)/100;
    // Set full opacity if pages is scrolled to top
    if(offset == 0) {
      hero.style.opacity = "1";
    }
  }
}

