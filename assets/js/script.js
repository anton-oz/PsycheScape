const url = 'https://api.quotable.io/random'
let submitButton = document.getElementById("formButton");
let pEl = document.getElementById('affirmation')
let pEl2 = document.getElementById('author')


fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        pEl.textContent = data.content

        pEl2.textContent = `~${data.author}`
    });



submitButton.addEventListener("click", function(event){
    event.preventDefault();
    let userSubmit = document.getElementById("typeAct").value;
    localStorage.setItem("userChoice", userSubmit);
    window.location.href = "activity.html";
    return true;
});

