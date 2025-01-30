import { CharacterCard } from "../character/CharacterCard";
import { getAllCharacters } from "../utils/queries";

import Image from "next/image";

export const metadata = {
  author: "COD_",
};

export default async function Home() {
  const characters = await getAllCharacters();

  const categories = ["characters", "books", "movies", "potions", "spells"];

  return (
    <main className="flex flex-col item-center justify-center">
      <div className="flex flex-col items-center justify-center mb-10">
        <span className=" text-5xl">Harry PotterDB</span>
        <Image
          src="https://img2.wallspic.com/previews/1/8/1/5/5/155181/155181-harry_potter-harry_potter_y_el_nino_maldito-mgico_mundo-expreso_de_hogwarts-tren-x750.jpg"
          alt="logo"
          width={748}
          height={640}
          style={{ borderRadius: "15px", border: "3px solid #ce18c5" }}
        />
      </div>

      <div className="flex items-center justify-center"></div>
    </main>
  );
}
