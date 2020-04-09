# Bootstrap-portfolio
Bootstrap portfolio commentary

DESCRIPTION: The Bootstrap portfolio is a basic html website styled with Bootstrap. This website contains three pages which share the same header, footer, and body structure. After coding those three elements on the index.html page to my liking I copied and pasted them on the other two pages using the index.html code much like a page template where the content inside the card was later adjusted. The main content of each page is housed in a card with a header and a bottom section which contains the important content for each page. 

Main elements found in this website include:

LINKS
* I linked the html to bootstrap in the <head> section of each page, utilizing the online stylesheet link rather than downloading it to my computer. 
* I included JavaScript links in the bottom right before the closing </body> tag for practice but they don't have an effect on the pages if they are taken out. 

NAVBAR
* Each menu item in the navigation bar is a relative link to a page in the website
* The 'Vanessa Bautista' name-logo is a link, but currently the value is "#"
* The menu items are an un-ordered list has navbar as its class and list-inline styling which displays the list horizontally in all but xs screen-size views. In xs the list collapses vertically. 
* The navigation bar's styling is adjusted with background color, font-family, logo font-size, and most notibly a drop shadow which wraps the entire navbar.

MAIN CONTENT
* Below the navbar there is a row divided into two colums, one which contains the content card, and a second which contains empty space to the right of the content card. This is how a larger negative space was created to the right of the content card on medium and large viewports.
* In order to re-use the card on each page the card is set up into sections - a header section, then a row which is divided into 1 to 2 columns depending on the card's content.

ABOUT ME
* The 'About Me' card content area is divided into two columns, one with a photo and one with text which. In md and lg viewports the content displays side by side. In sm viewports the text displays below the photo.

CONTACT
* The 'Contact' card content area has one column in which I copied and pasted form elements from bootstrap. The 'Submit' button I styled with a different bgcolor.

PORTFOLIO
* The 'Portfolio' area is divided into two columns, each with 3 cards. I used the 'image-overlay' code from bootstrap to layer text ontop of each card image and I used the code I found on stack overflow to position the text towards the bottom of the image. The stack overflow resource is here: 

https://stackoverflow.com/questions/45836381/how-do-i-position-text-on-the-bottom-of-an-image-overlay-in-a-card-in-bootstrap

* The text is inside an <h6> tag, inside which I adjusted margin, bg, and text-align, and styled the padding to format the banner with centered text display on top of the card image. 

**STRUGGLING WITH MARGIN TO THE RIGHT OF THE IMAGES/CARDS IN LARGE AND SM VIEWPORTS GOING TO ASK MY TA**

LAYOUT
* There is a div section before the footer height 200px to better position the content card of each page in relation to the footer. Without the additional space the footer buts right up the bottom of the card and the card does not scroll up for adequite viewing of the card bottom.

FOOTER
* The footer is a navbar with attribute fixed-bottom. Within the footer I created a container to hold the text, and a column within the container which allowed me to center the text and have it display in the center of the footer. I am not sure if this is the 'best' way to center text in a footer, however this was the solution that reulted in the look I wanted. 
* In the nav class="" I was able to style the navbar with positioning, color, bg color, a top boarder and border color. I was unable to change the border width and discussing with a TA was informed that creating a thicker top border would require an additional css style sheet. I only wanted to style this document with bootstrap so left it as is. 

