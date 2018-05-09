$("input[type='text']").on("keypress", function(e) {
  if(e.which === 13){
    var todoText = $(this).val() + "?";
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
        $("ul").append("<li>"+"<span><i class='fa fa-trash'></i></span> "+todoText.slice(0,-1)+"</li>")
    }
  }
})

function displayItems() {
    if(localStorage.getItem('todos') != null){
        var todoItemsString = localStorage.getItem('todos').slice(0,-1);
        var todoItems = todoItemsString.split('?,');
        for(i=0;i < todoItems.length;i++) {
            $("ul").append("<li>"+"<span><i class='fa fa-trash'></i></span> "+todoItems[i]+"</li>")
        }
    }
}
