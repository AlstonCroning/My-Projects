//when the page loads run doit function
window.addEventListener("load", doit, false);

//when the 'save' button clicks run the saveit function
function doit() {
	var button = document.getElementById("button");
	button.addEventListener("click", saveit, false);
	display();
}

//after the 'save' button clicked store field information
function saveit() {
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one, two);
	display();
	document.getElementById("one").value = "";
	document.getElementById("two").value = "";
}

//display the results in the rightbox div
function display() {	
	var rightbox = document.getElementById("rightbox");
	rightbox.innerHTML = "";
	
	for (var x = 0; x < sessionStorage.length; x++ ) {
		var a = sessionStorage.key(x);
		var b = sessionStorage.getItem(a);
		rightbox.innerHTML += a+" / "+b+"<br />";
	}
}