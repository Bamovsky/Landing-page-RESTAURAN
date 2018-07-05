let menuIcon = document.getElementById("icon__img");
let nav = document.getElementById("nav");
let classStd = "col-lg-6 d-none d-lg-block";
let classActive = "col-lg-6 d-block"
menuIcon.onclick = function () {
	if (nav.className == classStd){
		nav.className = classActive;
	}
	else {
 		nav.className = classStd;
	}
};