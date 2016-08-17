$(document).ready(function() {
    $("#epicodus").submit(function(event) {
        var firstNameInput = $("input#firstName").val();
        var environmentInput = $(
            "input:radio[name=environment]:checked").val();
        var companyInput = $(
            "input:radio[name=company]:checked").val();
        var contentInput = $("#content").val();
        var usersInput = $("#users").val();
        var foodInput = $("#food").val();
        $(".firstName").text(firstNameInput);
        // --- ^^Business Logic^^ --- vvUser Logicvv ---
        if (environmentInput === "front") {
            $("#cssMessage").fadeIn("slow");
        } else if (environmentInput != "front" && companyInput ===
            "large") {
            $("#cSharpMessage").fadeOut("slow");
        } else if (environmentInput != "front" && companyInput ===
            "small") {
            $("#javaMessage").slideUp("slow");
        } else if (environmentInput != "front" && foodInput ===
            "Pizza") {
            alert(
                "We suggest taking the PHP/Drupal track at Epicodus."
            )
        } else if (environmentInput != "front" && companyInput !=
            "small" && foodInput === "BBQ") {
            $("#cSharpMessage").slideDown("slow");
        } else {
            $("#javaMessage").fadeIn("slow");
        }
        event.preventDefault();
    });
});
