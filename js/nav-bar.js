var showNav;
var navButtons;

function init() {
	this.showNav = false;
	this.navButtons = document.getElementById("mobile-nav-buttons");
}

function mobileNavBar(x) {
    x.classList.toggle("change");
    showNav = !showNav;
    if (showNav) {
    	this.navButtons.style.display = "block";
    }
    else {
    	this.navButtons.style.display = "none";
    }
} 