function getTriangle () {
  let sideA = Number.getElementById("aInput").value);
  let sideB = Number.getElementById("bInput").value);
  let sideC = Number.getElementById("cInput").value);
  
  function traingleType(aInput, bInput, cInput) {  
    if (aInput == bInput && bInput == cInput) {
      print("Equilateral");
    }
    if (aInput != bInput == cInput || aInput == bInput != cInput) {
      print("Isosceles");
    }
    if (aInput != bInput != cInput != aInput) {
      print("Scalene");
    }
    if (aInput >= (bInput+cInput) || cInput >= (bInput+aInput) || bInput >= (aInput+cInput))
      print("not a triangle");
  }
}