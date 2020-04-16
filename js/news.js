"use strict";

(function () {
    getNews();
})();

function getNews() { 
    fetch("../vscode/news.json") 
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
        .then(news => {
            let content = "";
            news.forEach(function (news, i) {
                content += `
                    
                <div class="card mb-3" ">
                <div class=" row no-gutters">
                <div class="col-md-4">
                    <img src="${news.imgPath}" class="card-img" alt="Image of ${news.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">News No. ${i+1}</h5>
                        <p id="mainText" class="card-text">${news.description}</p>
                        <p class="card-text"><small class="text-muted">Created at ${news.date}</small></p>
                    </div>
                </div>
            </div>
            </div>                

                    ` //there is a backtick here
            });
            document.querySelector("#newsList").innerHTML = content;

        })
        .catch(err => {
            console.log("Error Message: " + err.statusText);
            document.getElementById("bookList").innerHTML = "<p style='color: red; '>SORRY AN ERROR HAS OCCURED</p>"
        })
}