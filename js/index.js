"use strict";

(function () {
    getCarouselItems();
})();

function getCarouselItems() {
    fetch("vscode/carousel.json")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject({
                    status: response.status,
                    statusTextResponse: response.statusText
                });
            }
        })
        .then(carouselItems => {
            let content = "";
            carouselItems.forEach(function (carouselItems, i) {
                content += `

                <div class="carousel-item ${carouselItems.status} " data-interval="300">
                    <img src="${carouselItems.imagepath}" class="d-block w-100" alt="${carouselItems.alt}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${carouselItems.place}</h5>
                        <p>${carouselItems.description}.</p>
                    </div>
                </div>S

                    ` //there is a backtick here
            });
            document.querySelector("#carouselContainer").innerHTML = content;

        })
        .catch(err => {
            console.log("Error Message: " + err.statusText);
            document.getElementById("bookList").innerHTML = "<p style='color: red; '>SORRY AN ERROR HAS OCCURED</p>"
        })
}