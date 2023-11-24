function addChar(character) {
    var display = document.getElementById('display');
    if (display.value == "0") {
      display.value = character;
    } else {
      display.value += character;
    }
  }
  function clearDisplay() {
    var input = document.getElementById("display");
    input.value = "0";
}
  function cos() {
    var display = document.getElementById('display');
    display.value = Math.cos(display.value);
  }
  
  function sin() {
    var display = document.getElementById('display');
    display.value = Math.sin(display.value);
  }
  
  function tan() {
    var display = document.getElementById('display');
    display.value = Math.tan(display.value);
  }
  
  function sqrt() {
    var display = document.getElementById('display');
    display.value = Math.sqrt(display.value);
  }
  
  function ln() {
    var display = document.getElementById('display');
    display.value = Math.log(display.value);
  }
  
  function exp() {
    var display = document.getElementById('display');
    display.value = Math.exp(display.value);
  }
  
  function deleteChar() {
    var display = document.getElementById('display');
    display.value = display.value.substring(0, display.value.length - 1);
  }
  
  var val = 0.0;
  
  function percent() {
    var display = document.getElementById('display');
    val = display.value;
    display.value = display.value + "%";
  }
  
  function changeSign() {
    var display = document.getElementById('display');
    if (display.value.substring(0, 1) == "-")
      display.value = display.value.substring(1, display.value.length);
    else
      display.value = "-" + display.value;
  }
  
  function compute() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
  
  function square() {
    var display = document.getElementById('display');
    display.value = eval(display.value) * eval(display.value);
  }
  
  function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
      var ch = str.charAt(i);
      if (ch < "0" || ch > "9") {
        if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
          && ch != "(" && ch != ")" && ch != "%") {
          alert("invalid entry!");
          return false;
        }
      }
    }
    return true;
  }
  