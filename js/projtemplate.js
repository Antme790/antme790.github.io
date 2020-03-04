function copyTemplate(templateId, targetContainerId) {
  var templateElement = document.getElementById(templateId); 
  var targetContainer = document.getElementById(targetContainerId);

  var newElement = document.createElement(templateElement.tagName);
  newElement.setAttribute("class", templateElement.getAttribute("class"));
  newElement.innerHTML = templateElement.innerHTML;

  targetContainer.appendChild(newElement)
}

function addText(templateId, targetContainerClass) {
  var containerConcat = "." + targetContainerClass;

  var templateElement = document.getElementById(templateId); 
  var targetContainer = document.querySelectorAll(containerConcat);

  for(var i = 0; i < targetContainer.length; i++) {
    var newElement = document.createElement(templateElement.tagName);
    newElement.setAttribute("class", templateElement.getAttribute("class"));
    newElement.innerHTML = templateElement.innerHTML;
    targetContainer[i].appendChild(newElement);
  }
}

function removeLast(targetContainerId) {
  var targetContainer = document.getElementById(targetContainerId);
  var lastElement = targetContainer.lastElementChild;

  if (lastElement !== null) {
    targetContainer.removeChild(lastElement);
  }
}

function toggleButtons() {
  var buttons = document.getElementById("buttons");
  var toggleButton = document.getElementById("toggleBtn");
  if (buttons.style.display === "none") {
    buttons.style.display = "flex";
    toggleButton.innerHTML = "🐵"
  } else {
    buttons.style.display = "none";
    toggleButton.innerHTML = "🙈"
  }
}