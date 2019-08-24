var lotr = ["Aragorn", "Frodo Baggins", "Bilbo Baggins",
    "Boromir", "Theoden", "Gandalf", "Sauron", "Rohan", "Eomer"];

function produceGifs() {
    var lotrName = $(this).attr("data-name");
    console.log(lotrName);
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" +
    lotrName + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    console.log(queryUrl);
}



//function to generate buttons
function makeBtns() {
    //deletes buttons before buttons are added
    $("#btn-section").empty();
    //generates button for each item in array
    for (var i = 0; i < lotr.length; i++) {
        var b = $("<button>")
            .addClass("lotr")
            .attr("data-name", lotr[i])
            .text(lotr[i]);
        //adds buttons to btn-sectin div
        $("#btn-section").append(b);
    }
}

$("#name-add").on("click", function(event) {
    //prevents default form action
    event.preventDefault();
    //grabs input box text
    var name = $("#name-input").val().trim();
    //pushes text into array
    lotr.push(name);

    makeBtns();
})

$(document).on("click", ".lotr", produceGifs);

makeBtns();