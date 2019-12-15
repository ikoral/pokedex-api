const assert = require('assert');

// a helper function to test if two data structures are the same
const areTheSame = (first, second) => {
  try {
    assert.deepStrictEqual(first, second);
    return true; // contain the same data
  } catch (err) {
    return false; // do not contain the same data
  }
}

const valuesForKey = (pokeArray, key) => {
  
  //first map array for given value
  const filteredArray = pokeArray.filter(item => Object.keys(item).includes(key));
  const mappedArray = filteredArray.map(item => item[key]);

  /*****remove duplication ES& new feature*****doesn't pass all test
  //const removeDuplicateArray = [...new Set(mappedArray)];
  //const removeDuplicate = mappedArray.filter((item,index) => 
  //mappedArray.indexOf(item) === index);


  /*****MY SOLUTIONS***USE OBJ UNIQUE KEY FEATURE*******/
  let library = {};
    let removeDuplicateArray = [];
    for (let i =0;i<mappedArray.length;i++){
      
      if (!(mappedArray[i] in library)){
        removeDuplicateArray.push(mappedArray[i]);
        library[mappedArray[i]] = true;
      }
    }
    
  return removeDuplicateArray;
};

module.exports = valuesForKey;


// if (value === "null"){
//   value = JSON.parse(value);
// }