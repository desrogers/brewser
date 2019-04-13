$(document).ready(function() {
    
    $(".taste").on("click", function(event) {
        event.preventDefault();
        
        const id = $(this).data("id");
        const isTasted = {tasted: true};

        $.ajax('/api/brews/' + id, {
            method: "PUT",
            data: isTasted
        }).then(function() {
            console.log(`Brew ${id} has been tasted`);

            location.reload();
        });
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        const newBrew = {
            brew_name: $("#brew").val().trim()
        };

        $.ajax("/api/brews", {
            method: "POST",
            data: newBrew
        }).then(function() {
            location.reload();
        })
    })

});