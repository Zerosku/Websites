// Create function 'showImages' which
// adds the loaded HTML content to <ul> element


'use strict';

const showImages = (query, url) => {
    const element = document.querySelector(query);
    fetch(url)
        .then((response) => {
        return response.text;
    })
    .then((text) => {
       element.innerHTML = text;
    });
};

showImages('ul', 'images.html');