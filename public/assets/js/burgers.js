$(function(){
    $(".change-devoured").on("click",function(event) {
        var id = $(this).data("id");
        var newDevoured = 1;

        var newDevouredState = {
            devoured : newDevoured
        };
        $.ajax("/api/burgers/"+id,{
            type:"PUT",
            data: newDevouredState
        }).then(
            function(){
                console.log("changed devoured to", newDevouredState);

                location.reload();
            }
        )
    });

    $(".create-form").on("submit",function(event){
        //preventDefault disables some undesired attributes of submit buttons
        event.preventDefault();

        var newBurger={
            burger:$("#ca").val().trim(),
            devoured: 0
        }
        $.ajax("/api/burgers/", {
            type:"POST",
            data:newBurger
        }).then(
            function(){
                console.log("created new burger");
                location.reload();
            }
        );

    });
});