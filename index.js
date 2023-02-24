// TODO:
const price = document.getElementById("price");
const weight = document.getElementById("weight");
// console.log(price, weight);

const link = document.getElementById("link-p2");

// console.log(link);

function getValueInput(target) {
  let value = target.value;
  return value;
}
function getIdInput(target) {
  let targetId = target.id;
  return targetId;
}
function stockItem(key, item) {
  sessionStorage.setItem(key, item);
}
link.addEventListener("click", () => {
  stockItem(getIdInput(price), getValueInput(price));
  stockItem(getIdInput(weight), getValueInput(weight));
});
