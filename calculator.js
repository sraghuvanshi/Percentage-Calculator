var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
var form = document.getElementById("maincalculator");

form.addEventListener("submit", function (event) {
    if (!numField1.value || !numField2.value) {
        alert("Please enter value in the fields.");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        var percent = (x / y) * 100;
        resultField.innerText = "Anwer: " + percent + "%";
        event.preventDefault();
    }
})
