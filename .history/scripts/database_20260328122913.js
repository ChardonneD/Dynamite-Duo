export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ], 
villians: [
  {
            id: 1,
            name: "Mr Glass",
            power: "Invincibility"
        },
        {
            id: 2,
            name: "Jack Sparrow",
            power: "Inibreation"
        },
        {
          id: 3,
          name: "Grinch",
          power: "Mean"
        }
]
}
export const getVillains = () => {
    return structuredClone(database.villians);
}
//structuredClone is a built-in JavaScript function that creates a deep copy of a value. This means it duplicates objects, arrays, and even complex data structures without keeping any references to the original.
