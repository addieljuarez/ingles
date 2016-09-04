
var args = $.args;


Ti.API.info(args);


$.buttonEnglish.addEventListener('click', function(e){
	var params = { 
		'typeName' : args.name,
		'typeLanguage' : 'english'
	};

	var winWords = Alloy.createController('winWords', params).getView();
	Alloy.Globals.navigation.openWindow(winWords);
});


$.buttonEspanish.addEventListener('click', function(e){
	var params = { 
		'typeName' : args.name,
		'typeLanguage' : 'spanish'
	};

	var winWords = Alloy.createController('winWords', params).getView();
	Alloy.Globals.navigation.openWindow(winWords);
});