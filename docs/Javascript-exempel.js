function authorDialog(){
    alert("Andreas har gjort sidan. Det är år 2021.");
    changeText();
}
function changeText(){
    document.getElementById("demo").innerHTML = "Hello Javascript.";
}
function writeText(){
    var namn = document.getElementById("fnamn").value;
    document.getElementById("text").innerHTML = namn;
}
function calculate(){
    var field1 = document.getElementById("num1").value;
    var field1 = document.getElementById("num2").value;

    var result = parseFloat(field1)+parseFloat(field2);
    if (!isNan(result)){
        document.getElementById("answer").innerHTML = "The answer is"+result;
    }
}
