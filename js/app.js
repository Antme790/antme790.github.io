var button = document.querySelector(".hamburger");
var menu = document.querySelector(".menuItems");
var head = document.querySelector("header");
var lis = document.querySelectorAll("nav ul li");

// Add attributes to menu(because of DOM Bug?)
menu.style.transform = "translateX(100%)";
menu.style.top = (head.clientHeight-2 + "px");

button.addEventListener("click", function() {
    if(menu.style.transform == "translateX(100%)") {
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
    }   
});