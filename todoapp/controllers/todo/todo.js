steal('jquery/controller', 'jquery/view/ejs', 'jquery/controller/view')
	.then('./views/init.ejs', './views/row.ejs', './views/status.ejs', function ($) {

	    /**
	    * @class Todoapp.controllers.todo
	    */
	    $.Controller('Todoapp.controllers.todo',
	    /** @Static */
{
defaults: { model: new Todoapp.models.activity.List() ,
            EventName : "mouseover"}
},
	    /** @Prototype */
{
init: function () {
    this.element.html(this.view('init'));
    this.options.model.findAll();

},

"{model} add": function (list, ev, items) {

    for (var j = 0; j < items.length; j++) {
        this.find('#list').append(this.view('row', items[j]))
    }
    this.updateStats();

}


,

// Creating a todo --------------

// listens for key events and creates a new todo
".create keyup": function (el, ev) {

    if (ev.keyCode == 13) {
        var newtodo = new Todoapp.models.activity({
            name: el.val(),
            complete: false
        })
        var errors = newtodo.errors();
        if (errors == null) {
            newtodo.save(this.callback('created'));
            el.val("");
        }
        else {
            alert(errors.name[0]);
        }
    }
},

// When a todo is created, add it to this list
"created": function (todo) {
    this.options.model.push(todo); //triggers 'add' on the list
}
,

// When a todo's destroy button is clicked.
".activity  .todestroy click": function (el) {

    el.closest('.activity').model().destroy();


},

// when an item is removed from the list ...
"{model} remove": function (list, ev, items) {

    // get the elements in the list and remove them
    items.elements(this.element).slideUp(function () {
        $(this).remove();
    });


},

// Updating a todo --------------

// when the checkbox changes, update the model
".activity  [name=complete] change": function (el, ev) {

    var todo = el.closest('.activity').model().update({
        complete: el.is(':checked')
    });
},

// switch to edit mode
".activity  {EventName}": function (el) {
    var input = $("<input name='text' class='text'/>").val(el.model().name)
    el.html(input);
    input[0].focus();
},

// update the todo's text on blur
".activity  [name=text] focusout": function (el, ev) {

    var todo = el.closest('.activity').model();
    todo.attr('name', el.val());
    var errors = todo.errors();
    if (errors == null) {
        todo.save();
    }
    else {
        alert(errors.name[0]);
    }


},

// when an item is updated
"{model} updated": function (list, ev, item) {
    item.elements().replaceWith(this.view('row', item));
    this.updateStats();
    //update completed
},

// a helper that updates the stats
updateStats: function () {
    var list = this.options.model,
			completed = list.completed().length;
    $("#todo-stats").html(this.view("status", {
        completed: completed,
        total: list.length,
        remaining: list.length - completed
    }))
}

})

	});