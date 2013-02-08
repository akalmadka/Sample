steal("funcunit/qunit", "todoapp/fixtures", "todoapp/models/actvity.js", function(){
	module("Model: Todoapp.models.actvity")
	
	test("findAll", function(){
		expect(4);
		stop();
		Todoapp.models.actvity.findAll({}, function(actvities){
			ok(actvities)
	        ok(actvities.length)
	        ok(actvities[0].name)
	        ok(actvities[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Todoapp.models.actvity({name: "dry cleaning", description: "take to street corner"}).save(function(actvity){
			ok(actvity);
	        ok(actvity.id);
	        equals(actvity.name,"dry cleaning")
	        actvity.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Todoapp.models.actvity({name: "cook dinner", description: "chicken"}).
	            save(function(actvity){
	            	equals(actvity.description,"chicken");
	        		actvity.update({description: "steak"},function(actvity){
	        			equals(actvity.description,"steak");
	        			actvity.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Todoapp.models.actvity({name: "mow grass", description: "use riding mower"}).
	            destroy(function(actvity){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})