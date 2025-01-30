"use client"
import { getAllSpells } from '@/utils/queries';
import React, { useState } from 'react'
import SpellGridPage from './components/SpellGrid';


export default function Spells() {

  const [spells, setSpells] = useState([]);

  getAllSpells().then((res) => {
    setSpells(res);
  });

console.log(spells);
  return (
    <SpellGridPage spells={spells}/>
  )
}
