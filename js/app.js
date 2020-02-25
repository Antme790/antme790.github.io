var button = document.querySelector(".hamburger");
var menu = document.querySelector(".menuItems");
var head = document.querySelector("nav");
var lis = document.querySelectorAll("nav ul li");
var logo = document.querySelector(".logo");

// Add attributes to menu(because of DOM Bug?)
menu.style.transform = "translateX(100%)";
// menu.style.top = (head.clientHeight-2 + "px");

button.addEventListener("click", function() {
    if(menu.style.transform == "translateX(100%)") {
        menu.style.display = "flex";
        setTimeout(function() {
          menu.style.opacity = "0";
        menu.style.transform = "translateX(0)";
        menu.style.boxShadow = "-5px 25px 30px -1px rgba(0,0,0,0.1)";
        menu.style.opacity = "1";

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
        // head.style.height = (head.clientHeight + "px");
        button.style.position = "fixed";
        button.style.top = (((head.offsetHeight/2)-(button.offsetHeight/2)) + "px");
        }, 200);
    } else {
        menu.style.transform = "translateX(100%)";
        menu.style.boxShadow = "none";
        lis.forEach(function(li) {
            setTimeout(function() {
                li.style.opacity = "0";
            }, 610)
        });

        for (var i = 0; i < lis.length; i++) {
          (function (i) {
            setTimeout(function () {
              lis[i].style.transform = "translateY(-1rem)";
            }, 601);
          })(i);
        };
        button.style.position = "static";
        setTimeout(function(){
          menu.style.display = "none";
        }, 600);
    }
});

// Animate nav on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Animate when window scrolls past 100vh
  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    if(head.style.position === "absolute") {
      button.style.opacity = "0";
      head.style.position = "fixed";
      head.style.transform = "translateY(-100%)";
      head.style.transition = "all 300ms";
      setTimeout(function() {
        button.style.transition = "all 300ms";
        button.style.transitionDelay = "300ms";
        button.style.opacity = "100";
        head.style.transform = "translateY(0)";
        head.style.backgroundColor = "rgba(44, 44, 44, 0.95)";
      }, 200);
    }
    // Animate when window scrolls back to or less than 100vh
  } else if(document.body.scrollTop < window.innerHeight || document.documentElement.scrollTop < window.innerHeight) {
    button.style.transition = "all 0ms";
    button.style.transitionDelay = "0ms";
    button.style.opacity = "100";
    head.style.transition = "all 0ms";
    head.style.backgroundColor = "transparent";
    head.style.position = "absolute";
  }
}

