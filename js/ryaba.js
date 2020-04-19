const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {
  $.getJSON(
  	dataURL,
  	function(data) {
  		handleData(data)
  	}
  );
}

function handleData(data) {
  let text = data.text.toString();

  for(let i = 1; i <= 7; i++) {
  	let var_name = (i == 7) ? "speach" : "var" + i;
  	let var_value = $("#" + var_name)[0].value;
  	let var_holder = new RegExp("{" + var_name + "}", "g");  		

  	text = text.replace(var_holder, var_value);
  }
  $("#result").text(text);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
