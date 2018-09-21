var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i = 0;

console.log("Write a while loop that prints out the contents of ingredients:");

while (i < ingredients.length) {
console.log(ingredients[i]);
i++;
};
console.log("\n\nWrite a for loop that prints out the contents of ingredients");


for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
};
console.log("\n\nWrite any loop (while or for) that prints out the contents of ingredients backwards");


/*for (var i = ingredients.length; i >= 0; i--) {
  console.log(ingredients[i]);
};*/

var n = ingredients.length;
while (n >= 0) {
  console.log(ingredients[n]);
  n--;
};

