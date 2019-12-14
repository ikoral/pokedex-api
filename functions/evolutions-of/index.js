const evolutionOf = (pokeArray, name) => {
    //find pokemon by given name
    const pokemon = pokeArray.find(element => element.name === name);
    //if there is no pokemon then return false.
    if (!pokemon){
        return [];
    }

    const resultArray = [];

    //"prev_evolution"
    if ("prev_evolution" in pokemon){
        resultArray.push(...pokemon.prev_evolution);
    }
    //pokemon itself
    resultArray.push({"num":pokemon.num, "name": pokemon.name});
    //"next_evolution"
    if ("next_evolution" in pokemon){
        resultArray.push(...pokemon.next_evolution);
    };

    return resultArray;
};

module.exports = evolutionOf;
