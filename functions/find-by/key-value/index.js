// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const keyValue = (pokeArray, key, value) => {
    //value = JSON.parse(value);
        //Early return if we don't have this key-value pair return empty array.
    const keyValueObject = pokeArray.find(element => element[key] == value);
       
    if (!keyValueObject) return[];
    
    const resultArrayFull = pokeArray.filter(element => element[key] == value);

    const resultArrayExpected = [];
    resultArrayFull.forEach(element => {
        resultArrayExpected.push({"num": element.num, "name": element.name})
    });
    return resultArrayExpected;
};

module.exports = keyValue;
