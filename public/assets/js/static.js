$(function() {

    // Adding burgers via POST
    $("#burgerForm").on("submit", function(event) {

        event.preventDefault();

        let name = $("#burgerInput").val().trim();

        $.ajax(`/api/burgers/${name}`, {
            type: "POST",
        }).then(
            (result) => {
                location.reload();
            });
    });

    // Updating records via PUT
    $(".readyBurgers").on("click", function(event) {
        let id = $(this).data("id");
        let action = { action: 'devoure' };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: action
        }).then(
            () => {
                location.reload();
            });
    });
    $(".devouredBurgers").on("click", function(event) {

        let id = $(this).data("id");
        let action = { action: 'undevoure' };

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: action
        }).then(
            () => {
                location.reload();
            });
    });

});