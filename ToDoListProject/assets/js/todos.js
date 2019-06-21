// check off the specific TODOs by clicking
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");


    // if gray
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     // turn it back
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });

    // }
    // else{
    //     // turn it gray
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    
    //     });
    // }
});


// click on X to delete TODO
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
        // grab new TODO text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class = 'fa fa-trash-alt'></i> </span>" + todoText + "</li>");
    }
});

$(".fa-plus").on("click",function(){
    $("input[type='text']").fadeToggle();
});