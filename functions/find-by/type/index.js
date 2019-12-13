const type = (pokeArray, type) => {
    //check if we have any pokemon with this type
    const resultArrayFull = pokeArray.filter(element =>
        element["type"].find(item => item == type));
      
    //return array include name and num
    const resultArrayExpected = [];
    resultArrayFull.forEach(element => {
        resultArrayExpected.push({"num": element.num, "name": element.name})
    });
    return resultArrayExpected;
};

module.exports = type;
