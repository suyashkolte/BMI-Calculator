
function calculate(){
  var wt = document.getElementById("weight").value;
  var ht = document.getElementById("height").value;

  var cal = wt / (ht * ht);
  cal = cal.toFixed(2);

  if(cal < 18.5){
    document.getElementById("result").innerHTML = "BMI: " + cal + " (Underweight)";
    return false;
  }
  else if(cal >= 18.5 && cal <= 24.9){
    document.getElementById("result").innerHTML = "BMI: " + cal + " (Healthy Weight)";
    return false;
  }
  else if(cal >= 25 && cal <= 29.9){
    document.getElementById("result").innerHTML = "BMI: " + cal + " (Overweight)";
    return false;
  }
  else if(cal >= 30){
    document.getElementById("result").innerHTML = "BMI: " + cal + " (Obesity)";
    return false;
  }
  return false;
}
