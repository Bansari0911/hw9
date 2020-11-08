const Circle = require("./circle");

(function () {
  const area = Circle.area(3);
  const circumference = Circle.circumference(3);

  console.log(
    `The circumference of a circle of radius 3 is ${circumference}. It's area is ${area}`
  );
})();
