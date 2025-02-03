"use client";
import { useEffect, useState } from "react";
import { getAllCharacters } from "@/utils/queries";
import { CharacterGrid } from "@/app/(categories)/characters/components/CharacterGrid";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCharacters()
      .then((res) => {
        setCharacters(res);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
        setLoading(false);
      });
  }, [])

  return (
    <main className="flex flex-col items-center justify-center">
      <h2 className="text-4xl"> Harry Potter Characters</h2>
      <CharacterGrid characters={characters} />
      {loading && <span>Loading characters ...</span>}
    </main>
  );
}
