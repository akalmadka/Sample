steal("funcunit/qunit", "todoapp/fixtures", "todoapp/models/activity.js", function(){
	module("Model: Todoapp.models.activity")
	
	test("findAll", function(){
		expect(4);
		stop();
		Todoapp.models.activity.findAll({}, function(activities){
			ok(activities)
	        ok(activities.length)
	        ok(activities[0].name)
	        ok(activities[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Todoapp.models.activity({name: "dry cleaning", description: "take to street corner"}).save(function(activity){
			ok(activity);
	        ok(activity.id);
	        equals(activity.name,"dry cleaning")
	        activity.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Todoapp.models.activity({name: "cook dinner", description: "chicken"}).
	            save(function(activity){
	            	equals(activity.description,"chicken");
	        		activity.update({description: "steak"},function(activity){
	        			equals(activity.description,"steak");
	        			activity.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Todoapp.models.activity({name: "mow grass", description: "use riding mower"}).
	            destroy(function(activity){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})