import React from 'react';
import { useState } from "react";

import { Input, Button} from './styles';
import Header from '../Header';

const api = { 
  key: "1b0611a8ab0f4f7fa416c2d0ad1573c5",
  base: "https://api.openweatherapp.org/data/2.5/",
}

const Layout: React.FC = () => {
  const [search,setSearch] = useState("")

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&&APPID=${api.key}`,{
      mode: 'no-cors'})
    .then(res => res.json())
    .then((result) => {
      console.log(result)
    })
  }

  
  return (
    <div>
        <Header />
        <Input 
        type='text'
        placeholder='Enter city/town...'
        onChange={(e) => setSearch(e.target.value)}/>
        <Button onClick={searchPressed}>Search</Button>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
    </div>
  );
}

export default Layout;