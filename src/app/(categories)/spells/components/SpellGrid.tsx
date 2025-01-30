import { Spells } from "../interfaces/spells";
import SpellCard from "./SpellCard";

interface Props {
  spells: Spells[];
}
export default function SpellGridPage({ spells }: Props) {

  return (
    <div>
      <h1 className="text-4xl text-center">Harry Potter Spells</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {spells.map((spell) => (
          <div key={spell.id} className="bg-white p-4 rounded-lg shadow-md">
          <SpellCard spell={spells}/>
          </div>
        ))}
      </div>
    </div>
  );
}
