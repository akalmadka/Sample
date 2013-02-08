steal('funcunit').then(function(){

module("Todoapp.controllers.todo", { 
	setup: function(){
		S.open("//todoapp/controllers/todo/todo.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Todoapp.controllers.todo Demo","demo text");
});


});