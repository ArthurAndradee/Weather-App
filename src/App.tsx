import { useState } from "react";
import Layout from "./Layout";
import Globalstyles from "./styles/Globalstyles";

const api = { 
  key: "1b0611a8ab0f4f7fa416c2d0ad1573c5",
  base: "https://api.openweatherapp.org/data/2.5/",
}

function App() {
  const [search,setSearch] = useState("")

  return (
    <div>
      <Layout />
      <Globalstyles />
    </div>
  );
}

export default App;
