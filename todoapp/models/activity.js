steal('jquery/model', 'jquery/model/list', 'jquery/lang/json', 'jquery/model/validations', function () {

/**
 * @class Todoapp.models.activity
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend activity services.  
 */
$.Model('Todoapp.models.activity',
/* @Static */
{

init: function () {

    // validation for title field
    this.validatePresenceOf("name", { message: "Please Provide a name for the todo." });

},
attributes: {
    name: 'String',
    complete: 'Boolean'
},

/**
* Gets JSON data from localStorage.  Any changes that 
* get made in cb get written back to localStorage.
* 
* This is unimportant for understanding JavaScriptMVC!
*/
localStore: function (cb) {
    var name = 'todo',
			data = $.evalJSON(window.localStorage[name] || (window.localStorage[name] = "{}")),
			res = cb.call(this, data);
    if (res !== false) {
        window.localStorage[name] = $.toJSON(data);
    }
},
/**
* Gets todos from localStorage.
* 
*     Todo.findAll({}, success(todos))
*/
findAll: function (params, success) {
    this.localStore(function (actvitys) {
        instances = [];
        for (var id in actvitys) {
            instances.push(new this(actvitys[id]))
        }
        success && success(instances)
    })
},
/**
* Destroys a list of todos by id from localStorage
*     
*     Todo.destroyAll([1,2], success())
*/
destroyAll: function (ids, success) {
    this.localStore(function (actvitys) {
        $.each(ids, function () {
            delete actvitys[this]
        });
    });
    success();
},
/**
* Destroys a single todo by id
*     
*     Todo.destroyAll(1, success())
*/
destroy: function (id, success) {

    this.destroyAll(id, success);
    this.localStore(function (actvitys) {
        delete actvitys[id]
    });

},
/**
* Creates a todo with the provided attrs.  This allows:
* 
*     new Todo({text: 'hello'}).save( success(todo) );
*/
create: function (attrs, success) {
    this.localStore(function (actvitys) {
        attrs.id = attrs.id || parseInt(100000 * Math.random())
        actvitys[attrs.id] = attrs;
    });
    success({ id: attrs.id })
},
/**
* Updates a todo by id with the provided attrs.  This allows:
* 
*     todo.update({text: 'world'}, success(todos) )
*/
update: function (id, attrs, success) {
    this.localStore(function (actvitys) {
        var todo = actvitys[id];
        $.extend(todo, attrs);
    });
    success({});
}
},
/* @Prototype */
{});

/**
* @class Todoapp.models.activity.List
* @parent index
* @inherits jQuery.Model.List
* Wraps backend activity services.  
*/
$.Model.List('Todoapp.models.activity.List', {

    /**
    * Return a new Todo.List of only complete items
    */
    completed: function () {
        return this.grep(function (item) {
            return item.complete === true;
        })
    }
});

})