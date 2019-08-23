var lotr = ["Aragorn", "Frodo Baggins", "Bilbo Baggins",
    "Gimli", "Theoden", "Gandalf", "Sauron", "Rohan", "Eomer"];

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
makeBtns();