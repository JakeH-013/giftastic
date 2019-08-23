var lotr = ["Aragorn", "Frodo Baggins", "Bilbo Baggins",
    "Boromir", "Theoden", "Gandalf", "Sauron", "Rohan", "Eomer"];

//function to generate buttons
function makeBtns() {
    //deletes buttons before buttons are added
    $("#btn-section").empty();
    //generates button for each item in array
    for (var i = 0; i < lotr.length; i++) {
        var b = $("<button>")
            .addClass("lotr-btn")
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

makeBtns();