const getLink = window.location.origin;
let currNumber = 0;

function getNextNumber() {
    const request = new XMLHttpRequest();
    request.open('GET', `/fibonacci/${currNumber}`, false);
    request.send();
    if (request.status != 200) {
        // обработать ошибку
        alert(request.status + ': ' + request.statusText); //  404: Not Found
    } else {
        currNumber = currNumber + 1;
        document.getElementById("fibonacciNumber").innerHTML = request.responseText;

    }

}