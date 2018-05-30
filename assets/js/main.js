$("input[type='text']").on("keypress", function(e) {
  if(e.which === 13){
    var todoText = $(this).val() + "%#";
    if(localStorage.getItem('todos') === null) {
        var todoItems = []
        todoItems.push(todoText)
        localStorage.setItem('todos', todoItems);
        $(this).val("")
        displayItems();
    } else {
        var todoItems = localStorage.getItem('todos').split(',');
        todoItems.push(todoText)
        localStorage.setItem('todos', todoItems);
        $(this).val("")
        $("ul").append("<li>"+"<span><i class='fa fa-trash'></i></span>"+todoText.slice(0,-2)+"</li>")
    }
  }
})

function displayItems() {
    if(localStorage.getItem('todos') != null){
        var todoItemsString = localStorage.getItem('todos').slice(0,-2);
        var todoItems = todoItemsString.split('%#,');
        for(i=0;i < todoItems.length;i++) {
            $("ul").append("<li>"+"<span><i class='fa fa-trash'></i></span>"+todoItems[i]+"</li>")
        }
    }
}

$('ul').on('click', 'span', function() {
    todoItems = (localStorage.getItem('todos')+',');
    todoItems = todoItems.split("%#,");
    todoItem = this.parentElement.textContent;
    ind = todoItems.indexOf(todoItem);
    if(ind > -1) {
        todoItems.splice(ind, 1);
        if(todoItems.length == 1 && todoItems[0] == "") {
            localStorage.clear()
        } else {
            localStorage.setItem('todos', todoItems.join("%#,").slice(0,-1));
        }
        location.reload();
    }
})
setInterval(function(){
  var current_time = new Date();
  document.getElementById('current_time').innerHTML = current_time.getHours() + ":" + current_time.getMinutes() + ":" + current_time.getSeconds();
}, 500)
