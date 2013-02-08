steal("funcunit", function(){
	module("todoapp test", { 
		setup: function(){
			S.open("//todoapp/todoapp.html");
		}
	});
	
	test("Todo Insert Test", function(){
    S(".create").exists().click().type("test todo\r")
    S.wait(100, function () {
           equals(S('#list')[0].lastChild.children[1].outerText, 'test todo', 'Todo created');
        })
    
		
	});
})