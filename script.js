function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

// function makePurple() {
// 	var p = document.getElementsByClassName("list-item")
// 	if(p.style.color == '#000')
// 		p.style.color = '#FF9800';
// 	else {
// 		p.style.color = '#000';
// 	}
// }

function makePurple(p) {
  if (p.classList.contains("purple")){
  	removeClass(p, "purple");
  }
  else {
  	addClass(p, "purple");
  }
}

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


function hideParagraph() {
	var h = document.getElementById("pone");
	if(h.style.display == 'block'){
	  h.style.display = 'none';
	}
	else {
	  h.style.display = 'block';
	}
}

function revealParagraph() {
	var r = document.getElementById("pone");
	if(r.style.display == 'none') {
	  r.style.display = 'block';
	}
}