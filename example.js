var height = "about 5'10\" tall";
var multiply = function(a,b){
	alert(a*b);
}

function multiply2(a,b){
	alert(a*b);
}
var list = document.getElementById("purchases");
var items = list.getElementsByTagName("*");
var sales = document.getElementsByClassName("important sale");

alert(sales.length);