var args = $.args;
var jsonPalabras = Alloy.createController('jsonPalabras');


var jsonLista = jsonPalabras.listaMain();
var data = [];



Alloy.Globals.navigation = $.winMain;

for(i in jsonLista){

	var row = Ti.UI.createTableViewRow({
		height : 60,
		name : jsonLista[i].name,
	});


	var labelTitle = Ti.UI.createLabel({
		color : 'black',
		left : 20,
		text : jsonLista[i].name,
		height : Ti.UI.SIZE,
	});

	row.add(labelTitle);
	data.push(row);
}



$.tableMain.setData(data);


$.tableMain.addEventListener('click', function(e){

	var params = {
		'name' : e.row.name,
	};

	var winSelectLanguage = Alloy.createController('winSelectL', params).getView();
	Alloy.Globals.navigation.openWindow(winSelectLanguage);
});






