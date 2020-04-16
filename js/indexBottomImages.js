"use strict";

(function () {
    getBottomImages();
})();

function getBottomImages() {
    fetch("vscode/indexBottomImages.json")  
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
        .then(bottomImages => {
            let content = "";
            bottomImages.forEach(function (bottomImages, i) {
                content += `

                <figure class="figure">
                <img src="${bottomImages.imagepath}" class="figure-img img-fluid rounded" alt="${bottomImages.alt}">
                <figcaption class="figure-caption text-right">Today's pick ${i+1}</figcaption>
                </figure>

                    ` //there is a backtick here
            });
            document.querySelector("#bottomImages").innerHTML = content;

        })
        .catch(err => {
            console.log("Error Message: " + err.statusText);
            document.getElementById("bookList").innerHTML = "<p style='color: red; '>SORRY AN ERROR HAS OCCURED</p>"
        })
}