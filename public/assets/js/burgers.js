$(function () {
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);
        var burgerDevoured = $(this).data("isdevoured");

        var devouredState = {
            devoured: burgerDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("changed devoured to", burgerDevoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});


