steal(
	'./todoapp.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js', // sets up fixtures for your models
    'todoapp/controllers/todo/todo.js', // sets up fixtures for your models
	function(){					// configure your application

	    $('#container').todoapp_todo();
	})