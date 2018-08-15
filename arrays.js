var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers","hundred grand", "kitcat", "skittles"];

function addElementToBeginningOfArray() {
  return chocolateBars.unshift("Skor bar");
}

function destructivelyAddElementToBeginningOfArray() {
 chocolateBars = ["Skor bar",...chocolateBars];
 return chocolateBars;
}

function addElementToEndOfArray() {
  return chocolateBars.push("Skor bar");
}

