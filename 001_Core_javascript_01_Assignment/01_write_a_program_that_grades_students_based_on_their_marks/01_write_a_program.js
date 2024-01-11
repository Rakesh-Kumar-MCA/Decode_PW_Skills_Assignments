// write a program that grades students based on their marks

let marks = 75;

if (marks >= 90) {
  console.log(`your marks:-${marks} you got grade A`);
} else if (marks < 90 && marks >= 70) {
  console.log(`your marks:-${marks} you got grade B`);
} else if (marks < 70 && marks >= 50) {
  console.log(`your marks:-${marks} you got grade C`);
} else {
  console.log(`your marks:-${marks} you got grade F`);
}
