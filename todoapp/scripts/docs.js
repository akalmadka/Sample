//js todoapp/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('todoapp/todoapp.html', {
		markdown : ['todoapp']
	});
});