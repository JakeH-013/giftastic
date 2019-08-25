var lotr = ["Aragorn", "Frodo Baggins", "Bilbo Baggins",
    "Boromir", "Theoden", "Gandalf", "Sauron", "Eomer"];

function produceGifs() {
    //variable referencing the clicked button
    var lotrName = $(this).attr("data-name");
    //forms giffy url for the name/word clicked
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" +
        lotrName + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    //performs ajax GET request
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        //triggers function after the data comes from the API
        .then(function (response) {
            //stores an array of the results in a variable
            var results = response.data;
            console.log(results)
            //for loop for each result item
            for (var i = 0; i < results.length; i++) {
                //div for the gif
                var gifDiv = $("<div>");
                //varaible containing the gif rating
                var rating = results[i].rating;
                //creates paragraph for the rating
                var r = $("<p>").text("Rating: " + rating);
                //image tag with a source pulled from the result
                var lotrImg = $("<img>")
                    .addClass("gif")
                    .attr("src", results[i].images.original_still.url)
                    .attr("data-state", "still")
                    .attr("data-still", results[i].images.original_still.url)
                    .attr("data-animate", results[i].images.original.url);
                console.log(lotrImg)

                //appends rating and gif to the gifDiv div
                gifDiv.append(r);
                gifDiv.append(lotrImg);

                //prepends gifDiv to html
                $("#gif-section").prepend(gifDiv);


            }
            $(".gif").on("click", function () {
                var state = $(this).attr("data-state");
            
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
        })

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

$("#name-add").on("click", function (event) {
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