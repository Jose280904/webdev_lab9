function init(){
	var button = document.getElementByld('entrybuttom');
	function showMeText(){
		var textbox = document.getElementByld('entryinput');
		document.getElementByld('textoutput').innerHTML = textbook.value;
		alert("Jose Rodriguez: " + textbox.value);
	}
	button.addEventListener('click', showMeText);
}
window.addEventListener('load', init);
	