// load('todoapp/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("todoapp/todoapp.html","todoapp/out")
});
