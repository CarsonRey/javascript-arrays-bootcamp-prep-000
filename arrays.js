var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers","hundred grand", "kitcat", "skittles"];

function addElementToBeginningOfArray() {
  var chocolateBars = ["snickers","hundred grand", "kitcat", "skittles"];
   ["Skor bar", ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray() {
  var chocolateBars = ["snickers","hundred grand", "kitcat", "skittles"];
  chocolateBars.unshift("Skor bar");
  return chocolateBars;
}

function addElementToEndOfArray() {
  return chocolateBars.push("Skor bar");
}

