import { Spells } from "../interfaces/spells";
import SpellCard from "./SpellCard";

interface Props {
  spells: Spells[];
}
export default function SpellGridPage({ spells }: Props) {

  console.log(spells);
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center">
        {spells.map((spell) => (
          <div key={spell.id} className="bg-white p-4 rounded-lg shadow-md">
            <span>
              <SpellCard spell={spell} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
