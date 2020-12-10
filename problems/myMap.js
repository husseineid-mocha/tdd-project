function myMap (array, cb){
  const finalArray = []
  array.forEach(element => {
    finalArray.push(cb(element));
  });
  return finalArray;
}

module.exports = myMap;
