function whichSchool(age) {
  if (age > 18) return "Lighthouse Labs";
  if ((age <= 18) && (age >= 13)) return "Secondary School";
  if (age < 13) return "Elementary School";
}
console.log(whichSchool(12));

console.log(whichSchool(13));

console.log(whichSchool(19));