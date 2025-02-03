import { SimpleCharacter } from "@/app/(categories)/characters/interfaces";
import { CharacterCard } from "./CharacterCard";

interface Props {
  characters: SimpleCharacter[];
}

export const CharacterGrid = ({ characters }: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {characters.map((character) => (
        <span>
          <CharacterCard key={character.id} character={character} />
        </span>
      ))}
    </div>
  );
};
