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
    ]
    villians: [
        {
            id: 1,
            name: "Mr. Glass"
            power: "Super intelligence"
        },
        {
            id: 2,
            name: "Lex Luthor",
            power: "Super strength"
        }
    ]
};

export const getVillains = () => {
    return structuredClone(database.villains);
}
