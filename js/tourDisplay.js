"use strict";

(function () {
    getTourLocations();
})();

function getTourLocations() {
    fetch("../vscode/tourDisplay.json")  
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

            <div class="jumbotron jumbotron-black">
                <div class="container">
                    <h1 id="tourSign1" class="display-4">WELCOME TO ${tourLocations.name}</h1>
                    <hr>
                </div>
            </div>
            <div>
                <img class="worldPictures" id="imageToDisplay" src="${tourLocations.imgPath}" class="img-fluid" alt="Image of ${tourLocations.name}">
            </div>

            <br><br>
            <div class="jumbotron jumbotron-black">
                <div class="container">
                        <h1 id="history" class="display-4">History</h1>
                        <p id="userFeedBack2" class="lead">Here is a brif history of: ${tourLocations.history}</p>
                </div>
            </div>

            <br><br>
            <div class="jumbotron jumbotron-black">
                <div class="container">
                    <h1 id="demography" class="display-4">Demography</h1>
                    <p id="userFeedBack2" class="lead">This is what the demography of ${tourLocations.demography} looks like</p>
                </div>
            </div>

            <br><br>
            <div class="jumbotron jumbotron-black">
                <div class="container">
                    <h1 id="transportation" class="display-4">Transportation</h1>
                    <p id="userFeedBack2" class="lead">This are the transportation possibilities of ${tourLocations.transportation}</p>
                </div>
            </div>

                    ` //there is a backtick here
            });
            document.querySelector("#main").innerHTML = content;

        })
        .catch(err => {
            console.log("Error Message: " + err.statusText);
            document.getElementById("bookList").innerHTML = "<p style='color: red; '>SORRY AN ERROR HAS OCCURED</p>"
        })
}