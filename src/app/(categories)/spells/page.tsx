"use client";
import { useEffect, useState } from "react";
import { getAllSpells } from "@/utils/queries";
import SpellGridPage from "./components/SpellGrid";

export default function Spells() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    getAllSpells()
      .then((res) => {
        setSpells(res);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching spells:", error);
        setLoading(false); // Even on error, stop loading indicator
      });
  }, []); // The empty dependency array ensures this runs only once after the initial render

  //console.log(spells);

  return (
    <main className="flex flex-col items-center justify-center">
      <h2 className="text-4xl"> Harry Potter Spells</h2>
      <SpellGridPage spells={spells} />
      {loading && <span>Loading spells ...</span>}
    </main>
  );
}
