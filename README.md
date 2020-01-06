Giftastic

Link: https://jakeh-013.github.io/giftastic/


My assignment for practicing API calls with the GIPHY API. I chose a Lord of the Rings theme due to my love of the books, films, and overall setting. 


Instructions:

1) Click on one of the named buttons at the top of the screen.

2) To make one of the gifs animate, simply click on it. Click again to return it to its still state.

3) Want a new button to call gifs? Simply input a word (hopefully related to LotR) into the box and         click on the associated button.

4) Your new button should appear and be ready for your enjoyment


Behind the scenes:

Starting with a base array of names, each item within the array is given a button, via a fucntion utilizing a for loop to generate one for each item in the array. Each button is given a class, data-name, and text. The buttons are then appended into the button section. 

The gifs are produced in another function, triggerd by the clicking of a gif button. This function pulls the names that giphy will search for by using the button's data-name, which is simply what it is listed as within the array. The function performs an ajax call to retrieve a number of gifs related to the data-name, which serves as the search term(s). It will then disply the gifs and text stating the gifs' ratings. 

Clicking on each gif will trigger a funtion swapping the image's source from the still image to an animated image, and the reverse on another click.
