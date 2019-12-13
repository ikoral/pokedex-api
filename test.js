const test = [
    {
      "id": 83,
      "num": "083",
      "name": "Farfetch'd",
      "img": "http://www.serebii.net/pokemongo/pokemon/083.png",
      "type": [
        "Normal",
        "Flying"
      ],
      "height": "0.79 m",
      "weight": "15.0 kg",
      "candy": "None",
      "egg": "5 km",
      "spawn_chance": 0.0212,
      "avg_spawns": 2.12,
      "spawn_time": "01:09",
      "multipliers": null,
      "weaknesses": [
        "Electric",
        "Rock"
      ]
    },
    {
      "id": 84,
      "num": "084",
      "name": "Doduo",
      "img": "http://www.serebii.net/pokemongo/pokemon/084.png",
      "type": [
        "Normal",
        "Flying"
      ],
      "height": "1.40 m",
      "weight": "39.2 kg",
      "candy": "Doduo Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.52,
      "avg_spawns": 52,
      "spawn_time": "05:10",
      "multipliers": [
        2.19,
        2.24
      ],
      "weaknesses": [
        "Electric",
        "Rock"
      ],
      "next_evolution": [
        {
          "num": "085",
          "name": "Dodrio"
        }
      ]
    },
    {
      "id": 85,
      "num": "085",
      "name": "Dodrio",
      "img": "http://www.serebii.net/pokemongo/pokemon/085.png",
      "type": [
        "Normal",
        "Flying"
      ],
      "height": "1.80 m",
      "weight": "85.2 kg",
      "candy": "Doduo Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.22,
      "avg_spawns": 22,
      "spawn_time": "02:12",
      "multipliers": null,
      "weaknesses": [
        "Electric",
        "Rock"
      ],
      "prev_evolution": [
        {
          "num": "084",
          "name": "Doduo"
        }
      ]
    },
    {
      "id": 86,
      "num": "086",
      "name": "Seel",
      "img": "http://www.serebii.net/pokemongo/pokemon/086.png",
      "type": [
        "Water"
      ],
      "height": "1.09 m",
      "weight": "90.0 kg",
      "candy": "Seel Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.28,
      "avg_spawns": 28,
      "spawn_time": "06:46",
      "multipliers": [
        1.04,
        1.96
      ],
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "next_evolution": [
        {
          "num": "087",
          "name": "Dewgong"
        }
      ]
    },
    {
      "id": 87,
      "num": "087",
      "name": "Dewgong",
      "img": "http://www.serebii.net/pokemongo/pokemon/087.png",
      "type": [
        "Water",
        "Ice"
      ],
      "height": "1.70 m",
      "weight": "120.0 kg",
      "candy": "Seel Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.013,
      "avg_spawns": 1.3,
      "spawn_time": "06:04",
      "multipliers": null,
      "weaknesses": [
        "Electric",
        "Grass",
        "Fighting",
        "Rock"
      ],
      "prev_evolution": [
        {
          "num": "086",
          "name": "Seel"
        }
      ]
    }
  ];

  const keyValueArray = test.find(item => item["egg"] == "Not in Eggs");
  //console.log(keyValueArray);

  const resultArray = test.filter(element => element["egg"] == "Not in Eggs");
  //console.log(resultArray);

  const result = [];
    resultArray.forEach(element => {
        result.push({"num": element.num, "name": element.name})
    });
  //console.log(result);

  const resultArray2 = test.filter(element => 
    element["type"].find(item => item == 'Water'));
  console.log(resultArray2);