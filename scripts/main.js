$(function() {
    $( ".cmd-textbox" ).append( "<p class='question'>" + $("#0").text() + "</p>" );
});

$(document).keypress(function(e) {
    if(e.which == 13) {
        var responseCount = parseInt($("#counter-response").text());
        var inputText = $("#comandInputTextBox").val();

        if (inputText){
            $(".cmd-textbox").append(function(){
            
                $("#comandInputTextBox").val("");
                return "<p class='janina-response' id='response-" + responseCount + "'>Janina Estañol >> " + inputText + "</p>"
            });

            if (responseCount === 0) {
                if(inputText === "S"){
                    $( ".cmd-textbox" ).append( "<p class='question'>" + $("#" + (responseCount + 1)).text() + "</p>" );
                    ChangeClassFromText("name-janina", "slideInLeft");
                } else{
                    $( ".cmd-textbox" ).append( "<p class='wrong-answer'>Agencia de viajes >> Que te den por el culin, apestas a cojon de mono! </p>" );
                }
            }

            if (responseCount === 1) {
                if(inputText === "S"){
                    $( ".cmd-textbox" ).append( "<p class='question'>" + $("#" + (responseCount + 1)).text() + "</p>" );
                    ChangeClassFromText("plus", "bounceIn");
                    ChangeClassFromText("name-alex", "slideInRight");
                } else{
                    $( ".cmd-textbox" ).append( "<p class='wrong-answer'>Agencia de viajes >> Vale jo! Encima que hago el esfuerzo </br> para ver franchutes de mierda....</p>" );
                }
            }

            if (responseCount === 2) {
                if(inputText === "S"){
                    $( ".cmd-textbox" ).append( "<p class='question'>" + $("#" + (responseCount + 1)).text() + "</p>" );
                    ChangeClassFromText("equals", "bounceIn");
                    ChangeClassFromText("destination-city", "pulse");
                    ChangeClassFromText("postal", "postal-style-background")
                } else{
                    $( ".cmd-textbox" ).append( "<p class='wrong-answer'>Agencia de viajes >> Que soy para ti?!?! DIME!! Un juguete ehhh!!! </p>" );
                }
            }

            $("#counter-response").text(responseCount + 1);
        }
    }
});

function ChangeClassFromText(textId, classToAdd) {
    var item = $("#" + textId);
    item.removeClass("nodisplay");
    item.addClass(classToAdd);
}