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
  	if (listItems[i].classList.contains("purple")){
    removeClass(listItems[i], "purple");
    addClass(listItems[i], "orange");
  }
  else {
  	addClass(listItems[i], "orange");
  }
  }
}

function returnToBlack() {
  var listItems = document.getElementsByClassName("list-item");
  for (var i = 0; i < listItems.length; i++) {
  	if (listItems[i].classList.contains("purple")){
  		removeClass(listItems[i], "purple");
  	}
  	if (listItems[i].classList.contains("orange")){
  		removeClass(listItems[i], "orange");
  	}
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

function blueBackground() {
	var b = document.getElementById("ptwo");
	if (b.classList.contains("blue-background")) {
		removeClass(b, "blue-background");
		addClass(b, "orange-background");
	}
	else if (b.classList.contains("orange-background")) {
		removeClass(b, "orange-background");
	}
	else {
		addClass(b, "blue-background");
	}
}

function weekEon() {
	var w = document.getElementsByTagName("title");
	w[0].innerHTML = "Eon 7, Day 2 Practice";
	var w = document.getElementById("we");
	w.innerHTML = "Eon 7, Day 2 Practice";
}

function eonWeek() {
	var w = document.getElementsByTagName("title");
	w[0].innerHTML = "Week 7, Day 2 Practice";
	var w = document.getElementById("we");
	w.innerHTML = "Week 7, Day 2 Practice";
}

function rightJustify(r) {
	var r = document.getElementById("pfive");
  addClass(r, "right");
}