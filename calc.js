
function times(){
    var x =document.getElementById("num1").value;
    var y =document.getElementById("num2").value;
    var z = x * y ;
    document.getElementById("Number 3").innerHTML = z;
}
function minus(){
    var x =document.getElementById("num1").value;
    var y =document.getElementById("num2").value;
    var z = x - y ;
    document.getElementById("Number 3").innerHTML = z;
}
function imweak(){
    var x =Number(document.getElementById("num1").value);
    var y =Number(document.getElementById("num2").value);
    var add = x + y ;
    document.getElementById("Number 3").innerHTML = add;
}
function overunder(){
    var x =document.getElementById("num1").value;
    var y =document.getElementById("num2").value;
    var div = x / y ;
    document.getElementById("Number 3").innerHTML = div;
}
