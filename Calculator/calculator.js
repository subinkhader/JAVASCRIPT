function Operation() {
   
    var n1 = parseInt(document.getElementById('num1').value)
   
    var n2 = parseInt(document.getElementById('num2').value)
   
    function Add(a, b) {
        var res = a + b
        return res
    }
    function Sub(a, b) {
        var res = a - b
        return res
    }
    function Multi(a, b) {
        var res = a * b
        return res
    }
    function Div(a, b) {
        var res = a / b
        return res
    }



    if (document.getElementById('cal').value == 'Addition') {
        document.getElementById('result').value = Add(n1, n2);
    }
    
    if (document.getElementById('cal').value == 'Substraction') {
        document.getElementById('result').value = Sub(n1, n2);
    }
    if (document.getElementById('cal').value == 'Multiplication') {
        document.getElementById('result').value = Multi(n1, n2);
    }
    if (document.getElementById('cal').value == 'Division') {
        document.getElementById('result').value = Div(n1, n2);
    }
  
    }
