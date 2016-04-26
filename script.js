function makeOrange() {
  var listItems = document.getElementsByClassName("list-item");
  for (var i = 0; i < listItems.length; i++) {
    addClass(listItems[i], "orange");
  }
}

function returnToBlack() {
  var listItems = document.getElementsByClassName("list-item");
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("orange");
  }
}


function addClass(element, className) {
  element.classList.add(className);
}