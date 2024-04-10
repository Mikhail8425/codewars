function comp(array1, array2){
  if (array1 === null || array2 === null) {
    return false
  }
  let arr1 = array1.map(function(a1){
    return aPw = Math.pow(a1, 2);
  });
  arr1.sort();
  array2.sort();
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== array2[i]) return false;
  }
  return true;
}