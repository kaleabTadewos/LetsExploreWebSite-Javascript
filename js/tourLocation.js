"use strict";

(function () {
    getTourLocations();
})();

function getTourLocations() {
    fetch("../vscode/tourLocation.json") 
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
        .then(tourLocations => {
            let content = "";
            tourLocations.forEach(function (tourLocations, i) {
                content += `

                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${tourLocations.imgPath}" class="card-img" alt="image of ${tourLocations.name}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${tourLocations.name}</h5>
                                <p class="card-text">${tourLocations.history}. . .</p>
                                <p class="card-text"><small class="text-muted">Created ${tourLocations.createdDate}</small></p>
                                <a href="../html/tourDisplay.html" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                </div> 

                    ` //there is a backtick here
            });
            document.querySelector("#sites").innerHTML = content;

        })
        .catch(err => {
            console.log("Error Message: " + err.statusText);
            document.getElementById("bookList").innerHTML = "<p style='color: red; '>SORRY AN ERROR HAS OCCURED</p>"
        })
}