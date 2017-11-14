// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
"use strict";

const showImages = () => {
    const ul = document.querySelector('ul');

    fetch('images.json').then((response) => {
        return response.json();
    }).then((json) => {
        json.forEach((image) => {
            //for (var i = 0; i < json.length; i++) {

            /*let li = document.createElement('li');
            let figure = document.createElement('figure');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let figcaption = document.createElement('figcaption');
            let h3 = document.createElement('h3');*/

            const h3 = document.createElement('h3');
            const figcaption = document.createElement('figcaption');
            const img = document.createElement('img');
            const link = document.createElement('a');
            const figure = document.createElement('figure');
            const li = document.createElement('text');

            //let textNode = document.createTextNode(json[i].mediaTitle);

            // add text content
            const text = document.createTextNode(image.mediaTitle);
            h3.appendChild(text);

            // add attributes
            img.setAttribute('src', 'img/original/' + image.mediaUrl);
            link.setAttribute('href', 'img/original/' + image.mediaUrl);

            // nest elements
            figcaption.appendChild(h3);
            link.appendChild(img);
            figure.appendChild(link);
            figure.appendChild(figcaption);
            li.appendChild(figure);

            // insert new elements to page
            ul.appendChild(li);


            /*li.appendChild(figure);
            ul.appendChild(li);

            figure.appendChild(link);

            link.setAttribute("href", "img/original/" + json[i].mediaUrl);
            link.appendChild(img);

            img.setAttribute("src", "img/thumbs/" + json[i].mediaThumb);

            figure.appendChild(figcaption);

            figcaption.appendChild(h3);
            h3.appendChild(textNode);

            }
            */
        });
    });
};

showImages();