import axios from "axios";

export const url = "https://hp-api.onrender.com/api"

//get all caracters
export const getAllCharacters = async (limit = 5) => {
    const { data } = await axios.get(`${url}/characters`);
    return data;
};
//get character by id
export const getCharacterById = async (id) => {
    const { data } = await axios.get(`${url}/character/${id}`);
    return data;
};
//get all spells

export const getAllSpells = async () => {
    const { data } = await axios.get(`${url}/spells`);
    return data;
};
//get spell by id
export const getSpellById = async (id) => {
    const { data } = await axios.get(`${url}/spells/${id}`);
    return data;
};

