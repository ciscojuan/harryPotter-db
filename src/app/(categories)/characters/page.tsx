"use client";
import { useState } from "react";
import { getAllCharacters } from "@/utils/queries";
import { CharacterGrid } from "@/app/(categories)/characters/components/CharacterGrid";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  getAllCharacters().then((res) => {
    setCharacters(res);
  });

  return (
    <main className="flex flex-col items-center justify-center">
      <h2 className="text-4xl"> Harry Potter Characters</h2>
      <CharacterGrid characters={characters} />
    </main>
  );
}
