'use strict';
// Create function 'loadHTML' which
// adds the loaded HTML content to element defined by query
const loadHTML = (query, url) => {
    const element = document.querySelector(query);
    fetch(url)
        .then((response) => {
            return response.text();
        })
        .then((text) => {
            element.innerHTML = text;
        });
};

loadHTML('ul', 'images.html');