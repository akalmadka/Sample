//js todoapp/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('todoapp/scripts/build.html',{to: 'todoapp'});
});
