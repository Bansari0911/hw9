function circumference(radius) {
  const pi = 3.14;
  return 2 * pi * radius;
}

function area(radius) {
  const pi = 3.14;
  return pi * radius * radius;
}

module.exports = {
  circumference,
  area,
};
