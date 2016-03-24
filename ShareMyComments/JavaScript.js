var button = document.getElementById("submitButton");
var divIndent = document.getElementById("displayComment");

button.addEventListener("click",clickEvent);

function clickEvent() {
    divIndent.style.marginLeft = "10%";
}
