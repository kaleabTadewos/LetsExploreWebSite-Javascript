"use strict";

(function () {
    getUserReviews();
})();

function getUserReviews() {
    fetch("vscode/userReviews.json")
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
        .then(userReviews => {
            let content = "";
            userReviews.forEach(function (userReviews, i) {
                content += `

                <div class="card" style="width: 18rem;">
                <img src="${userReviews.imgpath}" class="card-img-top" alt="${userReviews.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${userReviews.username}</h5>
                        <p class="card-text">${userReviews.usercomment}.</p>
                    </div>
                </div>

                    ` //there is a backtick here
            });
            document.querySelector("#customerFeedback").innerHTML = content;

        })
        .catch(err => {
            console.log("Error Message: " + err.statusText);
            document.getElementById("bookList").innerHTML = "<p style='color: red; '>SORRY AN ERROR HAS OCCURED</p>"
        })
}