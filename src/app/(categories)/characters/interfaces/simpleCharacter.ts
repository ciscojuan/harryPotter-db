import { Ancestry , EyeColour , Gender , HairColour , House , Patronus , Wand } from "./characters.response";

export interface SimpleCharacter {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: Gender;
  house: House;
  dateOfBirth: string | null;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: Ancestry;
  eyeColour: EyeColour;
  hairColour: HairColour;
  wand: Wand;
  patronus: Patronus;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}
