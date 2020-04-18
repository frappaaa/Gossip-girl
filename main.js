$( function() {
    
    $( ".sorting_letters .drag_letter" ).draggable({
        connectToSortable: ".droptrue",
        helper: "clone"
    });
    $( ".droptrue" ).sortable({
        connectWith: "div"
    });
    $(".droptrue_final li.drag_letter").click( function(){
        $(this).remove();
    });
    $(".droptrue_final .drag_letter" ).draggable({ 
        containment: ".down", 
        scroll: false 
    })
    $(".droptrue_final li.drag_letter").click(function(){
        alert('ciao');
    });
    
});