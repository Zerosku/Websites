'use strict';
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
// After the loop print the HTML into <ul> element using innerHTML.
const showImages = () => {
  const ul = document.querySelector('ul');

  fetch('images.json').then((response) => {
    return response.json();
  }).then((json) => {
    let html = '';
    json.forEach((image) => {
      html +=
          `<li>
          <figure>
            <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
            <figcaption>
                <h3>${image.mediaTitle}</h3>
            </figcaption>
          </figure>
        </li>`;
    });
    ul.innerHTML = html;
    // now links can be selected
      linkActions();
  });
};

showImages();

const linkActions = () => {

    let imageElement = document.querySelectorAll('a');
    let closeButton = document.querySelector('closeBtn');

    imageElement.forEach((image) => {

        image.addEventListener('click', (evt) => {

            evt.preventDefault();
            const boksi = document.querySelector('#modal');

            if (boksi.classList.contains('hidden')){
                boksi.classList.replace('hidden', 'lightbox');
                document.getElementById("pic").src=evt.target.parentNode.href;
            } else {
                boksi.classList.replace('lightbox','hidden');
            }
        });

    });

};

// select close button if modal
// when close button is clicked hide modal





