import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.components.jsx";
import Search from './components/Search/search.component'

function App() {
  const [monster, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
 
  useEffect(() => {
    MonsterItem();
  }, []);
  const MonsterItem = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
  
    setMonsters(data);
  };

  const handleChange = (e)=>{
    setSearchField(e.target.value);
    
  }

  const filterMonsters = monster.filter(item=>{
   return item.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return (
    <div>
      <h1>MonsterPedia</h1>
      <Search inputType ={searchField} func = {handleChange}/>
      <CardList monsters = {filterMonsters}/> 
      
      
    </div>
  );
}

export default App;
