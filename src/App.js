import "./styles.css";
import React, { useState } from "react";
import ButtonAppBar from "./components/header";
import CardGrid from "./components/cards";
import SearchBar from "./components/search";
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="App">
      <ButtonAppBar />
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <CardGrid />
    </div>
  );
}
