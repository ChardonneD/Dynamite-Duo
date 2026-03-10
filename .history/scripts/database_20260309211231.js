 const database = {
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
            name: "Mr. Glass",
            power: "Super intelligence"
        },
        {
            id: 2,
            name: "Lex Luthor",
            power: "Super strength"
        },
        {
            id: 3,
            name: "The Joker",
            power: "Unpredictability"
        }
    ]
};

export const getHeroes = () => {
    return structuredClone(database.heroes);
}

export const getVillains = () => {
    return structuredClone(database.villains);
}
