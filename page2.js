const weightPrice = document.getElementById("weightPrice");
// console.log(weightPrice);
function getPrice() {
  return sessionStorage.getItem("price");
}
function getWeight() {
  return sessionStorage.getItem("weight");
}
function calcProportion() {
  let calc = getPrice() / getWeight();
  return calc;
}
function displayCalc() {
  weightPrice.innerText = calcProportion();
}
window.addEventListener("load", displayCalc);
