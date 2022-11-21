import React, { useState } from 'react'
import monsterNamesMock from '../mockResponse/monsterNames.json'



export default function Monsters() {

  const monsterNames = monsterNamesMock

  const monster = monsterNames.map((monster) => {
    return monster.name
  })
  const [newMonsterNames, setNewMonsterNames] = useState(monster)


  const inputSearch = (e) => {
    const value = e.target.value.toLocaleLowerCase();
    console.log(value)
    const filteredSearch = newMonsterNames.filter((newMonster)=>{
         return newMonster?.toLocaleLowerCase().includes(value)}
    )
    setNewMonsterNames(filteredSearch)


  }

  
  return (

    <div>
    <input
    type='search'
    onChange= {inputSearch}
    
    />

    {newMonsterNames.map( (newMonster) => {
     
     return (
      <>
        <h1>{newMonster}</h1>
      </>
     )
    })}
    </div>
  )
}
